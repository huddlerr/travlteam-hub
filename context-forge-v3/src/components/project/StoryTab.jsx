import { C, fonts } from "../../styles/tokens";
import { Card, SubHead } from "../ui";
import { storyTimeline } from "../../data/story";

export default function StoryTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <SubHead text="The full arc — from crisis to AI-assisted rebuild to v1 completion" />
      <Card color={C.amber} title="MIKE'S PERSPECTIVE" style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6, fontStyle: "italic" }}>"As recently as mid-January, I believed we were close to finished. The app I saw working was real — but it was running on someone else's infrastructure."</div>
        <div style={{ fontSize: 11, color: C.textMuted, marginTop: 6 }}>Mike paid $13,500 across 3 invoices. The rebuild honors that investment with a no-payment-until-delivery agreement.</div>
      </Card>
      <Card color={C.green} title="THE VIBECODEAPP FACTOR" style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6 }}>Instead of hiring another developer, Aidan used <strong style={{ color: C.green }}>vibecodeapp.com</strong> to rebuild the entire app via AI-assisted generation. 100+ agent commits built 16 screens, a Hono/Bun backend, offline-first SQLite sync, and a full design system. v1 is feature-complete — next steps: QA on Mike's TestFlight, then v2 architecture rewrite.</div>
      </Card>
      {storyTimeline.map((e, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: e.color, marginTop: 14, flexShrink: 0, boxShadow: e.color === C.red || e.color === C.amber ? `0 0 10px ${e.color}40` : "none" }} />
            {i < storyTimeline.length - 1 && <div style={{ width: 2, flex: 1, background: C.border, minHeight: 8 }} />}
          </div>
          <div style={{ background: e.color + "08", border: `1px solid ${e.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 4, flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{e.icon} {e.title}</span>
              <span style={{ fontSize: 11, color: C.textMuted, fontFamily: fonts.mono }}>{e.date}</span>
            </div>
            <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4, lineHeight: 1.5 }}>{e.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
