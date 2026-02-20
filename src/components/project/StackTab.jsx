import { C } from "../../styles/tokens";
import { Card, Chip, SubHead } from "../ui";
import { stackLayers } from "../../data/stack";

export default function StackTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <SubHead text="Built via vibecodeapp.com — React Native + Expo, codebase in GitHub" />
      {stackLayers.map((layer, i) => (
        <div key={i}>
          <Card color={layer.color} title={layer.label}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {layer.items.map((item, j) => <Chip key={j} {...item} />)}
            </div>
          </Card>
          {i < stackLayers.length - 1 && (
            <div style={{ textAlign: "center", color: C.textDim, fontSize: 14, lineHeight: "18px" }}>↓</div>
          )}
        </div>
      ))}
    </div>
  );
}
