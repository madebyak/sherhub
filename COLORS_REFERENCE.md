# SherHub Color System Reference

This document outlines the custom color system implemented for SherHub website.

## Custom Color Palette

Based on the provided HEX codes, the following color system has been integrated into Tailwind CSS:

### Primary Colors
- **Orange (Brand Primary)**: `#fe4306` - Main brand color
  - Usage: `bg-brand-primary`, `text-brand-primary`

### Secondary Colors  
- **MidGrey (Brand Secondary)**: `#999da6` - Secondary brand color
  - Usage: `bg-brand-secondary`, `text-brand-secondary`

### Neutral Colors
- **Black**: `#161616` - Primary text and dark backgrounds
  - Usage: `bg-neutral-black`, `text-neutral-black`
- **DarkGrey (Brand Accent)**: `#52555a` - Accent color and secondary text
  - Usage: `bg-brand-accent`, `text-brand-accent`  
- **White**: `#f2f4f7` - Light backgrounds and text on dark backgrounds
  - Usage: `bg-neutral-white`, `text-neutral-white`

## Semantic Color Classes

For easier development, semantic color classes have been created:

### Brand Colors
- `brand-primary` → Orange (#fe4306)
- `brand-secondary` → MidGrey (#999da6)  
- `brand-accent` → DarkGrey (#52555a)

### Text Colors
- `text-primary` → Black (#161616) - Main text
- `text-secondary` → DarkGrey (#52555a) - Secondary text
- `text-muted` → MidGrey (#999da6) - Muted text

### Background Colors
- `bg-primary` → White (#f2f4f7) - Main background
- `bg-secondary` → MidGrey (#999da6) - Secondary background
- `bg-dark` → Black (#161616) - Dark background

## Usage Examples

```html
<!-- Primary button -->
<button class="bg-brand-primary hover:bg-brand-accent text-bg-primary">
  Get Started
</button>

<!-- Text styling -->
<h1 class="text-text-primary font-bold">Main Heading</h1>
<p class="text-text-secondary">Secondary text</p>
<span class="text-text-muted">Muted text</span>

<!-- Background styling -->
<div class="bg-bg-primary">Main content area</div>
<section class="bg-bg-dark text-bg-primary">Dark section</section>
```

## Font System

Custom TomatoGrotesk font has been implemented with three weights:
- Regular (400)
- Medium (500) 
- Bold (700)

Usage: `font-tomato` class or it's automatically applied to the entire site.
