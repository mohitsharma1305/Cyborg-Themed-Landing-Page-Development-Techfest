# Techfest IIT Bombay — Official Website

> Asia's Largest Science & Technology Festival  
> Under the patronage of UNESCO & UNICEF

---

## 🚀 Live Site

Deployed via Vercel → **[your-project.vercel.app](https://your-project.vercel.app)**

---

## 📁 Project Structure

```
techfest/
├── index.html          ← Main HTML (all sections)
├── vercel.json         ← Vercel deployment config
├── .gitignore
├── README.md
├── css/
│   ├── base.css        ← Variables, reset, utilities, buttons, cards
│   ├── animations.css  ← All @keyframes
│   ├── nav.css         ← Navbar — desktop + mobile hamburger
│   └── sections.css    ← All section styles + responsive breakpoints
└── js/
    ├── nav.js          ← Hamburger, scroll class, active link highlight
    ├── animations.js   ← Scroll-triggered fade-in with stagger
    └── register.js     ← Form validation (live + on submit)
```

---

## ⚙️ Deploy to Vercel (Step-by-Step)

### Step 1 — Push to GitHub

```bash
# 1. Create a new repo on github.com (name it: techfest-website)
#    Then run these commands inside this folder:

git init
git add .
git commit -m "feat: initial Techfest website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/techfest-website.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

**Option A — Vercel Dashboard (easiest):**
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Click **Import Git Repository** → select `techfest-website`
3. Framework Preset → select **Other** (static site)
4. Root Directory → leave as `/`
5. Click **Deploy** ✅

**Option B — Vercel CLI:**
```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# From inside the techfest folder:
vercel

# Follow the prompts:
# ? Set up and deploy? → Y
# ? Which scope? → your account
# ? Link to existing project? → N
# ? Project name → techfest-website
# ? In which directory is your code? → ./
# Deployed! ✅
```

### Step 3 — Custom Domain (optional)

In Vercel Dashboard → Project → **Settings → Domains**  
Add your domain e.g. `techfest2026.com` and follow DNS instructions.

---

## 🔄 Update & Redeploy

Every `git push` to `main` auto-redeploys on Vercel.

```bash
# Make your changes, then:
git add .
git commit -m "update: your change description"
git push
# Vercel auto-deploys in ~30 seconds ✅
```

---

## 📋 Sections

| Section | ID | Description |
|---|---|---|
| Home / Hero | `#home` | Animated hero, stats, CTA |
| About | `#about` | Verified Techfest facts & figures |
| Competitions | `#competitions` | 9 real flagship competitions |
| Workshops | `#workshops` | 6 hands-on workshops with registration |
| CA Program | `#ca` | College Ambassador program & perks |
| Register | `#register` | Full registration form with validation |
| Contact | `#contact` | Address, email, socials, quick form |

---

## 🔗 Official Links

- Website: [techfest.org](https://techfest.org)
- CA Program: [ca.techfest.org](https://ca.techfest.org)
- Instagram: [@techfest_iitbombay](https://www.instagram.com/techfest_iitbombay/)
- Twitter/X: [@Techfest_IITB](https://x.com/Techfest_IITB)
- LinkedIn: [/company/techfest](https://www.linkedin.com/company/techfest)
- YouTube: [techfestiitbombay](https://www.youtube.com/user/techfestiitbombay)

---

© Techfest, IIT Bombay · Est. 1998
