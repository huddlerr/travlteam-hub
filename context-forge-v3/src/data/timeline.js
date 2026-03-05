import { C } from "../styles/tokens";

export const timelineEvents = [
  { date: "Oct 2025", label: "Project kickoff", type: "past", detail: "Muhammad hired via Toptal. Development begins." },
  { date: "Mid-Jan", label: "Working demo shown", type: "past", detail: "Mike sees functional app on Muhammad's infrastructure." },
  { date: "Late Jan", label: "Discovery + crisis", type: "past", detail: "Backend dependency exposed. Access revoked. App goes dark." },
  { date: "Feb 4", label: "Full disclosure email", type: "past", detail: "Two options presented. Mike chooses to continue." },
  { date: "Feb 5-6", label: "Rebuild begins (vibecodeapp)", type: "past", detail: "AI-assisted React Native + Expo. 80+ agent commits in 48hrs." },
  { date: "Feb 6-7", label: "16 screens built", type: "past", detail: "Auth, trips, venues, maps, itinerary planner, invites, profile — all functional." },
  { date: "Feb 8", label: "Phase 12 deep assessment", type: "past", detail: "Full codebase audit. Design system unified (Paper/Forest/Trophy)." },
  { date: "Feb 11-12", label: "Backend + sync engine built", type: "past", detail: "Hono/Bun REST API. SQLite offline-first + Supabase sync queue." },
  { date: "Feb 17", label: "Redesign plan finalized", type: "past", detail: "2-tab nav, no AI branding, day-by-day timeline. Philosophy locked." },
  { date: "Feb 20", label: "TODAY — Hub v3 alignment", type: "today", detail: "Full codebase explored. Hub updated. v1 complete, v2 spec ready." },
  { date: "Next", label: "EAS + TestFlight to Mike", type: "next", detail: "Reconfigure for Mike's Apple Dev (MG7Z3C55G5). First build on his account." },
  { date: "Next", label: "QA testing sprint", type: "next", detail: "Systematic testing: auth, search, maps, trips, venues, sharing, profile." },
  { date: "Next", label: "Bug fix + polish", type: "future", detail: "Demo-breakers first, then functional, then cosmetic." },
  { date: "Next", label: "v2 architecture rewrite", type: "future", detail: "Expo Router v3, NativeWind v5, Legend List, feature-based structure." },
  { date: "Next", label: "Web sharing (Partiful model)", type: "sprint", detail: "travlteam.app/trip/abc123 — view without app, sign in to contribute." },
  { date: "Mar-May", label: "Lacrosse season", type: "goal", detail: "Every weekend tournament = real-world testing with families." },
];

export const timelineStyles = {
  past: { dot: C.green, bg: C.greenDim + "15", border: C.green + "25" },
  today: { dot: C.amber, bg: C.amberDim + "35", border: C.amber + "50" },
  next: { dot: C.blue, bg: C.blueDim + "15", border: C.blue + "25" },
  future: { dot: C.blue, bg: "transparent", border: C.border },
  deadline: { dot: C.red, bg: C.redDim + "25", border: C.red + "45" },
  sprint: { dot: C.pink, bg: C.pinkDim + "15", border: C.pink + "25" },
  goal: { dot: C.purple, bg: C.purpleDim + "12", border: C.purple + "20" },
};
