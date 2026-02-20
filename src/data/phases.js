import { C } from "../styles/tokens";

export const phases = [
  { num: 1, name: "App Built via vibecodeapp.com", status: "done", items: ["React Native + Expo generated", "Full feature set coded", "Codebase exported to GitHub", "Deployed to Aidan's TestFlight"], color: C.green },
  { num: 2, name: "Environment Switch", status: "active", items: ["Reconfigure EAS for Mike's Apple Dev account", "Set up aiob@travlteam.com accounts", "Push first build to Mike's TestFlight", "Verify CI/CD pipeline works"], color: C.amber },
  { num: 3, name: "Systematic QA Testing", status: "ready", items: ["Auth flow (Clerk sign-up/in/out)", "Search + filters (Google Places + Foursquare)", "Map integration (pins, toggle, location)", "Plans CRUD (create, edit, delete)", "Save venue to plan flow", "Share link generation + opening", "Profile + settings"], color: C.blue },
  { num: 4, name: "Bug Fixing Sprint", status: "queued", items: ["Demo-breakers first (crashes, auth failures)", "Functional bugs (zero results, broken filters)", "UI/cosmetic issues (label fixes, layout)", "Mike/Tony feedback items (HVS-64, 80)"], color: C.blue },
  { num: 5, name: "Polish + Demo Prep", status: "queued", items: ["3 full app walkthroughs", "Label updates: Food/Lodging/Event Location", "Loading states + error handling", "Monday Feb 24 demo-ready"], color: C.blue },
];

export const postMvpItems = [
  { name: "Interactive plan sharing", desc: "Clickable venues, not a PDF — the Partiful moment", color: C.pink },
  { name: "Web app for non-users", desc: "travlteam.app/p/abc123 renders without the app installed", color: C.cyan },
  { name: "Deep links", desc: "Text/email → opens plan in app OR web fallback", color: C.purple },
  { name: "Directions button", desc: "Tap to navigate from event to venue — stretch goal for MVP", color: C.orange },
  { name: "Ratings & reviews", desc: "Clean dropdown-style, not social media — per Mike's vision", color: C.amber },
  { name: "Push notifications", desc: "'Marcus added Fairfield Inn to Dallas Cup trip'", color: C.green },
];

export const statusColors = { done: C.green, active: C.amber, ready: C.cyan, queued: C.textDim };
export const statusLabels = { done: "✓ BUILT", active: "● ACTIVE", ready: "◐ READY", queued: "○ QUEUED" };
