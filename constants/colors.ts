// colors.ts — VeGood Color Tokens
export const colors = {
  primary: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E", // Main brand
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
    950: "#052E16",
  },
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },
  semantic: {
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
} as const;

// ── Light / Dark Theme Maps ─────────────────
export const lightTheme = {
  background: colors.neutral[50],
  backgroundSecondary: colors.neutral[100],
  text: colors.neutral[900],
  textSecondary: colors.neutral[600],
  textTertiary: colors.neutral[200],
  primary: colors.primary[500],
  primaryForeground: "#FFFFFF",
};

export const darkTheme = {
  background: colors.neutral[900],
  backgroundSecondary: colors.neutral[800],
  text: colors.neutral[50],
  textSecondary: colors.neutral[300],
  textTertiary: colors.neutral[500],
  border: colors.neutral[700],
  primary: colors.primary[500],
  primaryForeground: "#FFFFFF",
};
