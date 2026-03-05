import { useState } from "react";
import { C, fonts } from "../../styles/tokens";
import StackTab from "./StackTab";
import ArchTab from "./ArchTab";
import SharingTab from "./SharingTab";
import PhasesTab from "./PhasesTab";
import StoryTab from "./StoryTab";
import MarketTab from "./MarketTab";
import RevenueTab from "./RevenueTab";
import CompareTab from "./CompareTab";
import TimelineTab from "./TimelineTab";
import FinancialsTab from "./FinancialsTab";
import JourneyTab from "./JourneyTab";

const tabGroups = [
  { label: "TECH", tabs: [{ id: "stack", label: "Stack" }, { id: "arch", label: "Architecture" }, { id: "sharing", label: "Sharing" }, { id: "phases", label: "Phases" }] },
  { label: "BUSINESS", tabs: [{ id: "story", label: "Story" }, { id: "market", label: "Market" }, { id: "revenue", label: "Revenue" }, { id: "compare", label: "Features" }] },
  { label: "EXECUTION", tabs: [{ id: "timeline", label: "Timeline" }, { id: "financials", label: "Financials" }, { id: "journey", label: "User Journey" }] },
];

const tabComponents = {
  stack: StackTab, arch: ArchTab, sharing: SharingTab, phases: PhasesTab,
  story: StoryTab, market: MarketTab, revenue: RevenueTab, compare: CompareTab,
  timeline: TimelineTab, financials: FinancialsTab, journey: JourneyTab,
};

export default function ProjectView() {
  const [activeTab, setActiveTab] = useState("story");
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div>
      <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.border}`, overflowX: "auto", padding: "0 20px" }}>
        {tabGroups.map((group, gi) => (
          <div key={gi} style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: C.textDim, fontFamily: fonts.mono, letterSpacing: "0.08em", padding: "0 6px 8px", whiteSpace: "nowrap" }}>{group.label}</span>
            {group.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? C.blue + "12" : "transparent",
                  border: "none",
                  borderBottom: activeTab === tab.id ? `2px solid ${C.blue}` : "2px solid transparent",
                  color: activeTab === tab.id ? C.blue : C.textMuted,
                  padding: "6px 10px", fontSize: 11, fontWeight: 600,
                  cursor: "pointer", borderRadius: "5px 5px 0 0", whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
            {gi < tabGroups.length - 1 && (
              <div style={{ width: 1, height: 16, background: C.border, margin: "0 4px", alignSelf: "flex-end", marginBottom: 6 }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ padding: 20 }}><ActiveComponent /></div>
    </div>
  );
}
