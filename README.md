# IH Hand Sanitation - Web Application (`ih-hand-sanitation-www`)

This repository contains the front-end Web Application for the **Insightful Health (IH) Hand Sanitation** portal. Built with Angular, it incorporates modular UI component submodules for reusable page layouts, product offerings, news carousels, headers, footers, and partner showcases.

---

## 📋 Table of Contents

- [Quick Start Guide](#-quick-start-guide)
- [Working with Git Submodules](#-working-with-git-submodules)
  - [Submodule Initialization](#submodule-initialization)
  - [Updating Submodules](#updating-submodules)
  - [Standalone Component Conversion](#standalone-component-conversion)
- [Component Submodules Overview](#-component-submodules-overview)
- [Automation & Helper Scripts](#-automation--helper-scripts)
- [Documentation & Migration Notes](#-documentation--migration-notes)
- [Development & Deployment Commands](#-development--deployment-commands)

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)
- [Git](https://git-scm.com/)

### 1-Step Setup Script

For new developers cloning the repository for the first time, run the automated setup script located at [`scripts/getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/getting_started.sh):

```bash
./scripts/getting_started.sh
```

**What this script does:**

1. Initializes and clones all Git submodules recursively (`git submodule update --init --recursive`).
2. Installs Node package dependencies defined in [`package.json`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/package.json).
3. Launches the local Angular development server via `ng serve`.

Access the application in your browser at `http://localhost:4200/`.

---

## 🧩 Working with Git Submodules

The UI layout components are hosted in separate Git repositories under the `DTIG-US` organization and mounted into `src/app/` as **Git Submodules**.

> [!IMPORTANT]
> **Submodule Complexity for Developers:**

- When cloning `ih-hand-sanitation-www`, Git does **not** download submodule content by default. Submodule directories will appear empty until initialized.
- Always run `git submodule update --init --recursive` after cloning or switching branches.
- Each submodule is pinned to a specific commit. If you make changes inside a submodule folder, you must commit and push inside that submodule repository first, then commit the updated submodule reference pointer in `ih-hand-sanitation-www`.

### Submodule Initialization

If you prefer to initialize submodules manually instead of using `getting_started.sh`:

```bash
git submodule init
git submodule update --recursive
```

To add a new submodule to `src/app/`, use the helper script [`scripts/add_submodule.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/add_submodule.sh).

### Updating Submodules

To pull the latest changes for all UI submodules across the project, run [`scripts/update_submodules.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/update_submodules.sh):

```bash
./scripts/update_submodules.sh
```

### Standalone Component Conversion

The submodules originally contained traditional Angular components requiring `NgModule`. For Angular 15+ & standalone architecture compatibility, components are configured as standalone components in `src/app/app.ts` (`standalone: true` decorator setting).

If you re-clone or pull clean submodules, run [`scripts/post_getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/post_getting_started.sh) to re-apply the standalone transformations and style configurations automatically.

---

## 📦 Component Submodules Overview

The layout of the portal is composed of five standalone component submodules:

| Component Path | Selector | Repository Link | Description / Purpose |
| --- | --- | --- | --- |
| [`src/app/web-header`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-header) | `<app-header>` | [web-header Repo](https://github.com/DTIG-US/web-header) | Navigation header, company branding, and primary menu links. |
| [`src/app/web-carousel`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-carousel) | `<app-carousel>` | [web-carousel Repo](https://github.com/DTIG-US/web-carousel) | Hero banner carousel and news feed panel using `ngx-slick-carousel`. |
| [`src/app/web-partner`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-partner) | `<app-partners>` | [web-partner Repo](https://github.com/DTIG-US/web-partner) | Partner logo showcase and affiliate link slider. |
| [`src/app/web-offering`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-offering) | `<app-offering>` | [web-offering Repo](https://github.com/DTIG-US/web-offering) | Product and service feature matrix grid. |
| [`src/app/web-footer`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-footer) | `<app-footer>` | [web-footer Repo](https://github.com/DTIG-US/web-footer) | Page footer, copyright, privacy policy, and social links. |

---

## 🛠️ Automation & Helper Scripts

Helper bash scripts are located in the [`scripts/`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/) folder to simplify development:

- [`scripts/getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/getting_started.sh) — One-click setup: initializes submodules, installs `node_modules`, and starts the dev server.
- [`scripts/update_submodules.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/update_submodules.sh) — Syncs and pulls the latest commits across all five Git submodules.
- [`scripts/add_submodule.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/add_submodule.sh) — Batch adds and configures required UI submodules into `src/app/`.
- [`scripts/post_getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/post_getting_started.sh) — Migration & post-setup utility that converts components to standalone, patches `angular.json` styles, and links Bootstrap/Slick dependencies.

---

## 📄 Documentation & Migration Notes

- [Migration Documentation](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/doc/Migration_Documentation.md) — Architectural notes on converting template components to standalone, registering `SlickCarouselModule`, and syncing global CSS styles (`styles.css`, `bootstrap`, `slick-carousel`).
- [AGENTS.md](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/AGENTS.md) — Angular and TypeScript development guidelines for AI and human contributors.

---

## 💻 Development & Deployment Commands

Standard Angular CLI commands configured in [`package.json`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/package.json):

```bash
# Start local dev server (http://localhost:4200)
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Serve using Static Web Apps CLI (for Azure SWA testing)
npx swa start
```
