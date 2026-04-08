<<<<<<< HEAD
# Marry Me - Matrimony App

A mobile-first React application for the **NexaVision Frontend Developer Intern Assignment**.

## 🔗 Live Demo
> Deploy on Netlify/Vercel (see instructions below)

## 📱 Screens

| Route | Screen |
|-------|--------|
| `/splash` | Splash / Landing Screen |
| `/profile` | Build Your Profile (Form) |
| `/welcome` | Welcome Screen |
| `/preferences` | Edit Partner Preferences |

## 🛠 Tech Stack

- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **Vite** - Build tool & dev server
- **CSS3** - Custom styling (no UI library)
- **Google Fonts** - Cormorant Garamond + Jost

## 🚀 Setup Instructions

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/marry-me-app.git
cd marry-me-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── Logo.jsx          # Reusable logo with SVG rings
│   ├── MultiSelect.jsx   # Custom multi-select dropdown with chips
│   ├── SelectField.jsx   # Styled native select dropdown
│   └── RangeSlider.jsx   # Custom range slider
├── pages/
│   ├── SplashScreen.jsx  # Route: /splash
│   ├── ProfileForm.jsx   # Route: /profile
│   ├── Welcome.jsx       # Route: /welcome
│   └── Preferences.jsx   # Route: /preferences
├── styles/
│   ├── global.css        # Global styles, CSS variables, shared components
│   ├── splash.css        # Splash screen styles
│   └── welcome.css       # Welcome screen styles
├── App.jsx               # Router setup
└── main.jsx              # Entry point
```

## ✅ Features Implemented

- ✅ All 5 screens from Figma reference
- ✅ Client-side routing with React Router v6
- ✅ Form validation with user-friendly error messages
- ✅ Custom multi-select dropdown with checkbox + chips UI
- ✅ Range sliders for Age & Height preferences
- ✅ Mobile-first responsive design (max-width: 390px)
- ✅ Clean modular component structure
- ✅ Reusable components (Logo, MultiSelect, SelectField, RangeSlider)
- ✅ Gold/cream color theme matching Figma design
- ✅ Auto-redirect from splash to profile after 2.5s

## 🎨 Design Decisions

- **Color Palette**: Gold (`#b8933a`) as primary, white background, subtle warm grays
- **Typography**: Cormorant Garamond (serif, elegant) + Jost (sans-serif, modern)
- **Mobile Container**: Fixed 390px width on desktop, full-width on mobile

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag & drop the `dist/` folder to Netlify
```

Or connect your GitHub repo to Netlify/Vercel for automatic deployments.

> **Note**: Add `_redirects` file in `public/` folder for Netlify SPA routing:
> ```
> /*    /index.html   200
> ```
=======
# marry-me-app
>>>>>>> ae76f6cc08655a091cb0840d7c2edadc38a99086
