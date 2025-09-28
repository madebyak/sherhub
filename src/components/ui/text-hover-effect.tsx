"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [autoAnimating, setAutoAnimating] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Auto-animation for touch devices
  useEffect(() => {
    if (isTouchDevice && svgRef.current) {
      setAutoAnimating(true);
      setHovered(true);
      
      const animatePosition = () => {
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (!svgRect) return;
        
        const centerX = svgRect.left + svgRect.width / 2;
        const centerY = svgRect.top + svgRect.height / 2;
        const radius = svgRect.width * 0.55;
        
        let angle = 0;
        const animate = () => {
          if (!autoAnimating) return;
          
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          setCursor({ x, y });
          angle += 0.02;
          
          requestAnimationFrame(animate);
        };
        
        animate();
      };
      
      const timer = setTimeout(animatePosition, 1000);
      return () => {
        clearTimeout(timer);
        setAutoAnimating(false);
      };
    }
  }, [isTouchDevice, autoAnimating]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1200 400"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={!isTouchDevice ? () => setHovered(true) : undefined}
      onMouseLeave={!isTouchDevice ? () => setHovered(false) : undefined}
      onMouseMove={!isTouchDevice ? (e) => setCursor({ x: e.clientX, y: e.clientY }) : undefined}
      className="select-none w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ 
        // Safari-specific fixes
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        perspective: 1000,
      }}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#fe4306" />
              <stop offset="25%" stopColor="#ff6b35" />
              <stop offset="50%" stopColor="#52555a" />
              <stop offset="75%" stopColor="#6b6f75" />
              <stop offset="100%" stopColor="#fe4306" />
            </>
          )}
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      
      {/* Background text for depth */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="2"
        className="fill-transparent stroke-neutral-white/20 font-tomato font-medium"
        style={{ 
          fontSize: "280px", 
          opacity: hovered ? 0.3 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {text}
      </text>
      
      {/* Animated stroke text - Safari optimized */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="2"
        className="fill-transparent stroke-neutral-white font-tomato font-medium"
        style={{ 
          fontSize: "280px",
          // Safari-friendly stroke dash
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        initial={{ 
          strokeDashoffset: 2000, 
          strokeDasharray: "2000 2000",
          opacity: 0.8
        }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: "2000 2000",
          opacity: 1
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          // Safari-specific easing
          times: [0, 0.8, 1],
          opacity: { duration: 0.5 }
        }}
      >
        {text}
      </motion.text>
      
      {/* Gradient text with mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="2"
        mask="url(#textMask)"
        className="fill-transparent font-tomato font-medium"
        style={{ 
          fontSize: "280px",
          // Safari mask fallback
          WebkitMask: hovered ? 'url(#textMask)' : 'none',
        }}
      >
        {text}
      </text>
    </svg>
  );
};
