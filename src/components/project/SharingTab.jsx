import { C, fonts } from "../../styles/tokens";
import { Card, Stat, SubHead } from "../ui";
import { roles, viralLoopSteps, currentSharing, plannedSharing } from "../../data/sharing";

export default function SharingTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SubHead text="Share code + RSVP system built — web sharing (Partiful model) is next" />
      <Card color={C.green} title="SHARING TODAY (v1 — Built)">
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.7 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {currentSharing.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: C.green, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, minWidth: 14 }}>✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card color={C.pink} title="THE VIRAL LOOP (Current Flow)">
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.7 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {viralLoopSteps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: C.pink, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, minWidth: 18 }}>{i + 1}.</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card color={C.cyan} title="PLANNED — Web Sharing (The Partiful Moment)">
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.7 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {plannedSharing.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: C.cyan, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, minWidth: 14 }}>○</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card color={C.blue} title="ROLE HIERARCHY">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {roles.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: C.surface, borderRadius: 8, padding: "8px 12px", border: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: r.color, fontFamily: fonts.mono, minWidth: 100 }}>{r.role}</span>
              <span style={{ fontSize: 12, color: C.textMuted }}>{r.perm}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card color={C.purple} title="K-FACTOR MATH">
        <div style={{ display: "flex", gap: 16, marginBottom: 10 }}>
          <Stat value="1" label="tournament" color={C.purple} />
          <Stat value="15-40" label="teams" color={C.cyan} />
          <Stat value="12-18" label="parents/team" color={C.green} />
          <Stat value="750-2K" label="families reached" color={C.pink} />
        </div>
        <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>If 10% convert to plan creators → 75-200 new plans per tournament. Each plan shared to another parent group → compound growth.</div>
      </Card>
    </div>
  );
}
