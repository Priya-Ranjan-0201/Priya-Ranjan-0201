# 🛠️ GitHub Profile Setup & Deployment Guide
**Engineering Identity for Priya Ranjan (`Priya-Ranjan-0201`)**

This guide provides step-by-step instructions to deploy, configure, and verify your new premium GitHub profile.

---

## Table of Contents
1. [Understanding the Profile Repository](#1-understanding-the-profile-repository)
2. [Step-by-Step Repository Creation](#2-step-by-step-repository-creation)
3. [Uploading & Folder Structure](#3-uploading--folder-structure)
4. [Customizing Contact & Social Placeholders](#4-customizing-contact--social-placeholders)
5. [Configuring GitHub Actions for the Contribution Snake](#5-configuring-github-actions-for-the-contribution-snake)
6. [Pinned Repositories Strategy](#6-pinned-repositories-strategy)
7. [Visual Verification Checklist (Dark & Light Mode)](#7-visual-verification-checklist-dark--light-mode)
8. [Failure Fallbacks & Redundancy](#8-failure-fallbacks--redundancy)

---

## 1. Understanding the Profile Repository

GitHub has a special feature: when you create a public repository with the **exact same name as your GitHub username**, GitHub renders that repository's `README.md` at the top of your public profile page (`https://github.com/Priya-Ranjan-0201`).

- **Username:** `Priya-Ranjan-0201`
- **Required Repository Name:** `Priya-Ranjan-0201`
- **Visibility:** **Public** (Private repositories will not display on your profile)
- **Primary Branch:** `main`

---

## 2. Step-by-Step Repository Creation

Follow these steps directly on GitHub:

1. **Log into GitHub** with your account `Priya-Ranjan-0201`.
2. **Navigate to New Repository:** Go to [https://github.com/new](https://github.com/new).
3. **Set Repository Name:** Type exactly:
   ```text
   Priya-Ranjan-0201
   ```
   > 💡 *GitHub will display a green banner stating: "You found a secret! Priya-Ranjan-0201/Priya-Ranjan-0201 is a special repository that you can use to add a README.md to your GitHub profile."*
4. **Choose Visibility:** Select **Public**.
5. **Initialize:** You can leave "Add a README file" unchecked (since you already have the complete files prepared here).
6. **Click "Create repository".**

---

## 3. Uploading & Folder Structure

Ensure your repository contains the exact folder structure below:

```text
Priya-Ranjan-0201/
├── README.md                          <-- The centerpiece profile README
├── README_SETUP.md                    <-- This deployment guide
├── REPOSITORY_README_TEMPLATE.md      <-- Template for your individual project repos
├── .github/
│   └── workflows/
│       └── snake.yml                  <-- Action to generate contribution snake
└── assets/
    ├── hero-banner.svg                <-- Animated hero banner with PR monogram
    ├── workflow-pipeline.svg          <-- Idea to Impact engineering pipeline
    ├── build-cycle.svg                <-- Build-Test-Break-Understand-Rebuild cycle
    └── cards/
        ├── card-vireoniq.svg          <-- 01 VIREONIQ card
        ├── card-trustshield.svg       <-- 02 TrustShield-X card
        ├── card-techontour.svg        <-- 03 TECH-ON-TOUR card
        ├── card-hrcv.svg              <-- 04 HRCV- card
        ├── card-priocardix.svg        <-- 05 Priocardix-AI card
        ├── card-braincheck.svg        <-- 06 BrainCheck card
        └── card-diskscheduling.svg   <-- 07 Disk Scheduling card
```

### Pushing via Terminal (Recommended)

From the folder `c:\Users\PRIYE RANJAN\OneDrive\Desktop\github`:

```bash
git init
git add .
git commit -m "feat: complete premium engineering profile overhaul"
git branch -M main
git remote add origin https://github.com/Priya-Ranjan-0201/Priya-Ranjan-0201.git
git push -u origin main
```

*(If you already initialized the repository with a README on GitHub, run `git pull origin main --rebase` before pushing).*

---

## 4. Customizing Contact & Social Placeholders

Open `README.md` in your editor and perform a search & replace for the following 3 placeholder strings:

| Search For | Replace With | Example |
| :--- | :--- | :--- |
| `REPLACE_THIS_WITH_PORTFOLIO_URL` | Your live portfolio URL | `https://priyaranjan.dev` |
| `REPLACE_THIS_WITH_LINKEDIN_URL` | Your LinkedIn profile URL | `https://linkedin.com/in/priyaranjan` |
| `REPLACE_THIS_WITH_EMAIL` | Your direct contact email | `priyaranjan.cs@gmail.com` |

Both the top action badges and the bottom **"10 // LET'S CONNECT"** section will automatically update.

---

## 5. Configuring GitHub Actions for the Contribution Snake

The file `.github/workflows/snake.yml` automatically crawls your contributions and draws an animated snake eating contribution squares.

To give GitHub Actions permission to publish the generated SVG:

1. In your `Priya-Ranjan-0201` repository, click **Settings** (top menu bar).
2. On the left sidebar, expand **Actions** → click **General**.
3. Scroll down to **Workflow permissions**.
4. Select **Read and write permissions**.
5. Check **Allow GitHub Actions to create and approve pull requests** (if visible).
6. Click **Save**.

### Triggering the Snake for the First Time:
1. Click the **Actions** tab in your repository.
2. Under "Workflows" on the left, click **Generate Contribution Snake**.
3. Click the **Run workflow** dropdown on the right → click the green **Run workflow** button.
4. Within 60 seconds, the workflow will complete and automatically create an `output` branch containing `github-contribution-grid-snake-dark.svg`.
5. Your README's `<picture>` tag will immediately display the live contribution snake.

---

## 6. Pinned Repositories Strategy

GitHub allows you to pin up to **6 repositories** right below your profile README. This represents your most valuable portfolio real estate.

### Recommended 6 Pinned Repositories:

1. **`VIREONIQ`**
   - *Rationale:* Demonstrates your flagship AI/ML, NLP, and full-stack product capabilities.
2. **`TrustShield-X`**
   - *Rationale:* Validates your focus on cybersecurity, threat defense, and defensive system design.
3. **`TECH-ON-TOUR`**
   - *Rationale:* Highlights full-stack execution, front-end architecture, and production UI polish.
4. **`HRCV-`**
   - *Rationale:* Provides tangible proof of your Computer Vision and image processing skills in Python.
5. **`Priocardix-AI`**
   - *Rationale:* Demonstrates applied machine learning, predictive modeling, and healthcare data analysis.
6. **`BrainCheck`** (or **`Disk_Scheduling_Algorithm`**)
   - *Rationale:* `BrainCheck` emphasizes cognitive modeling and diagnostics. If applying for low-level systems or OS-focused roles, swap with `Disk_Scheduling_Algorithm` to highlight C/Python systems algorithms.

### How to Pin:
1. Go to your main profile: `https://github.com/Priya-Ranjan-0201`.
2. Scroll to the "Pinned" section and click **Customize your pins**.
3. Check the 6 chosen repositories.
4. Drag and drop them into the exact sequence above.
5. Click **Save pins**.

---

## 7. Visual Verification Checklist (Dark & Light Mode)

Once pushed, open [https://github.com/Priya-Ranjan-0201](https://github.com/Priya-Ranjan-0201) and verify:

- [ ] **Hero Banner:** Displays the high-resolution PR monogram, active pulse, and crisp typography without cropping.
- [ ] **Typing Animation:** Rotating lines render smoothly on dark background.
- [ ] **Action Badges:** All 4 badges are vertically aligned and clickable.
- [ ] **Pipeline & Build Cycle:** SVGs expand responsively across desktop and mobile screens.
- [ ] **Project Cards:** 2-column layout renders cleanly with high-contrast text.
- [ ] **Stats & Streak:** Cards show live numbers with `#00F2FE` cyan accents matching the custom theme.
- [ ] **Light Mode Check:** Toggle GitHub to light mode (Settings → Appearance → Light Default). Verify that all dark-slate cards function as intentional visual modules with clear borders, ensuring full legibility.

---

## 8. Failure Fallbacks & Redundancy

If an external service ever experiences latency:
- **Typing SVG:** If `readme-typing-svg` is slow to respond, GitHub caches the image via Camo proxy. If blocked by network filters, the static hero banner and text headers convey all identity information immediately.
- **GitHub Stats Widget:** The stats and streak widgets use standard SVG rendering with embedded fallback styling.
- **Contribution Snake:** If the snake workflow hasn't run yet, GitHub's native contribution heatmap directly underneath the profile README ensures recruiters always see your consistency.
