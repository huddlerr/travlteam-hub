import { C, fonts } from "../../styles/tokens";
import { Card, SubHead } from "../ui";
import { searchFlow, dataModels, syncArchitecture } from "../../data/architecture";

export default function ArchTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SubHead text="Offline-first architecture — SQLite local DB syncs to Supabase cloud via Hono API" />
      <Card color={C.cyan} title="VENUE SEARCH FLOW">
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
      <Card color={C.orange} title="SYNC ARCHITECTURE (Data Flow)">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {syncArchitecture.map((layer, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 12px" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: layer.color, fontFamily: fonts.mono, minWidth: 140 }}>{layer.label}</span>
                <span style={{ fontSize: 11, color: C.textMuted }}>{layer.desc}</span>
              </div>
              {i < syncArchitecture.length - 1 && (
                <div style={{ textAlign: "center", fontSize: 10, color: C.textDim, padding: "2px 0" }}>↓</div>
              )}
            </div>
          ))}
        </div>
      </Card>
      <Card color={C.purple} title="DATA MODELS (Local SQLite + Supabase Cloud)">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {dataModels.map((m, i) => (
            <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 12px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: m.color, fontFamily: fonts.mono }}>{m.name}</span>
              <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{m.fields}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
