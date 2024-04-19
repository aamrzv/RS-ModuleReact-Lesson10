/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			keyframes: {
				// Определение анимации мерцания
				'glowing-slow': {
					'0%': { backgroundColor: '#FFA860' },
					'50%': { backgroundColor: '#FFE2A8' },
					'100%': { backgroundColor: '#FFA860' },
				},
			},
			// Применение анимаций к элементам
			animation: {
				'glowing-slow': 'glowing-slow 1300ms infinite',
			},
		},
	},
	plugins: [],
};
