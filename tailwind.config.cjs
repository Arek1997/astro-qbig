/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.astro'],
	theme: {
		extend: {
			colors: {
				red: 'var(--red)',
			},

			fontFamily: {
				sansSerifSecondary: 'Poppins',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},

		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1440px',
		},
	},
};
