# IH Hand Sanitation - Web Application (`ih-hand-sanitation-www`)

This repository contains the front-end Web Application for the **Insightful Health (IH) Hand Sanitation** portal. Built with **Angular v20**, it incorporates five modular UI component submodules for reusable page layouts, product offerings, news carousels, headers, footers, and partner showcases.

---

## 📋 Table of Contents

- [Quick Start Guide](#-quick-start-guide)
- [Working with Git Submodules](#-working-with-git-submodules)
  - [Submodule Initialization](#submodule-initialization)
  - [Updating Submodules](#updating-submodules)
  - [Committing with Submodule Handling](#committing-with-submodule-handling)
  - [Standalone Components in Angular v20+](#standalone-components-in-angular-v20)
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

For new developers cloning the repository for the first time, run the automated setup script located at [`scripts/02_getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/02_getting_started.sh):

```bash
./scripts/02_getting_started.sh
```

**What this script does:**

1. Updates `src/app/app.html` to include all five layout component selectors.
2. Patches each submodule component file to be standalone-compatible (imports, selectors).
3. Copies CSS files from the reference `dtig-web` project to align styles globally.
4. Updates `angular.json` to include Bootstrap, jQuery, and Slick Carousel styles and scripts.

Access the application in your browser at `http://localhost:4200/` after running `npm start`.

---

## 🧩 Working with Git Submodules

The UI layout components are hosted in separate Git repositories under the `DTIG-US` organization and mounted into `src/app/` as **Git Submodules**.

> [!IMPORTANT]
> **Submodule Complexity for Developers:**

- When cloning `ih-hand-sanitation-www`, Git does **not** download submodule content by default. Submodule directories will appear empty until initialized.
- Always run `git submodule update --init --recursive` after cloning or switching branches.
- Each submodule is pinned to a specific commit. If you make changes inside a submodule folder, you must commit and push inside that submodule repository first, then commit the updated submodule reference pointer in `ih-hand-sanitation-www`.

### Submodule Initialization

If you prefer to initialize submodules manually:

```bash
git submodule init
git submodule update --recursive
```

To add a new submodule to `src/app/`, use the helper script [`scripts/01_add_submodules.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/01_add_submodules.sh).

### Updating Submodules

To pull the latest changes for all UI submodules across the project, run [`scripts/04_updating_stale_submodules.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/04_updating_stale_submodules.sh):

```bash
./scripts/04_updating_stale_submodules.sh
```

### Committing with Submodule Handling

To safely commit and push changes across submodules **and** the parent repository in the correct order, use [`scripts/03_commiting_with_submodule_handling.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/03_commiting_with_submodule_handling.sh):

```bash
# Commit all changed submodules + parent in one step
./scripts/03_commiting_with_submodule_handling.sh -m "your commit message"

# Commit a specific submodule only
./scripts/03_commiting_with_submodule_handling.sh -m "fix: header nav" -s src/app/web-header

# Preview what would happen without making changes
./scripts/03_commiting_with_submodule_handling.sh -m "style: update layout" -n
```

> [!WARNING]
> Always use this script (or manually push submodules first) before committing the parent repo. Committing a parent repo pointer to an unpushed submodule SHA will break the repo for other developers.

### Standalone Components in Angular v20+

Angular v20 makes standalone components the default — `standalone: true` is **not** required in component decorators. All five submodule components in this project are standalone. If you re-clone or pull clean submodules and need to re-apply standalone and style configurations, re-run [`scripts/02_getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/02_getting_started.sh).

For tips on recovering a dirty or mismatched submodule reference, see [`doc/Tips_and_Tricks.md`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/doc/Tips_and_Tricks.md).

---

## 📦 Component Submodules Overview

The layout of the portal is composed of five standalone component submodules:

| Component Path | Selector | Repository Link | Description / Purpose |
| --- | --- | --- | --- |
| [`src/app/web-header`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-header) | `<app-header>` | [web-header Repo](https://github.com/DTIG-US/web-header) | Navigation header, company branding, and primary menu links. |
| [`src/app/web-carousel`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-carousel) | `<app-carousel>` | [web-carousel Repo](https://github.com/DTIG-US/web-carousel) | Hero banner carousel and news feed panel using `ngx-slick-carousel`. |
| [`src/app/web-partner`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-partner) | `<app-partners>` | [web-partner Repo](https://github.com/DTIG-US/web-partner) | Partner logo showcase and affiliate link slider. |
| [`src/app/web-offering`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-offering) | `<app-offering>` | [web-offering Repo](https://github.com/DTIG-US/web-offering) | Product and service feature matrix grid with alternating layout. |
| [`src/app/web-footer`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/src/app/web-footer) | `<app-footer>` | [web-footer Repo](https://github.com/DTIG-US/web-footer) | Page footer, copyright, privacy policy, and social links. |

---

## 🛠️ Automation & Helper Scripts

Helper bash scripts are located in the [`scripts/`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/) folder to simplify development:

| Script | Purpose |
| --- | --- |
| [`01_add_submodules.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/01_add_submodules.sh) | Registers and clones all five UI submodules into `src/app/` via `git submodule add`. |
| [`02_getting_started.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/02_getting_started.sh) | Full migration setup: patches component files to standalone, copies CSS, and updates `angular.json`. |
| [`03_commiting_with_submodule_handling.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/03_commiting_with_submodule_handling.sh) | Safely commits and pushes submodule changes **before** updating the parent repo pointer. Prevents broken SHA references. Supports `-m`, `-s`, `-n` (dry-run) flags. |
| [`04_updating_stale_submodules.sh`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/scripts/04_updating_stale_submodules.sh) | Runs `git submodule update --init --recursive` to sync all submodules to their pinned commits. |

---

## 📄 Documentation & Migration Notes

Additional documentation is available in the [`doc/`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/doc/) folder:

| Document | Description |
| --- | --- |
| [`Migration_Documentation.md`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/doc/Migration_Documentation.md) | Step-by-step notes on converting template components to standalone, registering `SlickCarouselModule`, patching `angular.json`, and syncing global CSS styles. |
| [`README_AligningComponents.md`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/doc/README_AligningComponents.md) | Walkthrough of the Offerings & Partners component alignment work — alternating backgrounds, glassmorphism, layout delineation, and accessibility updates. |
| [`Tips_and_Tricks.md`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/doc/Tips_and_Tricks.md) | Quick reference for common submodule operations: syncing, recovering dirty submodule references, and cleaning uncommitted changes. |

Other key project files:

- [AGENTS.md](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/AGENTS.md) — Angular and TypeScript development guidelines for AI and human contributors.
- [AUTHORS.md](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/AUTHORS.md) — Project contributors.
- [SECURITY.md](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/SECURITY.md) — Security policy and vulnerability reporting.

---

## 💻 Development & Deployment Commands

Standard Angular CLI commands configured in [`package.json`](file:///home/b0nz1cu5/Development/IH/ih-hand-sanitation-www/package.json):

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4200)
npm start

# Build for production
npm run build

# Run unit tests (Karma + Jasmine)
npm test

# Watch mode build (development)
npm run watch

# Serve using Static Web Apps CLI (for Azure SWA testing)
npx swa start
```
