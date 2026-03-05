import { C } from "../styles/tokens";

export const STATUS_CYCLE = ["todo", "next", "active", "done", "blocked", "waiting"];

export const STATUS_MAP = {
  done: { label: "DONE", color: C.green, icon: "✓" },
  active: { label: "ACTIVE", color: C.amber, icon: "●" },
  next: { label: "NEXT", color: C.blue, icon: "○" },
  blocked: { label: "BLOCKED", color: C.red, icon: "✕" },
  waiting: { label: "WAITING", color: C.purple, icon: "◌" },
  todo: { label: "TODO", color: C.textDim, icon: "○" },
};

export const STORAGE_KEY = "travlteam-admin-v4";

export const ADMIN_INITIAL = {
  sections: [
    { id: "v1-mobile", title: "v1 MOBILE APP (16 Screens Built)", status: "done", color: C.green, open: false, tasks: [
      { id: "m1", name: "Auth flow: Splash, Welcome, SignIn, SignUp, ProfileSetup", status: "done", owner: "aidan", note: "Clerk OAuth (Google + Apple) + email/password + mock fallback", priority: "normal" },
      { id: "m2", name: "MyTripsScreen: trip list, search, FAB, featured tournaments", status: "done", owner: "aidan", note: "Pull-to-refresh, context menus, trip card interactions", priority: "normal" },
      { id: "m3", name: "TripBuilder: name, destination, tournament search, dates, sport, team size", status: "done", owner: "aidan", note: "Auto-fills from tournament selection", priority: "normal" },
      { id: "m4", name: "TripDetail: day tabs, itinerary, weather, stats, share, members", status: "done", owner: "aidan", note: "Grouped by date, lodging/food/member counts", priority: "normal" },
      { id: "m5", name: "TripEdit: modify trip, reorder itinerary, manage members, visibility", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "m6", name: "VenueSearch: Google Places + Foursquare, map/list toggle, sport filters", status: "done", owner: "aidan", note: "Custom markers (blue=hotel, purple=food, gold=venue)", priority: "normal" },
      { id: "m7", name: "ItineraryPlanner: draggable list, collapsible map, day grouping", status: "done", owner: "aidan", note: "react-native-gesture-handler + reanimated", priority: "normal" },
      { id: "m8", name: "InviteMembers: share code, RSVP ring, member list, native share", status: "done", owner: "aidan", note: "Going/Maybe/Can't with RSVPRing visualization", priority: "normal" },
      { id: "m9", name: "Profile + Settings screens", status: "done", owner: "aidan", note: "", priority: "normal" },
    ]},
    { id: "v1-backend", title: "v1 BACKEND (Hono + Bun + Supabase)", status: "done", color: C.green, open: false, tasks: [
      { id: "b1", name: "Hono REST API with Zod validation", status: "done", owner: "aidan", note: "Plans, PlanItems, PlanMembers CRUD", priority: "normal" },
      { id: "b2", name: "Supabase PostgreSQL: plans, plan_items, plan_members, venues, users", status: "done", owner: "aidan", note: "RLS policies on all tables", priority: "normal" },
      { id: "b3", name: "Bearer token auth forwarding to Supabase", status: "done", owner: "aidan", note: "Clerk JWT → Supabase RLS", priority: "normal" },
      { id: "b4", name: "Health check + sync status endpoints", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "b5", name: "Upsert endpoints for bidirectional sync", status: "done", owner: "aidan", note: "", priority: "normal" },
    ]},
    { id: "v1-sync", title: "v1 OFFLINE-FIRST SYNC ENGINE", status: "done", color: C.green, open: false, tasks: [
      { id: "s1", name: "SQLite local database (5 tables + sync_queue)", status: "done", owner: "aidan", note: "trips, venues, itinerary_items, tournaments, trip_members", priority: "normal" },
      { id: "s2", name: "Sync service: orchestrator + queue processing", status: "done", owner: "aidan", note: "Exponential backoff retry", priority: "normal" },
      { id: "s3", name: "Network monitor: auto-sync on reconnect", status: "done", owner: "aidan", note: "NetInfo subscription", priority: "normal" },
      { id: "s4", name: "Conflict resolver: last-write-wins (version-based)", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "s5", name: "Entity sync: trips, items, members push/pull", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "s6", name: "SyncStatusBadge UI component", status: "done", owner: "aidan", note: "Synced/Syncing/Pending/Offline/Error states", priority: "normal" },
    ]},
    { id: "v1-design", title: "v1 DESIGN SYSTEM (Paper/Forest/Trophy)", status: "done", color: C.green, open: false, tasks: [
      { id: "d1", name: "Design tokens: colors, spacing, typography, animations", status: "done", owner: "aidan", note: "Paper #F5EFE0, Forest #1C3029, Trophy #E5A050", priority: "normal" },
      { id: "d2", name: "Nativewind + Tailwind v3 integration", status: "done", owner: "aidan", note: "Custom color scales, border radius, spacing", priority: "normal" },
      { id: "d3", name: "Glass-morphism components (GlassCard, GlassView)", status: "done", owner: "aidan", note: "iOS glass effect", priority: "normal" },
      { id: "d4", name: "Haptic feedback on all interactions", status: "done", owner: "aidan", note: "Light, medium, heavy via expo-haptics", priority: "normal" },
      { id: "d5", name: "Reanimated animations throughout", status: "done", owner: "aidan", note: "Spring animations, scale on press, moti", priority: "normal" },
    ]},
    { id: "env-switch", title: "ENVIRONMENT SWITCH (Next)", status: "next", color: C.blue, open: true, tasks: [
      { id: "es1", name: "Reconfigure EAS Build for Mike's Apple Dev (MG7Z3C55G5)", status: "next", owner: "aidan", note: "Mike needs to verify Aidan has access to Apple Developer account", priority: "urgent" },
      { id: "es2", name: "Create/verify aiob@travlteam.com accounts (Clerk, Supabase, EAS)", status: "next", owner: "aidan", note: "", priority: "urgent" },
      { id: "es3", name: "Push first build to Mike's TestFlight", status: "todo", owner: "aidan", note: "", priority: "urgent" },
      { id: "es4", name: "Update environment variables for production", status: "todo", owner: "aidan", note: "Clerk keys, Supabase URL, API keys", priority: "high" },
      { id: "es5", name: "Verify CI/CD pipeline (anyone can trigger build)", status: "todo", owner: "aidan", note: "", priority: "high" },
    ]},
    { id: "qa-testing", title: "QA TESTING", status: "todo", color: C.cyan, open: true, tasks: [
      { id: "qa1", name: "Test: Auth flow — sign up, sign in, sign out, OAuth, token refresh", status: "todo", owner: "aidan", note: "Clerk integration on real device", priority: "urgent" },
      { id: "qa2", name: "Test: Trip CRUD — create, edit, delete, list, search, empty state", status: "todo", owner: "aidan", note: "", priority: "urgent" },
      { id: "qa3", name: "Test: Venue search — Google Places + Foursquare, filters, sort", status: "todo", owner: "aidan", note: "Test with real API keys. Check zero results handling.", priority: "high" },
      { id: "qa4", name: "Test: Maps — pins render, markers, list/map toggle, distance calc", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "qa5", name: "Test: Itinerary — add/edit/delete items, drag reorder, day grouping", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "qa6", name: "Test: Share + invite — share code, join trip, RSVP, member list", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "qa7", name: "Test: Offline → online sync cycle", status: "todo", owner: "aidan", note: "Create trip offline, reconnect, verify sync", priority: "normal" },
      { id: "qa8", name: "Test: Profile + settings + onboarding", status: "todo", owner: "aidan", note: "", priority: "low" },
    ]},
    { id: "bug-fix", title: "BUG FIX + POLISH", status: "todo", color: C.red, open: false, tasks: [
      { id: "bf1", name: "Fix demo-breakers: crashes, auth failures, white screens", status: "todo", owner: "aidan", note: "P1 — anything that prevents a walkthrough", priority: "urgent" },
      { id: "bf2", name: "Fix functional bugs: zero results, broken filters, save failures", status: "todo", owner: "aidan", note: "P2 — features that don't work", priority: "high" },
      { id: "bf3", name: "Fix UI/cosmetic: wrong labels, layout breaks, loading states", status: "todo", owner: "aidan", note: "P3 — looks wrong but works", priority: "normal" },
      { id: "bf4", name: "Apply Mike/Tony feedback: label naming, UX tweaks", status: "todo", owner: "aidan", note: "Food not Restaurants, Lodging not Hotels, Event Location not Destination", priority: "normal" },
      { id: "bf5", name: "Execute REDESIGN_PLAN.md changes", status: "todo", owner: "aidan", note: "2-tab nav, kill AI branding, simplified builder, day-by-day detail", priority: "high" },
    ]},
    { id: "v2-rewrite", title: "v2 ARCHITECTURE REWRITE", status: "todo", color: C.purple, open: true, tasks: [
      { id: "v2a", name: "Migrate to Expo Router v3 (file-based routing)", status: "todo", owner: "", note: "Replace React Navigation stacks with src/app/ routes", priority: "high" },
      { id: "v2b", name: "Upgrade to NativeWind v5 + Tailwind CSS v4", status: "todo", owner: "", note: "New syntax, dark mode support: className=\"bg-white dark:bg-gray-900\"", priority: "high" },
      { id: "v2c", name: "Replace FlatList with Legend List", status: "todo", owner: "", note: "Better perf, zero native deps, maintainScrollAtEnd", priority: "normal" },
      { id: "v2d", name: "Feature-based folder structure (src/features/)", status: "todo", owner: "", note: "trips/, venues/, invites/, plans/, profile/ modules", priority: "high" },
      { id: "v2e", name: "Migrate to Reanimated v4 gesture composables", status: "todo", owner: "", note: "Remove deprecated useAnimatedGestureHandler", priority: "normal" },
      { id: "v2f", name: "Supabase Realtime subscriptions", status: "todo", owner: "", note: "Collaborative state for shared plans, live RSVP", priority: "normal" },
      { id: "v2g", name: "Generate typed Supabase client (npm run update-types)", status: "todo", owner: "", note: "database.types.ts from schema", priority: "normal" },
    ]},
    { id: "partiful", title: "THE PARTIFUL MOMENT (Web Sharing)", status: "todo", color: C.pink, open: false, tasks: [
      { id: "pf1", name: "Web page: travlteam.app/trip/[id] — view without app", status: "todo", owner: "", note: "Full itinerary, hotels, restaurants, RSVP button", priority: "high" },
      { id: "pf2", name: "OG meta tags for rich link previews", status: "todo", owner: "", note: "iMessage, WhatsApp, Slack previews with trip cover", priority: "high" },
      { id: "pf3", name: "Clerk deep link invites", status: "todo", owner: "", note: "Share link → auto-join as member", priority: "high" },
      { id: "pf4", name: "Universal links (AASA + asset links)", status: "todo", owner: "", note: "iOS + Android native app opening", priority: "normal" },
      { id: "pf5", name: "Dynamic OG image generation", status: "todo", owner: "", note: "Trip-specific preview images via API route", priority: "normal" },
      { id: "pf6", name: "Push notifications", status: "todo", owner: "", note: "'Marcus added Fairfield Inn to Dallas Cup trip'", priority: "normal" },
    ]},
    { id: "future", title: "FUTURE FEATURES", status: "future", color: C.textDim, open: false, tasks: [
      { id: "f1", name: "Gemini Flash 2.5 AI search (~$0.04/query)", status: "todo", owner: "", note: "Natural language venue search", priority: "normal" },
      { id: "f2", name: "Hotel affiliate commissions (Hotels.com, Booking.com)", status: "todo", owner: "", note: "4-8% per booking — primary revenue", priority: "normal" },
      { id: "f3", name: "Premium plans ($4.99/mo)", status: "todo", owner: "", note: "Unlimited trips, AI search, advanced filters", priority: "normal" },
      { id: "f4", name: "Directions button (venue → tournament navigation)", status: "todo", owner: "", note: "", priority: "normal" },
      { id: "f5", name: "In-plan venue ratings & reviews", status: "todo", owner: "", note: "Private to trip, not public — per Mike's vision", priority: "normal" },
      { id: "f6", name: "Tournament partnerships (featured listings)", status: "todo", owner: "", note: "", priority: "normal" },
      { id: "f7", name: "Team coordinator tools (club/league license)", status: "todo", owner: "", note: "", priority: "normal" },
    ]},
  ],
};
