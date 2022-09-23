/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				success: '#2EE297',
				'dark-blue': '#0F2830',
				'almost-black': '#272727',
				blue: '#1DC9D4',
				yellow: '#FFCB47',
				red: '#d4291d',
				'custom-gray-500': '#a6a6a6',
				'custom-gray-300': '#e6e6e7',
				'custom-gray-200': '#f1f1f2',
				'custom-gray-100': '#f6f6f7',
				'custom-gray-50': '#fbfbfc',
			},
		},
	},
	plugins: [],
};
