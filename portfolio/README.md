# 🌐 Priya Ranjan — Cinematic 3D Interactive Portfolio

<div align="center">

### A Next-Generation Editorial & 3D Interactive Web Experience

[![Next.js](https://img.shields.io/badge/Next.js-15+-00F2FE?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-38EF7D?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-FF5E62?style=flat-square)](../LICENSE)
[![Author](https://img.shields.io/badge/Author-Priya%20Ranjan-8B949E?style=flat-square&logo=github)](https://github.com/Priya-Ranjan-0201)

[Overview](#-overview) • [Core Features](#-core-features) • [Architecture](#-architecture) • [Local Setup](#-local-development) • [Deployment](#-deployment)

</div>

---

## 📌 Overview

This repository houses the source code for the **official personal portfolio and digital identity of Priya Ranjan**. Designed around a high-tech editorial aesthetic, the web application combines modern web animation, interactive system HUDs, custom shaders, and responsive UI components.

- **Design Philosophy:** *"Ideas → Systems → Code → Impact"*
- **Core Aesthetic:** Monochromatic near-black slate backdrop, electric cyan / mint accents, glassmorphic HUD overlays, and precision typography.

---

## ⚡ Core Features

- **Interactive 3D Mind Scan & System Diagnostics:** Interactive modal interfaces simulating system telemetry, mind state mapping, and engineering heuristics.
- **Dynamic Command Palette (`Ctrl + K` / `Cmd + K`):** Instant keyboard-driven navigation across sections, external links, and system actions.
- **Custom Cursor & Smooth Micro-Interactions:** Custom trailing cursor, progress scroll indicators, audio feedback toggles, and settings controls.
- **Curated Technical Showcases:** Dedicated responsive editorial views for **Work & Projects**, **Technical Skills**, **Experience**, and **Direct Contact**.

---

## 🏗️ Architecture & Directory Structure

Built using the **Next.js App Router** with strict TypeScript type safety:

```text
portfolio/
├── public/                 # Static assets, fonts, icons, and 3D models
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── contact/        # Direct contact & communication hub
│   │   ├── experience/     # Timeline & engineering background
│   │   ├── skills/         # Categorized engineering stack & competencies
│   │   ├── work/           # Deep-dive project showcases
│   │   ├── layout.tsx      # Root application layout & providers
│   │   └── page.tsx        # Hero landing page & interactive 3D portal
│   ├── components/         # Modular React UI components
│   │   ├── home/           # Landing page components (MindScan, Hero HUD)
│   │   └── layout/         # Navigation, Footer, CommandPalette, SettingsPanel, CustomCursor
│   └── lib/                # Utilities, hooks, and data definitions
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind design system tokens
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## 🚀 Local Development

### Prerequisites
- **Node.js:** `v18.17.0` or higher
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### 1. Navigate to Portfolio Directory
```bash
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ☁️ Deployment

### One-Click Deploy on Vercel
1. Import this repository into [Vercel](https://vercel.com).
2. Set the **Root Directory** to:
   ```text
   portfolio
   ```
3. Framework Preset: **Next.js**
4. Click **Deploy**.

---

## 📜 License

This portfolio and its custom design assets are protected under the [Proprietary & Strict Source-Available Copyright License](../LICENSE). All Rights Reserved.

---

<div align="center">

Designed &amp; Engineered by **[Priya Ranjan](https://github.com/Priya-Ranjan-0201)**  
*Building at the intersection of AI, cybersecurity, and software systems.*

</div>
