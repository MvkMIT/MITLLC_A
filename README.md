# Maganti Group Website

A modern, responsive corporate website for Maganti Group, LLC - a technology consulting service provider serving clients with end-to-end talent solutions since 2014.

## Overview

This is a Next.js 16 project built with React 19, TypeScript, and Tailwind CSS. The website showcases Maganti Group's services, leadership team, client testimonials, and contact information with a sophisticated design featuring scroll animations and modern UI components.

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.9
- **Animation**: Framer Motion 12.23.26
- **UI Components**: Radix UI primitives + shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Themes**: next-themes (dark/light mode support)

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   │       └── route.ts   # POST handler with nodemailer
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout with fonts
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── ui/               # shadcn/ui components (55+)
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── industries-section.tsx
│   ├── mission-section.tsx
│   ├── science-section.tsx
│   ├── scroll-blur-text.tsx
│   ├── testimonials-section.tsx
│   └── theme-provider.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── images/
│   └── leadership/
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Key Features

### Sections
1. **Header** - Navigation with mobile menu, theme toggle
2. **Hero** - Animated hero with call-to-action buttons
3. **About** - Company story and leadership team
4. **Industries** - Industry expertise showcase
5. **Mission** - Company values and mission statement
6. **Science** - Technology capabilities and approach
7. **Testimonials** - Auto-scrolling client testimonials carousel with real client photos
8. **Contact** - Contact form with email integration (nodemailer) and company information
9. **Footer** - Links and copyright

### UI Components (shadcn/ui)
- Accordion, Alert Dialog, Alert
- Avatar, Badge, Breadcrumb, Button
- Calendar, Card, Carousel, Chart
- Checkbox, Collapsible, Command, Context Menu
- Dialog, Drawer, Dropdown Menu
- Form, Hover Card, Input, Label
- Menubar, Navigation Menu, Popover
- Progress, Radio Group, Resizable
- Scroll Area, Select, Separator
- Sheet, Skeleton, Slider, Sonner (Toast)
- Switch, Table, Tabs, Textarea
- Toggle, Toggle Group, Tooltip

### Animations
- Scroll-triggered reveal animations
- Auto-scrolling testimonials carousel
- Framer Motion transitions
- ScrollBlurText component for headings

## API Routes

### POST `/api/contact`

Handles contact form submissions and sends emails via nodemailer (Gmail SMTP).

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response:**
- `200` - Email sent successfully
- `400` - Missing required fields
- `500` - Server error / Failed to send email

**Features:**
- HTML email template with styled table
- Plain text fallback
- Form validation
- Toast notifications via sonner

## Real Client Testimonials

The testimonials section features 5 real client testimonials with their photos:

1. **Javad Mokhbery** - FUTEK CEO
2. **Barbara Belicia** - WholePerson Therapeutics LLC
3. **Carlos Maldonado** - C&R Yard Pro
4. **Candace J. Kosinski-CPA** - Proprietor, CPA AuditPro 411
5. **Santos & The Ortega Family** - Nexus AutoGlass CT

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-v0-project

# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Start development server
pnpm dev
# or
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm start
```

## Scripts

- `dev` - Start development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.0.10 | Framework |
| react | 19.2.0 | UI Library |
| typescript | 5.x | Type safety |
| tailwindcss | 4.1.9 | Styling |
| framer-motion | 12.23.26 | Animations |
| lucide-react | 0.454.0 | Icons |
| @radix-ui/* | Latest | UI primitives |
| zod | 3.25.76 | Validation |
| nodemailer | latest | Email sending |
| @types/nodemailer | latest | Type definitions |

## Design System

- **Typography**: Serif headings, sans-serif body
- **Colors**: Primary, secondary, accent, muted themes
- **Spacing**: Consistent 6-8px grid system
- **Border Radius**: Rounded 2xl for cards
- **Shadows**: Subtle shadows with primary color accents

## Company Info

**Maganti Group, LLC**
- Founded: 2014
- Headquarters: Connecticut, USA
- Technology Hubs: India
- Services: Technology consulting, talent solutions, custom development
- Industries: Financial, Healthcare, Banking, Retail, Telecom

## License

Private - All rights reserved

## Contact

For inquiries about this project, contact Maganti Group.
