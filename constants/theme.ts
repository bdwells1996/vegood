/**
 * Theme configuration for the app.
 * Colors are defined in ./colors.ts as the single source of truth.
 */

import { Platform } from 'react-native';
import { lightTheme, darkTheme } from './colors';

export const Colors = {
  light: {
    text: lightTheme.text,
    background: lightTheme.background,
    tint: lightTheme.primary,
    icon: lightTheme.textSecondary,
    tabIconDefault: lightTheme.textSecondary,
    tabIconSelected: lightTheme.primary,
  },
  dark: {
    text: darkTheme.text,
    background: darkTheme.background,
    tint: darkTheme.primary,
    icon: darkTheme.textSecondary,
    tabIconDefault: darkTheme.textSecondary,
    tabIconSelected: darkTheme.primary,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
