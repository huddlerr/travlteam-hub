import { C, fonts } from "../../styles/tokens";

export default function SubHead({ text }) {
  return <p style={{ color: C.textMuted, fontSize: 13, margin: "0 0 12px 0", fontFamily: fonts.mono }}>{text}</p>;
}
