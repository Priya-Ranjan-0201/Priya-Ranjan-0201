# 🫀 Priocardix AI: Enterprise Preventive Cardiology Platform
### Powered by PulseIQ Guardian Engine™ `v1.4.2-Guardian-Elite`

> **"Predict. Prevent. Protect — Intelligent Cardiac Care for the Future."**

Priocardix AI is a startup-scale, fully autonomous cardiovascular intelligence system. Built on a modular microservice architecture with a **Global Guardian Brain** (Zustand), it delivers real-time predictive diagnostics, personalized clinical interventions, and population health surveillance — all synchronized across every UI component via a single source of truth.

---

## 🏗️ System Architecture (v6.0 — "Guardian Elite")

### Global Guardian Brain
The entire platform is orchestrated through **`healthStore.js`** (Zustand + persist), the single source of truth for all vitals, metrics, and system state across every page and component.

| State Domain | Fields |
|---|---|
| **Live Vitals**    | `bpm`, `bp`, `stress`, `sleep`, `risk`, `healthScore` |
| **Elite Metrics**  | `confidence`, `stability`, `cardiacLoad`, `explainabilityScore` |
| **Workspace**      | `isMainSidebarCollapsed` — Global workspace expansion control |
| **Personalization**| `age`, `weight`, `height`, `gender`, `medicalHistory` |
| **System**         | `emergencyState`, `systemMode`, `systemStatus`, `modelVersion`, `dataSource` |
| **Intelligence**   | `isAnomalyDetected`, `isDriftDetected`, `isAiThinking`, `isStabilizing` |
| **Audit**          | `auditLogs[]` — timestamped event trail for all major system events |

### Microservice Backend (Repository v6.0 Restructured)

| Service | Responsibility |
|---|---|
| **Prio-Gateway**        | Multi-agent routing, authentication, and secure API bridging |
| **Guardian ML Engine**  | Deterministic risk scoring, `/api/predict`, personalized health plan |
| **Intervention Hub**    | Daily medication adherence, gamification, behavioral tasks |
| **Population Analytics**| Global node monitoring, heatmaps, and federated convergence |
| **Alert Hub**           | Emergency caregiver linking and encrypted secure alerts |
| **Postgres Database**   | Centralized enterprise-grade storage for longitudinal history |

---

## 🚀 Key Guardian Elite Features (v6.0)

### 🧩 Global Workspace Expansion (New)
- **Universal Expansion Hub**: A floating, logo-branded control at the bottom-left of the screen allows users to expand their workspace globally, collapsing the main navigation to maximize focus on diagnostics.
*   **Cross-Page Persistence**: Sidebar state is managed via the **Guardian Brain**, ensuring your preferred layout persists as you navigate between modules.

### 🧠 The Deterministic Sentinel Engine (Refined)
- **Zero-Jitter Simulation**: The simulation engine has been upgraded to be purely deterministic. The same physiological inputs (BP, Stress, Sleep) now yield identical, repeatable results, eliminating simulation noise for medical accuracy.
- **Fail-Safe Recovery**: On any computational error, the system enters `FAIL_SAFE_RECOVERY_ACTIVE` and resets vitals to a safe baseline, logged instantly to the Audit trail.
- **Simulation Speed Control**: Toggle between **1x / 2x / 5x** simulation speed from the Digital Twin command center.
- **Performance Status Level**: `< 5ms → Optimal`, `< 20ms → Normal`, `> 20ms → Delayed`.

### 🛡️ Multi-Tier Emergency & Surveillance
| Tier | Risk Threshold | System Response |
|---|---|---|
| Warning      | > 70% | Orange top banner, shows active mode |
| Emergency    | > 85% | Full-screen modal + Guardian HUD dispatch |
| Critical     | > 95% | Red border HUD overlay + Emergency Terminal |
| Dispatch Initiated | 5s after Emergency | Satellite uplink + AIIMS Heart Specialty Lock |

### 🔬 Intelligence & Transparency
- **Explainability Score** (0–100): Calculated from the count and strength of risk factors (high BP, stress, poor sleep).
- **Calibrated Confidence Index** (85–88%): Realistically calibrated AI reliability metric reflecting clinical-grade performance standards (no over-fitting).
- **Health Drift Detection**: Compares historical blocks to detect worsening cardiac trends.
- **Cardiac Analytics Hub**: Relocated Guardian Elite Summary and Clinical determinants to centralized hubs for better clinical workflow.

### 👥 Global Interface Refinements
- **Hover-Reveal Navigation**: Right-hand navigation dock labels are hidden by default, appearing only on hover for a zero-distraction UI.
- **Micro-Animations**: Framer Motion-powered layout shifts and holographic pulse effects for a premium diagnostic experience.

---

## 📦 Deployment & Setup

### 💻 Manual Method (Standalone)
```bash
# 1. Start Backend (ML Engine)
cd services/ml-service
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000

# 2. Start Frontend
cd frontend
npm install
npm run dev
```
✅ Frontend: `http://localhost:5173`
✅ Backend API: `http://localhost:8000`

### 🐳 Docker Method (Full Enterprise Stack)
```bash
cd infrastructure
docker-compose up -d --build
```

---

## 📄 Final Disclosure
**Academic Project | Patent Proof-of-Concept | v6.0 "Guardian Elite"**
Priocardix AI is an educational technology demonstration and is not intended for real clinical diagnostics.

Built with ❤️ by **Priya Ranjan**
 demonstration and is not intended for real clinical diagnostics.

Built with ❤️ by **Priya Ranjan**
