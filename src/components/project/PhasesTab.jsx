import { C, fonts } from "../../styles/tokens";
import { Card, SubHead } from "../ui";
import { phases, postMvpItems, statusColors, statusLabels } from "../../data/phases";

export default function PhasesTab() {
  const doneCount = phases.filter(p => p.status === "done").length;
  const totalCount = phases.length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SubHead text={`${doneCount} of ${totalCount} development phases complete — v1 feature-complete, v2 architecture planned`} />
      <Card color={C.green} title="STATUS SUMMARY" style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6 }}>
          The v1 app has <strong style={{ color: C.green }}>16 screens</strong>, a <strong style={{ color: C.green }}>Hono/Bun backend</strong>, <strong style={{ color: C.green }}>offline-first SQLite sync</strong>, and the <strong style={{ color: C.green }}>Paper/Forest/Trophy design system</strong>. Built via vibecodeapp.com with 100+ agent commits. Next: QA on Mike's TestFlight, then v2 architecture rewrite.
        </div>
      </Card>
      {phases.map((p, i) => (
        <Card key={i} color={p.color} title={`PHASE ${p.num} — ${p.name}`}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, marginTop: -4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: statusColors[p.status], fontFamily: fonts.mono }}>{statusLabels[p.status]}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.items.map((item, j) => (
              <span key={j} style={{ fontSize: 11, color: p.status === "done" ? C.text : C.textMuted, background: C.surface, border: `1px solid ${p.status === "done" ? C.green + "30" : C.border}`, borderRadius: 6, padding: "4px 10px" }}>{p.status === "done" ? "✓ " : ""}{item}</span>
            ))}
          </div>
        </Card>
      ))}
      <Card color={C.pink} title="NEXT — Post-v1 Roadmap">
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
