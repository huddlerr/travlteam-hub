import { C, fonts } from "../../styles/tokens";

export default function Card({ color, title, children, style = {} }) {
  const c = color || C.blue;
  return (
    <div style={{
      background: c + "08",
      border: `1px solid ${c}20`,
      borderRadius: 10,
      padding: "14px 16px",
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0,
        width: 3, background: c, borderRadius: "10px 0 0 10px",
      }} />
      {title && (
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
          color: c, marginBottom: 10, fontFamily: fonts.mono,
        }}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
