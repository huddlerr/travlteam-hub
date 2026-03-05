import { C, fonts } from "../../styles/tokens";
import { SubHead } from "../ui";
import { timelineEvents, timelineStyles } from "../../data/timeline";

export default function TimelineTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <SubHead text="Oct 2025 → Lacrosse season — 4 days to Feb 23 deadline" />
      {timelineEvents.map((e, i) => {
        const s = timelineStyles[e.type];
        const isKey = e.type === "today" || e.type === "deadline";
        return (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
              <div style={{ width: isKey ? 14 : 10, height: isKey ? 14 : 10, borderRadius: "50%", background: s.dot, marginTop: 14, flexShrink: 0, boxShadow: isKey ? `0 0 12px ${s.dot}50` : "none" }} />
              {i < timelineEvents.length - 1 && <div style={{ width: 2, flex: 1, background: C.border, minHeight: 6 }} />}
            </div>
            <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "9px 14px", marginBottom: 3, flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: isKey ? s.dot : C.text }}>{e.label}</span>
                <span style={{ fontSize: 11, color: C.textMuted, fontFamily: fonts.mono }}>{e.date}</span>
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 3 }}>{e.detail}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
