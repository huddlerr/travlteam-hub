import { fonts } from "../../styles/tokens";

export default function Badge({ label, color }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, color,
      background: color + "15", padding: "2px 8px", borderRadius: 10,
      fontFamily: fonts.mono, letterSpacing: "0.03em", whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}
