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
    nextui({})
  ]
}

