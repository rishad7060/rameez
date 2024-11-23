import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		animation: {
			'send': 'sendPulse 1s infinite',
			'blob': 'blob 7s infinite',
			'float': 'float 6s infinite',
		  },
		  keyframes: {
			sendPulse: {
			  '0%, 100%': { transform: 'translateX(0)' },
			  '50%': { transform: 'translateX(5px)' },
			},
			blob: {
				'0%': { transform: 'translate(0px, 0px) scale(1)' },
				'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
				'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
				'100%': { transform: 'translate(0px, 0px) scale(1)' },
			  },
			  float: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-10px)' },
			  }
		  },
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
		
	}
  },
  plugins: [
	tailwindcssAnimate,
	plugin(function({ addUtilities }) {
	  const newUtilities = {
		'.animate-send': {
		  animation: 'sendPulse 1s infinite',
		},
		'.animation-delay-1000': {
			animationDelay: '1s'
		  },
		  '.animation-delay-2000': {
			animationDelay: '2s'
		  }
	  }
	  addUtilities(newUtilities)
	})
  ],

} satisfies Config;
