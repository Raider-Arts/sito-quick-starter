/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './components/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

