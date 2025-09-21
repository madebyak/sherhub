# SherHub - Corporate Website

A modern, responsive corporate website for SherHub built with cutting-edge web technologies. This project showcases SherHub's services, expertise, and client portfolio through an elegant and performant user interface.

**Designed & Developed by [Moonwhale](https://www.moonswhale.com)**



## 📦 Project Structure

```
sherhub/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services page
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── sections/       # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
│   ├── clients/          # Client logos
│   ├── fonts/            # Custom fonts
│   └── logos/            # Brand assets
└── docs/                 # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sherhub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design System

### Fonts
- **Primary**: Tomato Grotesk (Bold, Medium, Regular)
- Custom font loading with Next.js optimization

### Color Palette
Refer to `COLORS_REFERENCE.md` for the complete brand color system.

### Components
- **LogoLoop**: Animated logo carousel for client showcase
- **SpotlightCard**: Interactive card component with hover effects
- **VideoHero**: Full-screen video background hero section

## 🌐 Pages

- **Homepage** (`/`): Hero section, services overview, client showcase
- **About** (`/about`): Company information and team
- **Services** (`/services`): Detailed service offerings
- **Contact** (`/contact`): Contact form and information

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## ⚡ Performance Features

- **Turbopack**: Lightning-fast development builds
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Font Optimization**: Self-hosted fonts with optimal loading

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting and style consistency
- **TypeScript**: Strict type checking enabled

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

The application can be deployed on:
- **Vercel** (Recommended): Zero-config deployment
- **Netlify**: Static site deployment
- **Custom Server**: Node.js compatible hosting

For Vercel deployment:
1. Connect your repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with zero configuration

## 📄 License

This project is proprietary software developed by Moonwhale for SherHub.

## 👥 Credits

**Design & Development**: [Moonwhale](https://www.moonswhale.com)
- Modern web application architecture
- Custom component development
- Performance optimization
- Responsive design implementation

---

© 2024 SherHub. All rights reserved. Designed & Developed by Moonwhale.