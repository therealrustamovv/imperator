/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  content: ["pages/about.html"],
  content: ["pages/basket.html"],
  content: ["pages/category.html"],
  content: ["pages/login.html"],
  content: ["pages/partner.html"],
  content: ["pages/payment.html"],
  content: ["pages/product-1.html"],
  content: ["pages/product-2.html"],
  content: ["pages/product-3.html"],
  content: ["pages/product-4.html"],
  content: ["pages/profil.html"],
  content: ["pages/registration-product-1.html"],
  content: ["pages/registration-product-2.html"],
  content: ["pages/registration.html"],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}