# SYSTEM ARCHITECTURE & INTERNALS MANUAL

This document provides a low-level architectural specification of the cybernetic portfolio engine, detailing the WebGL rendering pipeline, component hierarchy, state machines, and styling token architecture.

---

## 1. High-Level Component Topology

```
RootLayout (src/app/layout.tsx)
├── LenisSmoothScrollProvider
├── SoundProvider (Web Audio API synthesis)
├── CustomCursor (src/components/layout/CustomCursor.tsx)
│     ├── Cursor follower with spring-damping
│     ├── Magnetic target lock
│     └── Mode state (default | link | pointer | text | active)
├── NavigationBar (src/components/layout/NavigationBar.tsx)
│     ├── Telemetry HUD indicator
│     ├── Sound FX toggler
│     └── Responsive slide-out terminal drawer
├── Main Content Slot
│     ├── Page Shell (SSR / Dynamic Route)
│     └── ThreeHeroPortrait3D / WebGL Fallback
├── SectionNavIndex (src/components/layout/SectionNavIndex.tsx)
│     ├── Scroll position observer
│     └── Quick teleport breadcrumb dock
└── GlobalFooter (src/components/layout/GlobalFooter.tsx)
      ├── Real-time UTC/IST clocks
      ├── Git commit telemetry
      └── Social coordinate links
```

---

## 2. 3D WebGL Rendering Pipeline

### Primary Canvas: `ThreeHeroPortrait3D`
- **Location**: `src/components/three/ThreeHeroPortrait3D.tsx`
- **Canvas Container**: React Three Fiber (`Canvas`) with dynamic pixel ratio clamping `[1, 2]`.
- **Scene Objects**:
  1. **Holographic Core Mesh**: Procedurally tessellated icosahedron wireframe with custom vertex wobble.
  2. **Orbital Telemetry Rings**: Concentric tori rotating on independent Euler axes at asynchronous angular velocities.
  3. **Particle Cloud**: 600+ point sprites computed using uniform spherical distribution.
- **Performance Safeguards**:
  - **WebGL Context Loss Handler**: Automatically detects context destruction and restores state.
  - **Graceful Fallback**: If WebGL 2.0 is unavailable or performance drops below 24 FPS, the component swaps seamlessly to an SVG/CSS animated kinetic mandala with zero layout shift.

---

## 3. Data & State Management Flow

```
┌────────────────────────────────────────────────────────┐
│               Static Data Layer (src/data/)             │
│   projects.ts  |  profile.ts  |  skills.ts  |  lab.ts   │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│             Zustand Stores (src/stores/)               │
│      useThemeStore.ts      |      useSoundStore.ts     │
└──────────────┬───────────────────────────┬─────────────┘
               │                           │
               ▼                           ▼
┌───────────────────────────┐ ┌──────────────────────────┐
│     Client Components     │ │    Web Audio Synthesizer │
│  SystemMode / ProductMode │ │  Click / Hover Sine SFX  │
│  Interactive Telemetry    │ │  Mute / Master Volume    │
└───────────────────────────┘ └──────────────────────────┘
```

---

## 4. Testing & Invariant Validation

Every release must pass the automated route verification script:
```bash
node scripts/verify-content.js
```
This tests:
- HTTP 200 response codes across all 26 production routes.
- Full HTML payload delivery (ensuring client bundles don't fail during server-side pre-rendering).
- Title tag and author metadata consistency.
