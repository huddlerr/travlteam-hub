import { C } from "../styles/tokens";

export const searchFlow = [
  { step: "Parent types search", icon: "🔎", detail: '"hotel near tournament, pool, $150"' },
  { step: "Query splits to 2 APIs", icon: "⚡", detail: "Google Places + Foursquare parallel requests" },
  { step: "Results merged + deduped", icon: "🔗", detail: "100m proximity radius, 70% name similarity" },
  { step: "Sport-specific filters applied", icon: "🏟️", detail: "Team block rates, bus parking, indoor pool" },
  { step: "Results rendered", icon: "📋", detail: "Map pins + list view + bottom sheet detail" },
  { step: "Save to plan", icon: "💾", detail: "Venue → plan_venues → shared with team" },
];

export const dataModels = [
  { name: "plans", fields: "id, name, sport, tournament, share_code, created_by", color: C.blue },
  { name: "plan_collaborators", fields: "plan_id, user_id, role (owner|editor|viewer)", color: C.green },
  { name: "plan_venues", fields: "plan_id, venue_id, added_by, notes, votes", color: C.purple },
  { name: "venues", fields: "id, name, google_id, fsq_id, lat, lng, type, merged", color: C.cyan },
  { name: "profiles", fields: "id, clerk_id, display_name, avatar, sport_pref", color: C.amber },
];
