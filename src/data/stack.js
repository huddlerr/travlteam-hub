import { C } from "../styles/tokens";

export const stackLayers = [
  {
    label: "USER INTERFACE", color: C.blue,
    items: [
      { name: "Expo SDK 52", desc: "React Native framework", icon: "📱" },
      { name: "Expo Router", desc: "File-based navigation", icon: "🧭" },
      { name: "NativeWind v4", desc: "Tailwind for RN", icon: "🎨" },
      { name: "react-native-maps", desc: "Google Maps provider", icon: "🗺️" },
    ],
  },
  {
    label: "STATE & DATA", color: C.purple,
    items: [
      { name: "Zustand", desc: "Client state", icon: "⚡" },
      { name: "TanStack Query", desc: "Server state + cache", icon: "🔄" },
    ],
  },
  {
    label: "AUTH & SECURITY", color: C.green,
    items: [
      { name: "Clerk", desc: "Auth + JWT tokens", icon: "🔐" },
      { name: "Supabase RLS", desc: "Row-level security", icon: "🛡️" },
    ],
  },
  {
    label: "VENUE SEARCH (UNIFIED)", color: C.cyan,
    items: [
      { name: "Google Places", desc: "Chains + photos", icon: "📍" },
      { name: "Foursquare", desc: "Local gems + 700 categories", icon: "🔍" },
      { name: "Merge + Dedup", desc: "100m proximity + 70% name match", icon: "🔗" },
    ],
  },
  {
    label: "DATABASE & BACKEND", color: C.amber,
    items: [
      { name: "Supabase", desc: "PostgreSQL + Realtime", icon: "🗄️" },
      { name: "EAS Build", desc: "CI/CD → TestFlight", icon: "🚀" },
      { name: "GitHub", desc: "Source control + codebase", icon: "🐙" },
    ],
  },
  {
    label: "BUILD PLATFORM", color: C.orange,
    items: [
      { name: "vibecodeapp.com", desc: "AI-assisted app builder", icon: "🎛️" },
      { name: "Full codebase export", desc: "GitHub repo → EAS Build", icon: "📦" },
    ],
  },
  {
    label: "PHASE 2 — AI LAYER", color: C.pink,
    items: [
      { name: "Gemini Flash 2.5", desc: "Natural language search", icon: "🧠" },
      { name: "~$0.04/search", desc: "AI + Places API combined", icon: "💰" },
    ],
  },
];
