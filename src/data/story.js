import { C } from "../styles/tokens";

export const storyTimeline = [
  { date: "Oct 2025", title: "Project Kickoff", desc: "Mike & Tony Sherry hire Aidan to build TravlTeam. Developer Muhammad Yousaf Khan sourced through Toptal.", icon: "🚀", color: C.green },
  { date: "Oct–Dec", title: "Development", desc: "Regular updates, builds shown. What isn't visible: entire backend running on Muhammad's personal AWS, deployments from his Mac only.", icon: "⚙️", color: C.blue },
  { date: "Mid-Jan 2026", title: "Mike Sees Working App", desc: "Functional demo shown — search, venues, basic flow all working. But it's running on infrastructure Aidan doesn't own or control.", icon: "📱", color: C.purple },
  { date: "Late Jan", title: "The Discovery", desc: "Backend routes to Muhammad's servers. Build pipeline is his Mac. Credentials hardcoded. 25+ issues documented across 47+ instances.", icon: "🚨", color: C.red },
  { date: "Late Jan", title: "Access Revoked", desc: "Muhammad's access cut. Backend goes dark immediately — confirming the infrastructure dependency.", icon: "🔒", color: C.red },
  { date: "Jan–Feb", title: "Audit + Recovery", desc: "Full codebase audit. Toptal complaint filed. Resolution: $2,630 refund (50% of Toptal fees) + $400 credit.", icon: "🔍", color: C.amber },
  { date: "Feb 4", title: "Full Disclosure to Mike", desc: "Complete transparency email. Two options: finish together, or part ways cleanly. Aidan takes full responsibility.", icon: "📧", color: C.amber },
  { date: "Feb 6+", title: "The Rebuild via vibecodeapp.com", desc: "Mike continues. No payments until delivery. Aidan rebuilds from scratch using vibecodeapp.com — AI-assisted React Native + Expo. Codebase to GitHub.", icon: "🏗️", color: C.green },
  { date: "~Feb 15", title: "App on TestFlight", desc: "Full app deployed to Aidan's own TestFlight. All features coded via vibecodeapp. Untested.", icon: "✅", color: C.green },
  { date: "Feb 17", title: "Monday Review with Mike", desc: "Check-in call. Progress shown. Next: reconfigure EAS for Mike's Apple Developer account + begin QA.", icon: "📞", color: C.blue },
  { date: "Feb 19", title: "TODAY — Sprint Begins", desc: "4 days to deadline. Environment switch tonight (aiob@travlteam.com). Then: systematic QA → bug fix → polish.", icon: "🎯", color: C.amber },
  { date: "Feb 23", title: "Phase 1 Deadline", desc: "Full Phase 1 functional on Mike's Apple Developer account. Demo-ready for Monday.", icon: "🏁", color: C.pink },
  { date: "Feb 24+", title: "Post-MVP Sprint", desc: "Interactive sharing, web app, deep links, directions — the Partiful moment.", icon: "🚀", color: C.purple },
];
