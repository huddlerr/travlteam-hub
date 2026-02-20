import { C, fonts } from "../../styles/tokens";
import { Card, Stat, SubHead } from "../ui";
import { payments, agreementItems } from "../../data/financials";

export default function FinancialsTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SubHead text="Full financial breakdown — what was paid, lost, and recovered" />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Card color={C.blue} style={{ flex: "1 1 150px" }}><Stat value="$13.5K" label="Total Mike paid" color={C.blue} /></Card>
        <Card color={C.red} style={{ flex: "1 1 150px" }}><Stat value="~$5.3K" label="Paid to Toptal" color={C.red} /></Card>
        <Card color={C.green} style={{ flex: "1 1 150px" }}><Stat value="$3.0K" label="Recovered" color={C.green} /></Card>
        <Card color={C.amber} style={{ flex: "1 1 150px" }}><Stat value="$0" label="Due until Phase 1" color={C.amber} /></Card>
      </div>
      <Card color={C.blue} title="MONEY FLOW">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {payments.map((p, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: C.surface, borderRadius: 8, padding: "8px 12px", border: `1px solid ${C.border}` }}>
              <div>
                <span style={{ fontSize: 12, color: C.text, fontWeight: 600 }}>{p.from}</span>
                <span style={{ fontSize: 11, color: C.textMuted, marginLeft: 8 }}>{p.date}</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: p.color, fontFamily: fonts.mono }}>{p.amount}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card color={C.green} title="CURRENT AGREEMENT">
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: C.text, lineHeight: 1.6 }}>
          {agreementItems.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: C.green, fontSize: 14, marginTop: 1 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
