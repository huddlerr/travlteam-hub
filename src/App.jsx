import { useState } from "react";
import { C, fonts } from "./styles/tokens";
import ProjectView from "./components/project/ProjectView";
import AdminView from "./components/admin/AdminView";

export default function App() {
  const [view, setView] = useState("project");

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: fonts.sans }}>
      {/* Sticky top bar */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>🏟️</span>
          <span style={{ fontSize: 15, fontWeight: 800, color: C.white }}>TravlTeam</span>
          <span style={{ fontSize: 11, color: C.blue, background: C.blue + "15", padding: "2px 10px", borderRadius: 20, fontWeight: 600 }}>Hub v2</span>
        </div>

        {/* View toggle */}
        <div style={{ display: "flex", background: C.bg, borderRadius: 8, border: `1px solid ${C.border}`, overflow: "hidden" }}>
          {[
            { id: "project", label: "📊 Project", color: C.blue },
            { id: "admin", label: "⚙️ Admin", color: C.purple },
          ].map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              style={{
                background: view === v.id ? v.color + "20" : "transparent",
                border: "none",
                borderBottom: view === v.id ? `2px solid ${v.color}` : "2px solid transparent",
                color: view === v.id ? v.color : C.textMuted,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: fonts.sans,
                whiteSpace: "nowrap",
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <div style={{ padding: "6px 20px 0", fontSize: 12, color: C.textMuted }}>
        {view === "project"
          ? "11 views across tech, business, and execution — updated Feb 19, 2026"
          : "Editable task tracker — QA sprint to Feb 23 deadline"
        }
      </div>

      {/* Content */}
      {view === "project" ? <ProjectView /> : <AdminView />}
    </div>
  );
}
