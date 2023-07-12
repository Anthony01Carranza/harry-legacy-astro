/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'nav-bg': "url('/assets/nav-bar-bg-left.webp)",
			  }
			

		},
	},
	plugins: [],
}
