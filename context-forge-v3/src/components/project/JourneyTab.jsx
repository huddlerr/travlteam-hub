import { C, fonts } from "../../styles/tokens";
import { Card, Stat, SubHead } from "../ui";
import { sarahSteps, marcusSteps } from "../../data/journey";

function PersonFlow({ name, emoji, steps, color }) {
  return (
    <Card color={color} title={`${emoji} ${name.toUpperCase()}'S JOURNEY`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: C.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{s.action}</div>
              <div style={{ fontSize: 11, color: C.textMuted, marginTop: 1 }}>{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function JourneyTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <SubHead text="Parent-to-parent flow — Sarah creates, Marcus discovers, network grows" />
      <PersonFlow name="Sarah" emoji="👩" steps={sarahSteps} color={C.blue} />
      <div style={{ textAlign: "center", color: C.pink, fontSize: 22, lineHeight: "24px" }}>
        ↓ <span style={{ fontSize: 11, fontFamily: fonts.mono }}>SHARE LINK SENT</span> ↓
      </div>
      <PersonFlow name="Marcus" emoji="👨" steps={marcusSteps} color={C.green} />
      <Card color={C.pink} title="THE NETWORK EFFECT">
        <div style={{ display: "flex", gap: 16, marginBottom: 10, flexWrap: "wrap" }}>
          <Stat value="1" label="plan shared" color={C.blue} />
          <Stat value="12-18" label="parents see it" color={C.cyan} />
          <Stat value="6-10" label="sign up" color={C.green} />
          <Stat value="2-3" label="create own plans" color={C.pink} />
        </div>
        <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>Each tournament has 15-40 teams. Each team has 12-18 families. One team mom creating one plan can reach <strong style={{ color: C.text }}>750-2,000 families</strong> through a single tournament's worth of group texts.</div>
      </Card>
    </div>
  );
}
