import { C, fonts } from "../../styles/tokens";
import { Card, SubHead } from "../ui";
import { marketSegments } from "../../data/market";

export default function MarketTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SubHead text="$52B+ market — no one owns the travel planning layer for sports families" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {marketSegments.map((s, i) => (
          <Card key={i} color={s.color} style={{ flex: "1 1 200px" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: s.color, fontFamily: fonts.mono }}>{s.size}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginTop: 4 }}>{s.name}</div>
            <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{s.growth}</div>
          </Card>
        ))}
      </div>
      <Card color={C.red} title="THE GAP">
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.7 }}>
          <strong style={{ color: C.red }}>TeamSnap / GameChanger</strong> own team management but have zero travel planning. <strong style={{ color: C.red }}>TripIt / Wanderlog / Tripsy</strong> own trip planning but have zero sports awareness. Every weekend, millions of parents coordinate through <strong style={{ color: C.amber }}>group texts, Facebook groups, and forwarded PDFs</strong>. TravlTeam sits in the gap.
        </div>
      </Card>
    </div>
  );
}
