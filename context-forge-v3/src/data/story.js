import { C } from "../styles/tokens";

export const storyTimeline = [
  { date: "Oct 2025", title: "Project Kickoff", desc: "Mike & Tony Sherry hire Aidan to build TravlTeam. Developer Muhammad Yousaf Khan sourced through Toptal.", icon: "🚀", color: C.green },
  { date: "Oct-Dec", title: "Development", desc: "Regular updates, builds shown. What isn't visible: entire backend running on Muhammad's personal AWS, deployments from his Mac only.", icon: "⚙️", color: C.blue },
  { date: "Mid-Jan 2026", title: "Mike Sees Working App", desc: "Functional demo shown — search, venues, basic flow all working. But it's running on infrastructure Aidan doesn't own or control.", icon: "📱", color: C.purple },
  { date: "Late Jan", title: "The Discovery", desc: "Backend routes to Muhammad's servers. Build pipeline is his Mac. Credentials hardcoded. 25+ issues documented across 47+ instances.", icon: "🚨", color: C.red },
  { date: "Late Jan", title: "Access Revoked", desc: "Muhammad's access cut. Backend goes dark immediately — confirming the infrastructure dependency.", icon: "🔒", color: C.red },
  { date: "Jan-Feb", title: "Audit + Recovery", desc: "Full codebase audit. Toptal complaint filed. Resolution: $2,630 refund (50% of Toptal fees) + $400 credit.", icon: "🔍", color: C.amber },
  { date: "Feb 4", title: "Full Disclosure to Mike", desc: "Complete transparency email. Two options: finish together, or part ways cleanly. Aidan takes full responsibility.", icon: "📧", color: C.amber },
  { date: "Feb 5-6", title: "The Rebuild Begins", desc: "Mike continues. No payments until delivery. Full rebuild via vibecodeapp.com — AI-assisted React Native + Expo. 80+ agent commits in 48hrs.", icon: "🏗️", color: C.green },
  { date: "Feb 6-7", title: "Core App Functional", desc: "16 screens built: auth flow, trip builder, venue search (Foursquare + Google Places), maps with custom markers, itinerary planner, invite/RSVP system.", icon: "✅", color: C.green },
  { date: "Feb 8", title: "Phase 12 Assessment", desc: "Deep codebase audit. All screens functional. Design system unified: Paper (#F5EFE0), Forest (#1C3029), Trophy (#E5A050). Unused screens identified.", icon: "🔍", color: C.blue },
  { date: "Feb 11-12", title: "Backend + Sync Built", desc: "Hono + Bun REST API with Zod validation. Offline-first SQLite with Supabase sync queue. Conflict resolution. Plans/Items/Members CRUD.", icon: "🗄️", color: C.purple },
  { date: "Feb 17", title: "Redesign Plan Finalized", desc: "UX overhaul documented: 2-tab nav, kill AI branding, day-by-day timeline, simplified trip builder. Philosophy: trip organizer, not AI assistant.", icon: "📋", color: C.cyan },
  { date: "Feb 20", title: "TODAY — Full Alignment", desc: "Deep codebase exploration. Hub v3 updated with accurate state. v1 feature-complete with 16 screens. v2 architecture spec ready.", icon: "🎯", color: C.amber },
  { date: "Next", title: "QA + TestFlight to Mike", desc: "Reconfigure EAS for Mike's Apple Dev account. Systematic QA testing. Bug fix sprint.", icon: "🧪", color: C.blue },
  { date: "Next", title: "v2 Architecture Rewrite", desc: "Expo Router v3, NativeWind v5, Legend List, feature-based /src/features/ structure. Clean break from v1 scaffolding.", icon: "🔄", color: C.blue },
  { date: "Next", title: "The Partiful Moment", desc: "Web sharing: travlteam.app/trip/abc123 — view plan without app. Sign in to contribute. Viral loop activated.", icon: "🚀", color: C.pink },
  { date: "Mar-May", title: "Lacrosse Season", desc: "Every weekend = tournament = real-world testing with actual sports families.", icon: "🥍", color: C.purple },
];
