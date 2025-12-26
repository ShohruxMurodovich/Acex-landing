# ACEX Marketing Landing Page

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A premium, high-performance landing page for **ACEX Marketing Agency**, specializing in SMM and Targeting services. Built with Vue 3, TypeScript, and a custom glassmorphism design system.

## 🎨 Design Features (V3)
This project implements a sophisticated "Premium SaaS" aesthetic:
- **Deep Graphite Theme**: Rich, professional dark mode background (`#0F1115`).
- **Glassmorphism**: "Lifted" UI cards with blurred backdrops and subtle borders.
- **Floating Header**: Modern "pill-style" sticky navigation with blur effects.
- **Refined Typography**: High-contrast headings and breathable body text using Inter font.
- **Micro-interactions**: Smooth fade-ins, hover lifts, and glowing accents.

## 🛠 Tech Stack
- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Native CSS Variables (Custom Design System)
- **Icons**: Lucide Vue Next

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ShohruxMurodovich/Acex-landing.git

# Navigate to project folder
cd Acex-landing

# Install dependencies
npm install
```

### Development

```bash
# Start local development server
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/        # Vue components
│   ├── ui/            # Reusable UI atoms (Buttons, Cards, Logo)
│   ├── HeroSection.vue
│   ├── PricingSection.vue
│   ├── ContactSection.vue
│   ├── TheHeader.vue
│   └── TheFooter.vue
├── styles/
│   └── globals.css    # Global design system & variables
├── App.vue            # Main application layout
└── main.ts           # Application entry point
```

## 📄 License
All rights reserved © 2025 ACEX Marketing.
