/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#020617',
        python: '#EAB308',
        data: '#10B981',
        ui: '#06B6D4',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { opacity: '0.85', transform: 'translate3d(0,0,0) scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
}
