/** @type {import('tailwindcss').Config} */
import {nextui} from '@nextui-org/react'
module.exports = {
  content: [
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}',
    // './src/ui/components/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
            radius: {
              small: "2px", // rounded-small
              medium: "4px", // rounded-medium
              large: "8px", // rounded-large
            }
          },
          colors: {
            primary: {
              DEFAULT: '#26B7CD',
            },
            // ... rest of the colors
          },
      }
      }
    })
  ]
}

