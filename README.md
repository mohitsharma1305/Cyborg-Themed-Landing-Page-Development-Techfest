# Techfest IIT Bombay — Official Website

> Asia's Largest Science & Technology Festival  
> Under the patronage of UNESCO & UNICEF

---

## 🚀 Live Site

Deployed via Netlify → **[cyborgthemed-landing-page-development.netlify.app/](https://cyborgthemed-landing-page-development.netlify.app)**

---

## 📁 Project Structure

```text
techfest/
├── index.html          ← Main HTML (all sections)
├── netlify.toml        ← Netlify deployment config (headers)
├── vercel.json         ← Vercel deployment config (legacy)
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

## ⚙️ Deploy to Netlify (Step-by-Step)

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

### Step 2 — Deploy on Netlify

**Option A — Netlify Dashboard (easiest):**
1. Go to [netlify.com](https://netlify.com) → **Add new site**
2. Click **Import an existing project** → select **GitHub** and authorize.
3. Choose your `techfest-website` repository.
4. Leave build settings empty (since it's a static site).
5. Click **Deploy site** ✅

**Option B — Netlify CLI:**
```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# From inside the techfest folder:
netlify deploy --prod

# Follow the prompts to authorize and deploy your site.
```

### Step 3 — Custom Domain (optional)

In Netlify Dashboard → Site configuration → **Domain management**  
Add your domain e.g. `techfest2026.com` and follow DNS instructions.

---

## 🔄 Update & Redeploy

Every `git push` to `main` auto-redeploys on Netlify.

```bash
# Make your changes, then:
git add .
git commit -m "update: your change description"
git push
# Netlify auto-deploys in seconds ✅
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
