const plugin = require('tailwindcss/plugin')
const px2rem = (px) => px / 16 + 'rem'
const font = (fontSize, lineHeight) => [px2rem(fontSize), lineHeight / fontSize]

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        /**
         * Naming convention:
         * fontSize/lineHeight: font(fontSize, lineHeight)
         */
        '42/50': font(42, 50),
        '40/48': font(40, 48),
        '30/36': font(30, 36),
        '20/24': font(20, 24),
        '16/19': font(16, 19),
        '14/17': font(14, 17),
        '14/14': font(14, 14),
      },
    },
  },
  plugins: [require('daisyui')],
}
