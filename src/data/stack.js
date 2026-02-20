import { C } from "../styles/tokens";

export const stackLayers = [
  {
    label: "USER INTERFACE", color: C.blue,
    items: [
      { name: "Expo SDK 53", desc: "React Native 0.79 + New Architecture", icon: "📱" },
      { name: "React Navigation", desc: "Native stacks + bottom tabs + drawer", icon: "🧭" },
      { name: "Nativewind v4", desc: "Tailwind CSS v3 for React Native", icon: "🎨" },
      { name: "react-native-maps", desc: "Google Maps with custom markers", icon: "🗺️" },
      { name: "react-native-reanimated", desc: "60fps gesture-driven animations", icon: "✨" },
    ],
  },
  {
    label: "STATE & DATA", color: C.purple,
    items: [
      { name: "Zustand 5", desc: "Client state + AsyncStorage persistence", icon: "⚡" },
      { name: "expo-sqlite", desc: "Offline-first local database (5 tables)", icon: "💾" },
      { name: "MMKV", desc: "Fast key-value storage for tokens", icon: "🔑" },
    ],
  },
  {
    label: "AUTH & SECURITY", color: C.green,
    items: [
      { name: "Clerk", desc: "OAuth (Google + Apple) + email/password", icon: "🔐" },
      { name: "expo-secure-store", desc: "Token cache + sensitive data", icon: "🛡️" },
      { name: "Supabase RLS", desc: "Row-level security on all tables", icon: "🔒" },
    ],
  },
  {
    label: "VENUE SEARCH (HYBRID)", color: C.cyan,
    items: [
      { name: "Google Places API", desc: "Primary for lodging (hotels, chains)", icon: "📍" },
      { name: "Foursquare API", desc: "Primary for food (restaurants, categories)", icon: "🔍" },
      { name: "Supabase Venue Cache", desc: "TTL-based cache reduces API calls", icon: "🔗" },
      { name: "SQLite Fallback", desc: "40+ mock venues when offline", icon: "📦" },
    ],
  },
  {
    label: "BACKEND API", color: C.amber,
    items: [
      { name: "Hono 4.6", desc: "Lightweight REST API framework", icon: "🌐" },
      { name: "Bun runtime", desc: "Fast JS runtime (replaces Node.js)", icon: "⚡" },
      { name: "Zod 4", desc: "Schema validation on all endpoints", icon: "✅" },
      { name: "Supabase PostgreSQL", desc: "Cloud database via REST client", icon: "🗄️" },
    ],
  },
  {
    label: "SYNC & OFFLINE", color: C.orange,
    items: [
      { name: "Offline-first architecture", desc: "SQLite local → Supabase cloud", icon: "📡" },
      { name: "Sync queue", desc: "Queue changes with exponential retry", icon: "🔄" },
      { name: "Conflict resolver", desc: "Last-write-wins (version + timestamp)", icon: "⚖️" },
      { name: "Network monitor", desc: "Auto-sync when connection restored", icon: "📶" },
    ],
  },
  {
    label: "AI & APIs", color: C.pink,
    items: [
      { name: "OpenAI GPT-4o", desc: "Chat, tournament search, suggestions", icon: "🧠" },
      { name: "OpenAI gpt-image-1", desc: "Trip cover image generation", icon: "🖼️" },
      { name: "OpenAI Whisper", desc: "Audio transcription for voice input", icon: "🎙️" },
      { name: "Grok API", desc: "Alternative AI chat provider", icon: "🤖" },
      { name: "Weather API", desc: "Forecast for trip dates", icon: "🌤️" },
    ],
  },
  {
    label: "BUILD & DEPLOY", color: C.green,
    items: [
      { name: "EAS Build", desc: "CI/CD to TestFlight + Play Store", icon: "🚀" },
      { name: "GitHub", desc: "Source control (Huddler-Venture-Studio org)", icon: "🐙" },
      { name: "vibecodeapp.com", desc: "AI-assisted development platform", icon: "🎛️" },
    ],
  },
];
