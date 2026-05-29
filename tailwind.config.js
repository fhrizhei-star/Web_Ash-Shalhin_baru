/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        academy: {
          bg: '#F8FAF9', // Mist/ice white
          obsidian: '#051C13', // Deep high-contrast obsidian green
          emerald: '#059669', // Academy primary emerald
          mint: '#10B981', // Academy secondary bright mint
          'mint-dark': '#064E3B', // Academy deep forest green
          'glass-border': 'rgba(255, 255, 255, 0.7)',
          'glass-bg': 'rgba(255, 255, 255, 0.45)',
          'glass-dark-bg': 'rgba(5, 28, 19, 0.75)',
        }
      },
      fontFamily: {
        satoshi: ['Satoshi', 'Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'premium-glow': '0 0 25px -5px rgba(16, 185, 129, 0.15)',
        'premium-glow-strong': '0 0 35px -2px rgba(16, 185, 129, 0.35)',
        'premium-card': '0 10px 30px -10px rgba(5, 32, 22, 0.06)',
      }
    },
  },
  plugins: [],
}
