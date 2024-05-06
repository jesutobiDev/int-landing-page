/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homepageBackground": "url('/homepage-background.svg')",
        "solutionsBackground": "url('/solutions.svg')",
        "contactpromoBackground": "url('/contactpromo.svg')",
        "industriesBackground": "url('/industries.svg')",
        "Background404": "url('/404.svg')",
      },
      fontFamily: {
        calistoga: ['var(--font-calistoga)']
      },
      animation: {
        'waves': 'waves 2s linear infinite',
      },
      keyframes: {
        'waves': {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '1000px' },
        }
      }, // Add a comma here
    }, // Close extend object
  }, // Close theme object
  plugins: [], // Close plugins array
}; // Close module.exports object
