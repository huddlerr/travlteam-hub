import { C } from "../../styles/tokens";

export default function Chip({ icon, name, desc }) {
  return (
    <div style={{
      background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
      padding: "8px 12px", display: "flex", alignItems: "center", gap: 8,
      flex: "1 1 auto", minWidth: 155,
    }}>
      <span style={{ fontSize: 17 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{name}</div>
        <div style={{ fontSize: 11, color: C.textMuted }}>{desc}</div>
      </div>
    </div>
  );
}
