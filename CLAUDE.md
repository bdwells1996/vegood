# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

**Running the app:**
- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

**Development:**
- `npm run lint` - Run ESLint on the codebase
- `npm run reset-project` - Reset to a blank app (moves starter code to app-example/)

**Installation:**
- `npm install` - Install dependencies

## Project Architecture

This is a **React Native mobile app** built with Expo and TypeScript, using file-based routing via Expo Router.

### Directory Structure

- **app/** - File-based routing (Expo Router). Each file/folder becomes a route.
  - **(tabs)/** - Tab-based navigation layout with two main tabs: Home and Explore
  - **_layout.tsx** - Root layout with ThemeProvider and Stack navigator setup
  - **modal.tsx** - Modal route example

- **components/** - Reusable React components
  - **ui/** - UI primitives (IconSymbol, Collapsible, etc.)
  - Platform-specific variants supported: `.ios.tsx`, `.web.ts`, `.android.tsx` suffixes on filenames

- **constants/theme.ts** - Global color scheme and theme configuration (light/dark mode colors)

- **hooks/** - Custom React hooks
  - `use-color-scheme` - Detects system color scheme (with platform-specific implementations)
  - `use-theme-color` - Retrieves theme colors based on current color scheme

- **styles/** - Uses **NativeWind** (Tailwind CSS for React Native)
  - `global.css` - Global styles
  - `tailwind.config.js` - Tailwind configuration

### Key Technologies

- **Expo Router** - File-based routing (similar to Next.js)
- **NativeWind** - Tailwind CSS for React Native styling
- **React Navigation** - Tab and stack navigators
- **TypeScript** - For type safety
- **React 19.1.0** - Latest React with new features

### Styling with NativeWind

Styling is done via Tailwind CSS classes directly on components:
```tsx
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-lg font-bold text-gray-800">Hello</Text>
</View>
```

The Babel configuration (babel.config.js) is set up to process NativeWind JSX. Tailwind config scans `app/**` and `components/**` directories.

### Theme and Color Scheme

- The `useColorScheme()` hook returns `'light'` or `'dark'` based on system preferences
- Colors are defined in `constants/theme.ts` with light/dark variants
- The root layout (app/_layout.tsx) applies the theme via React Navigation's ThemeProvider

### Navigation Structure

The app uses a **Stack + Tabs** navigator:
1. Root Stack has two screens:
   - **(tabs)** - The main tab-based navigation (anchored as the default route)
   - **modal** - A modal screen

2. Tab navigation under **(tabs)**:
   - **index** (Home tab)
   - **explore** (Explore tab)

Add new screens by creating `.tsx` files in the appropriate directories. Use `expo-router` Link components for navigation.

### Configuration Files

- **app.json** - Expo app configuration (name, icons, splash screen, plugins)
- **tsconfig.json** - TypeScript with path alias `@/*` pointing to project root
- **package.json** - Dependencies and npm scripts
- **tailwind.config.js** - Tailwind CSS configuration
- **babel.config.js** - Babel config with NativeWind plugin
- **metro.config.js** - Metro bundler config (handles platform-specific requires)

### Experimental Features Enabled

In app.json:
- `typedRoutes` - Full type safety for expo-router navigation
- `reactCompiler` - React Compiler optimization

## Development Patterns

**Creating new screens:** Add `.tsx` files to the `app/` directory or subdirectories. Expo Router will automatically create routes.

**Platform-specific code:** Use file suffixes like `.ios.tsx` or `.web.ts` to provide platform-specific implementations.

**Component reuse:** Keep reusable components in the `components/` directory. Import with the `@/` alias for cleaner paths.

**Theming:** Use the `useColorScheme()` hook and access theme colors from `constants/theme.ts` for consistent styling across the app.

## Notes

- The app uses React 19.1.0 with the latest Expo (v54). New React features like server components are not applicable in React Native.
- NativeWind/Tailwind is configured for React Native, not web DOM (even though web platform is supported via React Native Web).
- The tab layout uses `HapticTab` component for haptic feedback on tab press.
