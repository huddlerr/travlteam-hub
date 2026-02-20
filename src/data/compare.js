import { C } from "../styles/tokens";

export const compareFeatures = [
  { name: "Dual venue API (Google + Foursquare)", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: true, tripsy: false },
  { name: "Sport-specific filters", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Interactive plan sharing", us: "soon", teamsnap: false, gamechanger: false, tripit: true, wanderlog: true, tripsy: true },
  { name: "AI-powered search", us: "p2", teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Map + List toggle", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: true, tripsy: true },
  { name: "Tournament-aware venues", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
  { name: "Parent-to-parent sharing", us: true, teamsnap: false, gamechanger: false, tripit: false, wanderlog: false, tripsy: false },
];

export const compareCols = [
  { key: "us", label: "TT", color: C.blue },
  { key: "teamsnap", label: "TS", color: C.textMuted },
  { key: "gamechanger", label: "GC", color: C.textMuted },
  { key: "tripit", label: "Trip", color: C.textMuted },
  { key: "wanderlog", label: "WL", color: C.textMuted },
  { key: "tripsy", label: "Trp", color: C.textMuted },
];
