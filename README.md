# TalentLayer — Job Board

![TalentLayer Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-orange) ![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

---
<table>
  <tr>
    <td>
      <img src="https://github.com/MAHIDHAR1232/job-board-task/blob/67fd3f20a48928e38f9f6f2f75ac0fc8d9477205/image_1.jpg"/>
    </td>
    <td>
      <img src="https://github.com/MAHIDHAR1232/job-board-task/blob/67fd3f20a48928e38f9f6f2f75ac0fc8d9477205/image_2.jpg"/>
    </td>
  </tr>
</table>

## 🚀 Live Demo

**Production:** [https://job-board-task-seven.vercel.app/](https://job-board-task-seven.vercel.app/)

---

## ✨ Features

### 🔍 Job Search & Discovery
- **Full-text search** across job titles, companies, and skill tags — results update as you type
- **Location filter** — filter by city or work mode (Remote, New York, San Francisco, etc.)
- **Category pills** — browse by department: Engineering, Design, Product, Marketing, Data, Finance, Operations
- **Featured listings** — highlighted roles from premium employers with a distinct visual treatment

### 🎛️ Advanced Filtering Sidebar
- **Job Type** — Full-Time, Part-Time, Contract, Internship
- **Experience Level** — Entry, Mid, Senior, Lead/Manager
- **Work Mode** — Remote, Hybrid, On-Site
- **Salary Range Slider** — interactive slider from $30k to $300k+, filters results in real time
- **Clear All** — one-click reset of every active filter

### 📋 Job Listings
- **List & Grid view toggle** — switch between single-column list or 2-column grid layout
- **Sort options** — Most Recent, Salary High→Low, Salary Low→High, Featured First
- **Paginated results** — 8 jobs per page with smooth pagination controls
- **Job cards** display: company logo, job title, location, type badge, work mode, salary, tech tags, and posted date
- **Apply button** on each card for quick one-click applications
- **Animated card entries** — staggered fade-in animations on load and filter change

### 📄 Job Detail Modal
- Clicking any job card opens a **full detail modal** with:
  - Company logo, title, company name, and location
  - Metadata badges: job type, work mode, salary, posted date, category, experience level
  - **About the Role** — full job description
  - **Requirements** — bulleted list of qualifications
  - **What We Offer** — perks and benefits
  - **Apply Now** CTA button
  - **Save Job** button (persists to localStorage)

### 💾 Save Jobs
- **Save/unsave** any job via the heart icon on cards or the Save button in the detail modal
- Saved jobs persist across sessions using **localStorage**
- **Saved Jobs view** accessible from the nav — shows only your bookmarked roles
- Visual feedback (filled heart icon) on saved jobs

### 📝 Post a Job
- Employers can post new listings via a **full-featured form modal**, including:
  - Job title, company name, location, job type
  - Salary range, category, and work mode
  - Job description and requirements (free text)
  - Contact email
- Submitted jobs are **immediately added** to the listing at the top

### 🔔 Toast Notifications
- Non-intrusive **toast messages** confirm user actions:
  - Job saved / removed
  - Application submitted
  - Job posted successfully
  - Validation warnings

### ⌨️ Keyboard Accessibility
- Press **Escape** to close any open modal
- All interactive elements are keyboard-focusable
- Semantic HTML structure for screen readers

### 📱 Fully Responsive
- Mobile-first responsive layout
- Sidebar collapses on mobile — filters still accessible
- Search bar and category pills adapt to small screens
- Touch-friendly tap targets throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES2022) |
| Fonts | Syne (headings) + Instrument Sans (body) via Google Fonts |
| Deployment | Vercel (static hosting) |
| CI/CD | GitHub Actions |
| Storage | Browser localStorage (client-side persistence) |

**No build step. No framework. No dependencies.** The entire app ships as a single `index.html` file — instant load, zero overhead.

---

## 📁 Project Structure

```
talentlayer-job-board/
├── index.html              # Complete app (HTML + CSS + JS)
├── vercel.json             # Vercel deployment config + security headers
├── .lighthouserc.json      # Lighthouse CI performance thresholds
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions CI/CD pipeline
```

---

## 🚀 Getting Started

### Local Development

No build step required — just open the file:

```bash
git clone https://github.com/YOUR_USERNAME/talentlayer-job-board.git
cd talentlayer-job-board

# Option 1: Direct browser open
open index.html

# Option 2: Local server (recommended)
npx serve .
# → http://localhost:3000

# Option 3: Python
python3 -m http.server 8080
# → http://localhost:8080
```

### Deploy to Vercel

**Option A — Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Option B — Vercel Dashboard:**
1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** (no configuration needed — Vercel auto-detects static HTML)

**Option C — GitHub Actions (automatic):**
See CI/CD setup below. Every push to `main` deploys automatically.

---

## ⚙️ CI/CD Pipeline

The pipeline lives in `.github/workflows/deploy.yml` and has three jobs:

### 1. `validate` (runs on every push and PR)
- Installs `html-validate` and checks HTML syntax
- Reports file sizes
- Verifies required files exist (`index.html`, `vercel.json`, `README.md`)

### 2. `deploy-preview` (runs on Pull Requests)
- Builds and deploys a **preview URL** to Vercel
- Posts a comment on the PR with the preview link and a status table
- Preview auto-expires when the PR is closed

### 3. `deploy-production` (runs on pushes to `main`)
- Deploys to Vercel **production**
- Posts the live URL as a commit comment
- Only runs after `validate` passes

### Required GitHub Secrets

| Secret | Where to get it |
|--------|----------------|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | `vercel env pull` or project settings |
| `VERCEL_PROJECT_ID` | `vercel env pull` or project settings |

To add secrets: **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

---

## 🔧 Customization

### Adding Jobs
Edit the `jobsData` array in `index.html`:

```javascript
{
  id: 13,
  featured: false,
  title: "Your Job Title",
  company: "Company Name",
  logo: "CN",                    // 2-letter abbreviation
  logoColor: "#333",             // logo text color
  logoBg: "#f0f0f0",            // logo background color
  location: "Remote",
  type: "Full-Time",             // Full-Time | Part-Time | Contract | Internship
  workMode: "Remote",            // Remote | Hybrid | On-Site
  category: "Engineering",       // matches category pills
  level: "Senior",               // Entry | Mid | Senior | Lead
  salary: 150000,                // numeric, used for sorting
  salaryDisplay: "$130k – $150k",
  tags: ["React", "TypeScript"],
  posted: "2 days ago",
  description: "Role description...",
  requirements: ["Requirement 1", "Requirement 2"],
  perks: ["Perk 1", "Perk 2"]
}
```

### Adding Categories
Add a new pill in the HTML and ensure jobs use matching `category` values:

```html
<button class="category-pill" onclick="setCategory('Legal', this)">⚖️ Legal</button>
```

### Changing Colors
Edit the CSS custom properties in `:root`:

```css
:root {
  --accent2: #e8480c;   /* primary action color */
  --ink: #0e0e0e;       /* main text */
  --paper: #faf9f6;     /* page background */
}
```

---

## 📊 Performance

Lighthouse scores (baseline):

| Metric | Score |
|--------|-------|
| Performance | 98+ |
| Accessibility | 92+ |
| Best Practices | 95+ |
| SEO | 90+ |

Single HTML file → ~50kb uncompressed, ~18kb gzipped. No JavaScript frameworks, no build pipeline.

---

## 📄 License

MIT — free to use, modify, and deploy.
