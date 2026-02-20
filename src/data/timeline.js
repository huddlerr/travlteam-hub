import { C } from "../styles/tokens";

export const timelineEvents = [
  { date: "Oct 2025", label: "Project kickoff", type: "past", detail: "Muhammad hired via Toptal. Development begins." },
  { date: "Mid-Jan", label: "Working demo shown", type: "past", detail: "Mike sees functional app on Muhammad's infrastructure." },
  { date: "Late Jan", label: "Discovery + crisis", type: "past", detail: "Backend dependency exposed. Access revoked. App goes dark." },
  { date: "Feb 4", label: "Full disclosure email", type: "past", detail: "Two options presented. Mike chooses to continue." },
  { date: "Feb 6", label: "Clean rebuild starts", type: "past", detail: "vibecodeapp.com generates React Native + Expo app. Codebase to GitHub." },
  { date: "~Feb 15", label: "App on TestFlight", type: "past", detail: "Full app deployed to Aidan's TestFlight. All features coded. Untested." },
  { date: "Feb 17", label: "Monday review with Mike", type: "past", detail: "Check-in call. Progress shown. Next: switch environments + QA." },
  { date: "Feb 19", label: "TODAY — QA Sprint Begins", type: "today", detail: "Reconfigure EAS for Mike's Apple Dev (aiob@travlteam.com). 4 days: test → fix → polish." },
  { date: "Feb 20", label: "Full-day QA testing", type: "next", detail: "7 structured test blocks. Walk through every feature. Log every bug." },
  { date: "Feb 21", label: "Bug fixing (priority order)", type: "future", detail: "Demo-breakers → functional → cosmetic. Label updates: Food, Lodging, Event Location." },
  { date: "Feb 22", label: "Polish + walkthroughs", type: "future", detail: "3 full app walkthroughs as Mike would use it." },
  { date: "Feb 23", label: "PHASE 1 DEADLINE", type: "deadline", detail: "Full Phase 1 functional on Mike's Apple Developer account. Demo-ready." },
  { date: "Feb 24+", label: "Post-MVP sprint", type: "sprint", detail: "Interactive sharing, web app, deep links — the Partiful moment." },
  { date: "Mar–May", label: "Lacrosse season", type: "goal", detail: "Every weekend = tournament = real-world testing." },
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
