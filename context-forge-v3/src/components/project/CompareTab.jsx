import { C, fonts } from "../../styles/tokens";
import { SubHead } from "../ui";
import { compareFeatures, compareCols } from "../../data/compare";

function renderCell(val) {
  if (val === true) return <span style={{ color: C.green }}>✓</span>;
  if (val === false) return <span style={{ color: C.textDim }}>✗</span>;
  if (val === "soon") return <span style={{ color: C.amber, fontSize: 9 }}>SOON</span>;
  if (val === "p2") return <span style={{ color: C.pink, fontSize: 9 }}>P2</span>;
  return <span style={{ color: C.textDim }}>—</span>;
}

export default function CompareTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SubHead text="Feature matrix — where TravlTeam fills the gap" />
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "8px 8px", borderBottom: `1px solid ${C.border}`, color: C.textMuted, fontWeight: 600, fontSize: 10, fontFamily: fonts.mono }}>Feature</th>
              {compareCols.map((c) => (
                <th key={c.key} style={{ textAlign: "center", padding: "8px 4px", borderBottom: `1px solid ${C.border}`, color: c.color, fontWeight: 700, fontSize: 10, fontFamily: fonts.mono }}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareFeatures.map((f, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : C.surface + "60" }}>
                <td style={{ padding: "7px 8px", color: C.text, borderBottom: `1px solid ${C.border}15`, fontSize: 12 }}>{f.name}</td>
                {compareCols.map((c) => (
                  <td key={c.key} style={{ textAlign: "center", padding: "7px 4px", borderBottom: `1px solid ${C.border}15`, fontSize: 14 }}>{renderCell(f[c.key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
