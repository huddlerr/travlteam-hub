import { C } from "../../styles/tokens";
import { Card, Badge, SubHead } from "../ui";
import { revenueStreams } from "../../data/revenue";

export default function RevenueTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SubHead text="7 revenue streams — phased from affiliate to data" />
      {revenueStreams.map((s, i) => (
        <Card key={i} color={s.color}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{s.name}</div>
            <Badge label={s.phase} color={s.color} />
          </div>
          <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.5, marginBottom: 6 }}>{s.desc}</div>
          <div style={{ fontSize: 11, color: C.textDim, fontStyle: "italic" }}>📊 {s.benchmark}</div>
        </Card>
      ))}
    </div>
  );
}
