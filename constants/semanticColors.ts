import { useColorScheme } from 'react-native';

export const useSemanticColors = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    // ── Text Colors ─────────────────────
    textPrimary: isDark ? '#F8FAFC' : '#0F172A',
    textSecondary: isDark ? '#E2E8F0' : '#475569',
    textTertiary: isDark ? '#CBD5E1' : '#94A3B8',
    textInverse: '#FFFFFF',

    // ── Background Colors ───────────────
    bgPrimary: isDark ? '#0F172A' : '#FFFFFF',
    bgSecondary: isDark ? '#1E293B' : '#F8FAFC',
    bgTertiary: isDark ? '#334155' : '#F1F5F9',

    // ── Logo Text Color (adapts to theme) ──
    logoText: isDark ? '#F0FDF4' : '#14532D', // primary-50 dark, primary-900 light

    // ── Semantic Colors ─────────────────
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  };
};
