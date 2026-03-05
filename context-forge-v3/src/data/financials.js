import { C } from "../styles/tokens";

export const payments = [
  { from: "Mike → Aidan", amount: "$4,500", date: "Invoice 1", color: C.blue },
  { from: "Mike → Aidan", amount: "$4,500", date: "Invoice 2", color: C.blue },
  { from: "Mike → Aidan", amount: "$4,500", date: "Invoice 3", color: C.blue },
  { from: "Aidan → Toptal", amount: "~$5,260", date: "Developer fees", color: C.red },
  { from: "Toptal → Aidan", amount: "$2,630", date: "50% refund", color: C.green },
  { from: "Toptal", amount: "$400", date: "Platform credit", color: C.green },
];

export const agreementItems = [
  "No payments from Mike until Phase 1 is delivered and functional",
  "Aidan rebuilds entirely at his own cost and time investment",
  "All infrastructure under Mike's Apple Developer account (MG7Z3C55G5)",
  "Domain, email (aiob@travlteam.com), and accounts under Mike's ownership",
  "EAS Build CI/CD — no single-developer deployment dependencies",
  "Codebase in GitHub — full source control, no black boxes",
  "Full transparency: weekly Thursday updates + Monday video calls",
];
