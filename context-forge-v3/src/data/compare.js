import { C } from "../styles/tokens";

export const compareFeatures = [
  { name: "Dual venue API (Google + Foursquare)", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: true, tripsy: false },
  { name: "Sport-specific filters (pool, bus parking, team rates)", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Tournament-aware venue distances", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Offline-first with cloud sync", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: true },
  { name: "Day-by-day itinerary with meal tags", us: true, teamsnap: false, gamechanger: false, tripit: true, wanderlog: true, tripsy: true },
  { name: "Team RSVP (Going/Maybe/Can't)", us: true, teamsnap: true, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Interactive map + list toggle", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: true, tripsy: true },
  { name: "Parent-to-parent viral sharing", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "AI-powered search & chat", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Web view without app (Partiful model)", us: "soon", teamsnap: false, gamechanger: false, tripit: true, wanderlog: true, tripsy: true },
];

export const compareCols = [
  { key: "us", label: "TT", color: C.blue },
  { key: "teamsnap", label: "TS", color: C.textMuted },
  { key: "gamechanger", label: "GC", color: C.textMuted },
  { key: "tripit", label: "Trip", color: C.textMuted },
  { key: "wanderlog", label: "WL", color: C.textMuted },
  { key: "tripsy", label: "Trp", color: C.textMuted },
];
