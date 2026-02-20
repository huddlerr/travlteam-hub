import { C, fonts } from "../../styles/tokens";
import { Card, SubHead } from "../ui";
import { searchFlow, dataModels } from "../../data/architecture";

export default function ArchTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SubHead text="Unified venue search — how a parent's query becomes results" />
      <Card color={C.cyan} title="SEARCH FLOW">
        {searchFlow.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i < searchFlow.length - 1 ? 10 : 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: C.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{f.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: C.cyan, fontFamily: fonts.mono, minWidth: 22 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{f.step}</span>
              </div>
              <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2, marginLeft: 30 }}>{f.detail}</div>
            </div>
          </div>
        ))}
      </Card>
      <Card color={C.purple} title="DATA MODEL">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {dataModels.map((m, i) => (
            <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 12px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: m.color, fontFamily: fonts.mono }}>{m.name}</span>
              <span style={{ fontSize: 11, color: C.textMuted, marginLeft: 8 }}>{m.fields}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
