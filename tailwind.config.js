// tailwind.config.js — VeGood Design System (NativeWind)
const { hairlineWidth } = require("nativewind/theme");
const { colors, lightTheme, darkTheme } = require("./constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				// ── Primary (Green) ──────────────────────────
				primary: colors.primary,

				// ── Neutral (Slate) ─────────────────────────
				neutral: colors.neutral,

				// ── Semantic ────────────────────────────────
				success: colors.semantic.success,
				warning: colors.semantic.warning,
				error: colors.semantic.error,
				info: colors.semantic.info,

				// ── Surface & Text (Light Mode) ──────────────
				background: {
					DEFAULT: lightTheme.background,
					secondary: lightTheme.backgroundSecondary,
					dark: darkTheme.background,
					"dark-secondary": darkTheme.backgroundSecondary,
				},

				// ── Text ────────────────────────────────────
				content: {
					primary: lightTheme.text,
					secondary: lightTheme.textSecondary,
					tertiary: lightTheme.textTertiary,
					inverse: "#FFFFFF",
					"dark-primary": darkTheme.text,
					"dark-secondary": darkTheme.textSecondary,
					"dark-tertiary": darkTheme.textTertiary,
				},

				// ── Border ──────────────────────────────────
				border: {
					DEFAULT: colors.neutral[200],
					strong: colors.neutral[300],
					dark: darkTheme.border,
					"dark-strong": colors.neutral[600],
				},
			},

			fontFamily: {
				sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
				mono: ["JetBrains Mono", "Fira Code", "monospace"],
			},

			fontSize: {
				// Mobile-optimized type scale
				overline: ["11px", { lineHeight: "16px", letterSpacing: "0.08em" }],
				caption: ["12px", { lineHeight: "16px", letterSpacing: "0.02em" }],
				body: ["14px", { lineHeight: "20px" }],
				"body-lg": ["16px", { lineHeight: "24px" }],
				h3: ["18px", { lineHeight: "24px" }],
				h2: ["20px", { lineHeight: "28px" }],
				h1: ["24px", { lineHeight: "32px" }],
				display: ["30px", { lineHeight: "36px" }],
			},

			spacing: {
				xs: "4px",
				sm: "8px",
				md: "12px",
				base: "16px",
				lg: "20px",
				xl: "24px",
				"2xl": "32px",
				"3xl": "40px",
				"4xl": "48px",
				"5xl": "64px",
			},

			borderRadius: {
				sm: "6px",
				md: "8px",
				lg: "12px",
				xl: "16px",
				"2xl": "20px",
				full: 9999,
			},

			borderWidth: {
				hairline: hairlineWidth(),
			},

			boxShadow: {
				card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
				"card-md": "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)",
				"card-lg": "0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)",
				button: "0 1px 2px rgba(0,0,0,0.05)",
			},
		},
	},
	plugins: [],
};
