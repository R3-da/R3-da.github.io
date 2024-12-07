import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: {
		files: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}',
			'./app/**/*.{js,ts,jsx,tsx}',
		],
		extract,
	},
	theme: {
		screens, // Tailwind's default screens, in `rem`
		fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['Bitter', 'serif'],
				mono: ['Roboto Mono', 'mono'],
			},
			colors: {
				light: '#f3f3f3',
				lighter: '#FFFFFF',
				dark: '#343c4c',
				darker: '#212733',
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				accentgrad: '#0A7679',
				grey: '#ABABAB',
				orangina: '#ffa74c',
				rosalina: '#f86077',
				violina: '#b16dea',
				'vibrant-blue': '#0456f9',
				mineShaft: '#363636',
				seashell: '#F1F1F1',
				wafer: '#D8C9BF',
				silver: '#ABABAB',
				rawSienna: '#CF8035',
				iroko: '#493626',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [fluid, require('tailwindcss-animate')],
};
