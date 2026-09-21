# PRIYA RANJAN — SOFTWARE ENGINEER & SYSTEMS BUILDER

> **Human-Crafted Personal Engineering Portfolio & Technical Dossier**  
> Built with Next.js 16 (Turbopack), React 19, TypeScript 5, Tailwind CSS 4, and an editorial Warm Ink design system.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-e05d38?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📑 Table of Contents

1. [About the Redesign](#-about-the-redesign)
2. [Design System & Palette (Warm Ink)](#-design-system--palette-warm-ink)
3. [Typography Identity](#-typography-identity)
4. [Showcase Projects](#-showcase-projects)
5. [Story & Philosophy](#-story--philosophy)
6. [Project Structure](#-project-structure)
7. [Running Locally](#-running-locally)
8. [Automated Verification](#-automated-verification)
9. [Author Coordinates](#-author-coordinates)

---

## 🌿 About the Redesign

This portfolio has been intentionally crafted to feel **human-built, restrained, and authentic**, moving far away from AI-generated cyberpunk clichés:

- **No Cyberpunk Gimmicks**: Replaced overused neon cyan/purple gradients and heavy glassmorphism with a single, restrained **Warm Ink & Terracotta** palette.
- **Genuine First-Person Story**: The "About" page documents Priya's genuine journey into Computer Science, his fascination with DevOps and cloud infrastructure, concrete lessons learned from broken code and production failures, and his life outside the terminal.
- **Clear Visual Hierarchy**: One authoritative hero statement on the landing page, generous whitespace, comfortable reading line lengths (65–75 characters max), and zero badge clutter.
- **Fast Page Load**: Removed persistent background WebGL particle loops (`<Scene />`) across standard pages, reducing initial payload and achieving instant hydration.
- **Honest Project Language**: Explains projects in plain, confident engineering language with real metrics, verifiable architecture diagrams, and open-source GitHub repositories.

---

## 🎨 Design System & Palette (Warm Ink)

The design enforces a strict **90% Neutral / 10% Accent** ratio:

| Token | Hex / RGB | Role |
|---|---|---|
| **Background Primary** | `#0f1013` | Deep, warm charcoal obsidian ink |
| **Card / Surface** | `#16181d` | Warm elevated card surface with subtle border |
| **Borders** | `#282a32` | Restrained hairline dividers |
| **Text Primary** | `#f4f3ef` | Soft, warm alabaster paper white |
| **Text Secondary** | `#9c9a95` | Muted neutral gray for readable body text |
| **Single Accent** | `#e05d38` | Warm Terracotta / Burnt Amber for focal highlights |
| **Accent Hover** | `#ea6e49` | Interactive button and link hover state |

---

## ✍️ Typography Identity

Standardized on **two cohesive fonts**:
- **Display**: `Space Grotesk` — clean, structural, modern headings with subtle character.
- **Body**: `Inter` — highly legible, comfortable letter-spacing for long-form reading.
- **Code / Monospace**: `JetBrains Mono` — strictly reserved for technical snippets, commands, and metadata.

---

## 🚀 Showcase Projects

### 01. VIREONIQ
> **Developer Career Roadmap & Code Analysis Engine**  
> *Stack: Python, FastAPI, React 18, Qdrant Vector DB, Docker Compose*
- Parses submitted code via Python Abstract Syntax Trees (AST) to evaluate structural complexity without dynamic execution vulnerabilities.
- Calculates prerequisite learning roadmaps using semantic similarity in Qdrant.
- Verified with 153 automated test cases.

### 02. TRUSTSHIELD X
> **Concurrent Threat Scanner & Security Analysis Tool**  
> *Stack: Python 3.13, AsyncIO, FastAPI, PyCryptodome, Docker*
- Executes concurrent asynchronous socket and HTTP probes to test open ports and security headers in sub-15ms.
- Generates cryptographically signed SHA-256 audit logs to guarantee record integrity.

### 03. PRIOCARDIX AI
> **Cardiovascular Risk Calculator & Scenario Simulator**  
> *Stack: React, Vite, Zustand, Chart.js, Tailwind CSS*
- Multi-factor cardiovascular risk evaluation with real-time "what-if" scenario simulation sliders.
- Powered by a reactive Zustand store for instant, zero-latency recalculations.

### 04. DISK SCHEDULING ALGORITHM
> **Operating System Storage Kinematics Simulator**  
> *Stack: Vanilla JavaScript, HTML5 Canvas, CSS Grid*
- Interactive 60 FPS Canvas simulator comparing 11 operating system disk scheduling algorithms (FCFS, SSTF, SCAN, LOOK, etc.).
- Normalized track coordinates enable smooth, resolution-independent rendering.

---

## 📖 Story & Philosophy

Read Priya's full story in [`/about`](file:///c:/Users/PRIYE%20RANJAN/OneDrive/Desktop/PORTFOLIO/portfolio-app/src/app/about/page.tsx):
- **Why Computer Science**: Driven by simple curiosity about what happens behind the browser address bar.
- **Why DevOps & Cloud**: The humbling reality of code that works on a laptop breaking on a server, and the satisfaction of automated, calm deployments.
- **Lessons from Failure**:
  - *The Unbounded Connection Storm* (socket leaks, learning bounded semaphores and timeouts).
  - *The Premature Microservices Trap* (over-engineering, learning that simple modular monoliths with Redis caching beat distributed microservice sprawl).
- **Life Beyond the Terminal**: Computing history books, building mechanical keyboards, long-distance running, and pour-over coffee.

---

## 💻 Running Locally

```bash
# 1. Enter the application directory
cd portfolio-app

# 2. Install dependencies
npm install

# 3. Start the Turbopack development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔍 Automated Verification

Verify all 26 production routes:
```bash
node scripts/verify-content.js
```
Expected output:
```
--- DETAILED SSR HTML VALIDATION ---
[VERIFIED 200] /                      | Size: 40.2 KB | Valid HTML: true
[VERIFIED 200] /about                 | Size: 33.6 KB | Valid HTML: true
[VERIFIED 200] /work                  | Size: 53.8 KB | Valid HTML: true
...
--- ALL ROUTES SERVED CLEANLY ---
```

---

## 📬 Author Coordinates

**Priya Ranjan**  
*Computer Science & Engineering Undergraduate (2023–2027)*  
*Email*: [priye0201@gmail.com](mailto:priye0201@gmail.com)  
*GitHub*: [github.com/Priya-Ranjan-0201](https://github.com/Priya-Ranjan-0201)  
*LinkedIn*: [linkedin.com/in/priye-ranjan](https://linkedin.com/in/priye-ranjan)  
