import { C, fonts } from "../../styles/tokens";

export default function Stat({ value, label, color }) {
  return (
    <div style={{ textAlign: "center", flex: "1 1 0" }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: color || C.blue, fontFamily: fonts.mono }}>{value}</div>
      <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{label}</div>
    </div>
  );
}
