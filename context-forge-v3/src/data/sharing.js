import { C } from "../styles/tokens";

export const roles = [
  { role: "Organizer", perm: "Full control: create/edit/delete trip, manage members, invite", color: C.blue },
  { role: "Member", perm: "View trip, RSVP status, add venues to itinerary", color: C.green },
  { role: "Viewer", perm: "View-only via share code — see itinerary, venues, map", color: C.amber },
  { role: "Guest (Planned)", perm: "Web view via travlteam.app/trip/abc — no app needed", color: C.textMuted },
];

export const currentSharing = [
  "Organizer creates trip with auto-generated share code",
  "Taps Share button → native share sheet (text, email, social)",
  "Share code can be copied to clipboard directly",
  "Deep link configured: travlteam://trip/[code]",
  "Members join trip using share code → auto-added with 'pending' RSVP",
  "RSVP system: Going / Maybe / Can't — visualized with RSVPRing component",
  "All synced offline-first: works without connection, queues for later",
];

export const plannedSharing = [
  "Web page: travlteam.app/trip/abc123 renders full itinerary without app",
  "OG meta tags for rich previews in iMessage, WhatsApp, Slack",
  "Clerk deep link invites: share link → auto-join as member with role",
  "Universal links (AASA + asset links) for native app opening",
  "Push notifications: 'Marcus RSVP'd Going to Dallas Cup trip'",
  "Real-time updates via Supabase Realtime subscriptions",
];

// Keep for backward compat with SharingTab
export const viralLoopSteps = [
  "Coach creates trip → auto-generated share code + deep link",
  "Texts share code to parent group chat via native share sheet",
  "Parents open app with share code → join trip instantly",
  "RSVP: Going / Maybe / Can't — visible to organizer",
  "Members add venues to itinerary → synced to all members",
  "Organizer gets notification of new members + venue additions",
  "Members create their own trips for next tournament → cycle repeats",
];
