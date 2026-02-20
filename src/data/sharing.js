import { C } from "../styles/tokens";

export const roles = [
  { role: "Owner", perm: "Full control, delete plan, manage members", color: C.blue },
  { role: "Editor", perm: "Add/remove venues, add notes, vote", color: C.green },
  { role: "Viewer", perm: "See plan, venues, notes — no edits", color: C.amber },
  { role: "Anonymous", perm: "View-only via share link, no account needed", color: C.textMuted },
];

export const viralLoopSteps = [
  "Coach creates trip plan → gets share link",
  "Texts travlteam.app/p/abc12xyz to parent group chat",
  "Parents tap link → see full plan instantly (NO download, NO signup)",
  'Parent wants to suggest a hotel → taps "Sign in to contribute"',
  "Signs in with phone → auto-joins as collaborator",
  "Adds venue → original coach gets notified",
  "That parent creates their own plan for next tournament → cycle repeats",
];
