/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors:{
        bg_primary:'#6C7A89',
        bg_secondary:'#2D2D44',
        text_primary:'#E0E0E0',
        text_secondary:'#B0B0B5',
        accent:'#3A8DAB',
        link:'#65D5FF',
        success:'#70E000',
        danger:'#FFC107'
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
