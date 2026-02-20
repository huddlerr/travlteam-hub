import { C, fonts } from "../../styles/tokens";
import { Card, SubHead } from "../ui";
import { phases, postMvpItems, statusColors, statusLabels } from "../../data/phases";

export default function PhasesTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SubHead text="QA + deploy sprint — app is built, now test → fix → polish by Feb 23" />
      <Card color={C.green} title="SPRINT REALITY CHECK" style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6 }}>
          The entire app was generated via <strong style={{ color: C.green }}>vibecodeapp.com</strong> and is live on Aidan's TestFlight. This is <strong style={{ color: C.amber }}>NOT a build sprint</strong> — it's a QA + environment switch + bug fix sprint. 4 days: Wed night → Sun Feb 23.
        </div>
      </Card>
      {phases.map((p, i) => (
        <Card key={i} color={p.color} title={`PHASE ${p.num} — ${p.name}`}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, marginTop: -4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: statusColors[p.status], fontFamily: fonts.mono }}>{statusLabels[p.status]}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.items.map((item, j) => (
              <span key={j} style={{ fontSize: 11, color: C.textMuted, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "4px 10px" }}>{item}</span>
            ))}
          </div>
        </Card>
      ))}
      <Card color={C.pink} title="POST-MVP SPRINT (Feb 24 → Mar ~8)">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {postMvpItems.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 4, height: 4, borderRadius: 2, background: p.color, marginTop: 7, flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{p.name}</span>
                <span style={{ fontSize: 12, color: C.textMuted, marginLeft: 6 }}>— {p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
