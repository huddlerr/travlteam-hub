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

export const STORAGE_KEY = "travlteam-admin-v3";

export const ADMIN_INITIAL = {
  sections: [
    { id: "env-switch", title: "ENVIRONMENT SWITCH", status: "active", color: C.amber, open: true, tasks: [
      { id: "es1", name: "Create/verify aiob@travlteam.com accounts (Clerk, Supabase, EAS)", status: "active", owner: "aidan", note: "Tonight — first priority", priority: "urgent" },
      { id: "es2", name: "Reconfigure EAS Build for Mike's Apple Dev (MG7Z3C55G5)", status: "next", owner: "aidan", note: "Mike needs to add Aidan to Apple Developer if not done", priority: "urgent" },
      { id: "es3", name: "Push first build to Mike's TestFlight", status: "todo", owner: "aidan", note: "", priority: "urgent" },
      { id: "es4", name: "Verify CI/CD pipeline works (anyone can trigger build)", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "es5", name: "Update environment variables for production", status: "todo", owner: "aidan", note: "Clerk keys, Supabase URL, API keys", priority: "high" },
    ]},
    { id: "qa-testing", title: "QA TESTING (Feb 20)", status: "next", color: C.blue, open: true, tasks: [
      { id: "qa1", name: "Test: Auth flow — sign up, sign in, sign out, token refresh", status: "todo", owner: "aidan", note: "Clerk integration. Test on both iOS and if possible Android.", priority: "urgent" },
      { id: "qa2", name: "Test: Search — keyword search, location-based, empty states", status: "todo", owner: "aidan", note: "Google Places + Foursquare merge. Check for zero results.", priority: "urgent" },
      { id: "qa3", name: "Test: Map — pins render, bottom sheet, list/map toggle, current location", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "qa4", name: "Test: Plans CRUD — create, edit, delete, list view, empty state", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "qa5", name: "Test: Save venue to plan — add, remove, notes, the core loop", status: "todo", owner: "aidan", note: "", priority: "high" },
      { id: "qa6", name: "Test: Filter chips — Food, Lodging, Event Location labels", status: "todo", owner: "aidan", note: "Per Mike/Tony feedback: not Restaurants/Hotels/Destination (HVS-64, 80)", priority: "normal" },
      { id: "qa7", name: "Test: Share link generation + opening", status: "todo", owner: "aidan", note: "", priority: "normal" },
      { id: "qa8", name: "Test: Profile + settings screens", status: "todo", owner: "aidan", note: "Can be stubbed if time is tight", priority: "low" },
    ]},
    { id: "bug-fix", title: "BUG FIXING (Feb 21)", status: "todo", color: C.red, open: false, tasks: [
      { id: "bf1", name: "Fix demo-breakers: crashes, auth failures, white screens", status: "todo", owner: "aidan", note: "Priority 1 — anything that prevents a walkthrough", priority: "urgent" },
      { id: "bf2", name: "Fix functional bugs: zero results, broken filters, save failures", status: "todo", owner: "aidan", note: "Priority 2 — features that don't work", priority: "high" },
      { id: "bf3", name: "Fix UI/cosmetic: wrong labels, layout breaks, missing loading states", status: "todo", owner: "aidan", note: "Priority 3 — looks wrong but works", priority: "normal" },
      { id: "bf4", name: "Apply Mike/Tony label feedback (HVS-64, HVS-80)", status: "todo", owner: "aidan", note: "Food not Restaurants, Lodging not Hotels, Event Location not Destination", priority: "normal" },
    ]},
    { id: "polish", title: "POLISH + DEMO PREP (Feb 22-23)", status: "todo", color: C.cyan, open: false, tasks: [
      { id: "po1", name: "Full walkthrough #1 — fresh user perspective", status: "todo", owner: "aidan", note: "Sign up → search → save → share. Note anything that feels off.", priority: "high" },
      { id: "po2", name: "Full walkthrough #2 — Mike's use case", status: "todo", owner: "aidan", note: "Create Dallas Cup plan, search hotels, add to plan, share link", priority: "high" },
      { id: "po3", name: "Full walkthrough #3 — edge cases", status: "todo", owner: "aidan", note: "No results, bad connection, rapid tapping, back button behavior", priority: "normal" },
      { id: "po4", name: "Loading states + error handling pass", status: "todo", owner: "aidan", note: "Every screen should handle loading, error, empty gracefully", priority: "normal" },
      { id: "po5", name: "Final TestFlight build pushed to Mike", status: "todo", owner: "aidan", note: "The one he opens Monday morning", priority: "urgent" },
    ]},
    { id: "backend", title: "BACKEND (Complete)", status: "done", color: C.green, open: false, tasks: [
      { id: "be1", name: "Supabase Edge Functions setup", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "be2", name: "Google Places API integration", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "be3", name: "Foursquare API integration", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "be4", name: "Unified merge + dedup engine", status: "done", owner: "aidan", note: "100m radius, 70% name match", priority: "normal" },
      { id: "be5", name: "Plan CRUD endpoints", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "be6", name: "Venue save-to-plan endpoint", status: "done", owner: "aidan", note: "", priority: "normal" },
    ]},
    { id: "database", title: "DATABASE (Complete)", status: "done", color: C.green, open: false, tasks: [
      { id: "db1", name: "Supabase project provisioned (PostgreSQL)", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "db2", name: "plans table + share_code column", status: "done", owner: "", note: "", priority: "normal" },
      { id: "db3", name: "plan_collaborators table", status: "done", owner: "", note: "owner, editor, viewer roles", priority: "normal" },
      { id: "db4", name: "plan_venues table", status: "done", owner: "", note: "venue_id, notes, votes", priority: "normal" },
      { id: "db5", name: "venues table", status: "done", owner: "", note: "google_id, fsq_id, merged flag", priority: "normal" },
    ]},
    { id: "auth", title: "AUTH + SECURITY (Complete)", status: "done", color: C.green, open: false, tasks: [
      { id: "au1", name: "Clerk integration + publishable key", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "au2", name: "Clerk ↔ Supabase JWT template", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "au3", name: "Row-Level Security policies on all tables", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "au4", name: "No hardcoded credentials in codebase", status: "done", owner: "aidan", note: "Direct fix from old developer's 25+ issues", priority: "normal" },
    ]},
    { id: "deploy", title: "DEPLOYMENT (Complete)", status: "done", color: C.green, open: false, tasks: [
      { id: "de1", name: "EAS Build configured", status: "done", owner: "aidan", note: "", priority: "normal" },
      { id: "de2", name: "App built via vibecodeapp.com", status: "done", owner: "aidan", note: "AI-assisted generation → full codebase export", priority: "normal" },
      { id: "de3", name: "Codebase in GitHub", status: "done", owner: "aidan", note: "Full source control, no black boxes", priority: "normal" },
      { id: "de4", name: "Deployed to Aidan's TestFlight (working)", status: "done", owner: "aidan", note: "All features coded, needs testing", priority: "normal" },
    ]},
    { id: "postmvp", title: "POST-MVP — After Feb 23", status: "future", color: C.purple, open: false, tasks: [
      { id: "pm1", name: "Interactive plan sharing (Partiful model)", status: "todo", owner: "", note: "Clickable venues, not a PDF. View without signup, account to edit.", priority: "high" },
      { id: "pm2", name: "Web app for non-app-users", status: "todo", owner: "", note: "travlteam.app/p/abc123 renders without the app installed", priority: "high" },
      { id: "pm3", name: "Deep links (text/email → app or web fallback)", status: "todo", owner: "", note: "", priority: "normal" },
      { id: "pm4", name: "Directions button (navigate event → venue)", status: "todo", owner: "", note: "Stretch goal that almost made MVP", priority: "normal" },
      { id: "pm5", name: "Push notifications", status: "todo", owner: "", note: "'Marcus added Fairfield Inn'", priority: "normal" },
      { id: "pm6", name: "Ratings & reviews (dropdown style)", status: "todo", owner: "", note: "Per Mike's vision", priority: "normal" },
      { id: "pm7", name: "Gemini Flash 2.5 AI search (~$0.04/search)", status: "todo", owner: "", note: "Natural language venue search", priority: "normal" },
    ]},
  ],
};
