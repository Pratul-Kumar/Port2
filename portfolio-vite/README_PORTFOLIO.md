# Pratul Kumar - Neural Glass Bento Portfolio

## 🎨 Design System

### Color Palette
- **Light Mode**: `bg-zinc-50`, `text-zinc-900/500`
- **Dark Mode**: `bg-zinc-950`, `text-white/zinc-400`
- **Accents**:
  - Primary: `indigo-600` / `violet-600`
  - Web: `emerald` / `sky`
  - AI/ML: `violet` / `rose`
  - UI: `pink`
  - Leadership: `amber` / `indigo`

### Glassmorphism Style
All cards use:
```css
bg-white/60 dark:bg-zinc-900/60 
backdrop-blur-xl 
border border-white/20 dark:border-zinc-700/50 
rounded-2xl 
shadow-2xl shadow-indigo-500/10
```

## 🚀 Features Implemented

### ✅ Neural Mesh Background
- **HTML5 Canvas** with 90 nodes (50 on mobile)
- Nodes drift with `driftSpeed: 0.2`
- Dynamic connections when nodes < 120px apart
- Mouse repulsion effect (50px strength)
- Responsive & performant (requestAnimationFrame)
- Theme-aware colors (indigo-600 light / indigo-400 dark)

### ✅ Dark/Light Mode Toggle
- Persistent via `localStorage`
- Toggle button in Nav with Moon/Sun icons
- Smooth transitions (500ms)
- Applied to `<html>` element with `.dark` class
- All components respond to theme

### ✅ Framer Motion Animations
- **Entrance**: Stagger children (0.1s delay)
- **Hover**: Scale 1.05, translate -8px
- **Nav Active Pill**: `layoutId="nav-pill"` with spring physics
- **Scroll Triggers**: `whileInView` with viewport detection
- **Typewriter Effect**: In Hero section with react-simple-typewriter

### ✅ Bento Grid Layouts

#### Hero Section (2x3 Grid)
- Large intro card (2 columns)
- Design + Code card
- Stats snapshot
- Location/Education card

#### About Section (1x3)
- Profile photo/avatar
- Bio description (2 columns)
- Education timeline (full width)

#### Skills Section (4x2 Grid)
- 8 skill cards with progress bars
- Semantic color coding
- Animated on scroll

#### Projects Section (2x2)
- 2 main project cards
- Tech stack badges
- GitHub + Live links
- Hover zoom effect

#### Experience Section (Vertical Stack)
- 3 timeline cards
- Role badges
- Icon indicators

#### Achievements Section (Grid)
- Leadership roles
- Hover spotlight effect
- Color-coded icons

#### Contact Section (1x3)
- Contact form
- Social media links
- Location info

## 📦 Tech Stack

- **React 18** with Vite
- **Tailwind CSS v4** with custom config
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Simple Typewriter** for typing effect
- **HTML5 Canvas** for neural mesh

## 🎯 Resume Data Integration

### Personal Info
- **Name**: Pratul Kumar
- **Degree**: B.Tech CSE-AI/ML
- **Institution**: Technocrats Institute of Technology, RGPV
- **Location**: Bhopal, Madhya Pradesh
- **Contact**: +91 9534177010, pratulkumar21@gmail.com

### Skills Highlighted
- **Languages**: Python, SQL, JavaScript
- **AI/ML**: PyTorch, Scikit-Learn, XGBoost, CatBoost
- **Cloud**: Azure, Docker
- **UI/UX**: Figma, Prototyping
- **Backend**: Flask, REST APIs
- **Tools**: VS Code, GitHub, Jupyter

### Projects Showcased
1. **AI Forest Fire Risk Mapping**
   - Tech: Pandas, Scikit-learn, Cellular Automata
   - Simulation model for fire spread prediction

2. **House Price Prediction**
   - Tech: Flask, XGBoost, CatBoost
   - ML-powered property valuation system

### Experience Displayed
- **Python Intern** @ Cognifyz (Summer 2024)
  - OOP, encryption, sockets, API automation
- **GSSOC Mentor** (2023-Present)
  - Open-source guidance, code reviews
- **Student Council VP / Media Head** (2023-2024)
  - Leadership, event coordination

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (grid-cols-1)
- **Tablet**: 768px - 1024px (grid-cols-2)
- **Desktop**: > 1024px (grid-cols-3/4)

## ♿ Accessibility

- ✅ Semantic HTML5 tags
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states on all buttons/links
- ✅ Color contrast WCAG AA compliant
- ✅ Screen reader friendly

## ⚡ Performance Optimizations

- Lazy loading with `whileInView`
- Canvas rendering throttled at 60 FPS
- requestAnimationFrame for smooth animations
- Debounced scroll/resize handlers
- Optimized re-renders with React.memo (where needed)

## 📸 Sections Overview

1. **Hero** - Introduction with typewriter effect
2. **About** - Bio, photo, education timeline
3. **Skills** - 8 categorized skill cards with progress
4. **Projects** - 2 main projects with tech stacks
5. **Experience** - 3 roles/internships
6. **Achievements** - Leadership positions
7. **Contact** - Form + social links

## 🎨 Custom Utilities

### `.glass-card`
Reusable glassmorphism card style defined in `index.css`:
```css
.glass-card {
  @apply rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 dark:bg-zinc-900/60 dark:border-zinc-700/50;
}
```

## 🔗 Links

- **GitHub**: https://github.com/pratulkumar21
- **LinkedIn**: https://www.linkedin.com/in/pratul-kumar-00891220b/
- **Resume**: https://drive.google.com/file/d/1DV_QzkLzFtG8hw7n7IsqvReEEmEIFZHn/view

---

**Built with ❤️ by Pratul Kumar • 2026**
