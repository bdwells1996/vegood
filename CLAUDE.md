# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native mobile app built with Expo 54. It uses TypeScript, NativeWind (Tailwind CSS for React Native), and React 19.1.0. The app is styled with Tailwind CSS classes applied through the `className` prop on React Native components.

## Tech Stack

- **Framework**: Expo 54
- **React**: 19.1.0
- **React Native**: 0.81.5
- **Styling**: NativeWind + Tailwind CSS (className-based styling for React Native)
- **Language**: TypeScript (strict mode)
- **Animations**: react-native-reanimated
- **Safe Area**: react-native-safe-area-context

## Common Commands

### Development
- `npm start` - Start the development server (choose platform at prompt)
- `npm run ios` - Run on iOS simulator/device
- `npm run android` - Run on Android emulator/device
- `npm run web` - Run on web (via Metro bundler)
- `npm run prebuild` - Generate native iOS/Android directories

### Code Quality
- `npm run lint` - Check linting and formatting
- `npm run format` - Auto-fix linting and formatting issues

## Project Structure

- **`App.tsx`** - Root application component, sets up SafeAreaProvider
- **`components/`** - Reusable React Native components (ScreenContent, EditScreenInfo)
- **`assets/`** - App icons, splash screens, favicon
- **`global.css`** - Global CSS file (imported in App.tsx)
- **`tailwind.config.js`** - Tailwind CSS configuration with nativewind preset
- **`babel.config.js`** - Babel config with nativewind preset
- **`metro.config.js`** - Metro bundler config with nativeWind integration

## Styling with NativeWind

This project uses NativeWind for styling, which allows Tailwind CSS classes to work with React Native components:

```tsx
import { View, Text } from 'react-native';

// Use className prop instead of style prop
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-xl font-bold">Title</Text>
</View>
```

Key differences from web Tailwind:
- Use `flex-1` instead of `flex-auto` for responsive layouts
- Utility classes work but some web-specific utilities (like `hover:`, `focus:`) don't apply
- Inline styles are defined as style objects in constants

## Configuration Details

### TypeScript
- Path alias configured: `@/*` maps to `src/*` (though currently not in use)
- Strict mode enabled for type safety

### Prettier
- Print width: 100
- Tab width: 2
- Single quotes
- Tailwind plugin enabled for className sorting

### ESLint
- Uses `eslint-config-expo` (flat config)
- `react/display-name` rule disabled

## Important Notes

- The app currently uses a single root component structure with SafeAreaProvider
- Components use inline style objects alongside className for fine-grained control
- The global CSS file should be imported in App.tsx to enable Tailwind utilities
