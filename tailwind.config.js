const px2rem = (px) => px / 16 + 'rem'

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        2: [px2rem(8), 1],
      },
    },
  },
  plugins: [],
}
