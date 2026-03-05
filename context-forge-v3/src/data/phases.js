import { C } from "../styles/tokens";

export const phases = [
  {
    num: 1, name: "App Skeleton (Tourneze)", status: "done",
    items: ["Bottom tab navigation scaffold", "Steller-style discovery feed concept", "Partiful sharing model defined", "Initial React Native + Expo setup"],
    color: C.green,
  },
  {
    num: 2, name: "Auth & Onboarding", status: "done",
    items: ["Welcome screen with onboarding slides", "Email/password sign in + sign up", "Clerk OAuth integration (Google + Apple)", "AsyncStorage-persisted user state", "Protected routes based on auth"],
    color: C.green,
  },
  {
    num: 3, name: "TravlTeam Pivot + AI", status: "done",
    items: ["Pivot from Tourneze (dining) to TravlTeam (sports travel)", "Tournament search + venue discovery", "AI-powered suggestions with GPT-4o", "Sport-specific filter system designed", "Dual API approach: Google Places + Foursquare"],
    color: C.green,
  },
  {
    num: 4, name: "Trip Builder + Hub", status: "done",
    items: ["TripBuilder: name, destination, dates, sport, team size", "TripDetail screen with day-by-day itinerary", "Horizontal day tabs for grouped view", "Quick stats: lodging, food, member counts", "FAB for adding venues to trip"],
    color: C.green,
  },
  {
    num: 5, name: "Social Features (RSVP + Invites)", status: "done",
    items: ["Partiful-style invite card with RSVP buttons", "Going / Maybe / Can't status per member", "Swipeable itinerary items (swipe-to-delete)", "EditItemSheet: date, time, meal tag, notes", "Profile setup: role selection, sports, team info", "ConfirmModal for destructive actions"],
    color: C.green,
  },
  {
    num: 6, name: "UX Polish + Maps", status: "done",
    items: ["VenueMap with custom markers (blue/purple/gold)", "Map + list view toggle with filter chips", "Distance calculation from tournament venue", "Weather data per trip dates", "Haptic feedback on all interactions", "Pull-to-refresh + skeleton loading"],
    color: C.green,
  },
  {
    num: 10, name: "Supabase Cloud Sync", status: "done",
    items: ["Offline-first SQLite architecture", "Sync queue with retry + exponential backoff", "Version-based conflict resolution", "Network monitor (auto-sync on reconnect)", "Entity sync: trips, items, members", "SyncStatusBadge component (synced/syncing/offline)"],
    color: C.green,
  },
  {
    num: 11, name: "Web Sharing + Deep Links", status: "partial",
    items: ["Native context menus (Zeego) for long-press", "Deep link config: travlteam:// scheme", "Native share sheet integration", "Share code generation + clipboard copy", "OG meta tags (planned)", "Static web invite page (planned)"],
    color: C.amber,
  },
  {
    num: 12, name: "Deep Assessment + Cleanup", status: "done",
    items: ["Full codebase audit across 16 screens", "Removed unused AIHomeScreen from nav", "Identified redundant TripsListScreen", "Design system verified: Paper/Forest/Trophy", "All auth flows validated end-to-end"],
    color: C.green,
  },
];

export const postMvpItems = [
  { name: "v2 Architecture Rewrite", desc: "Expo Router v3, NativeWind v5, Legend List, feature-based /src/features/ structure", color: C.blue },
  { name: "Interactive web sharing", desc: "travlteam.app/trip/abc123 renders without app installed — the Partiful moment", color: C.pink },
  { name: "Clerk invite flow", desc: "Deep link invites via Clerk invitations API for seamless onboarding", color: C.cyan },
  { name: "Universal links (AASA)", desc: "iOS Associated Domains + Android asset links for native deep links", color: C.purple },
  { name: "Directions integration", desc: "One-tap navigation from hotel to tournament venue", color: C.orange },
  { name: "Push notifications", desc: "'Marcus added Fairfield Inn to Dallas Cup trip'", color: C.green },
  { name: "Ratings & reviews", desc: "In-plan venue ratings (private to trip, not public)", color: C.amber },
  { name: "Gemini Flash 2.5 search", desc: "Natural language venue search ~$0.04/query", color: C.pink },
];

export const statusColors = { done: C.green, active: C.amber, partial: C.cyan, ready: C.cyan, queued: C.textDim };
export const statusLabels = { done: "✓ BUILT", active: "● ACTIVE", partial: "◐ PARTIAL", ready: "◐ READY", queued: "○ QUEUED" };
