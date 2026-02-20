import { C, fonts } from "../../styles/tokens";
import usePersistedState from "../../hooks/usePersistedState";
import { ADMIN_INITIAL } from "../../data/admin";
import SectionBlock from "./SectionBlock";

export default function AdminView() {
  const [data, save, loaded] = usePersistedState();

  const toggleSection = (sectionId) =>
    save({ ...data, sections: data.sections.map(s => s.id === sectionId ? { ...s, open: !s.open } : s) });

  const updateTask = (sectionId, taskId, updates) =>
    save({ ...data, sections: data.sections.map(s => s.id === sectionId ? { ...s, tasks: s.tasks.map(t => t.id === taskId ? { ...t, ...updates } : t) } : s) });

  const addTask = (sectionId, name) =>
    save({ ...data, sections: data.sections.map(s => s.id === sectionId ? { ...s, tasks: [...s.tasks, { id: `t${Date.now()}`, name, status: "todo", owner: "", note: "", priority: "normal" }] } : s) });

  const deleteTask = (sectionId, taskId) =>
    save({ ...data, sections: data.sections.map(s => s.id === sectionId ? { ...s, tasks: s.tasks.filter(t => t.id !== taskId) } : s) });

  const resetData = () => {
    if (confirm("Reset all tasks to defaults? This cannot be undone.")) save(ADMIN_INITIAL);
  };

  const allTasks = data.sections.flatMap(s => s.tasks);
  const doneTotal = allTasks.filter(t => t.status === "done").length;
  const activeTotal = allTasks.filter(t => t.status === "active").length;
  const blockedTotal = allTasks.filter(t => t.status === "blocked").length;
  const totalTasks = allTasks.length;
  const deadline = new Date("2026-02-23");
  const now = new Date();
  const daysLeft = Math.max(0, Math.ceil((deadline - now) / (1000 * 60 * 60 * 24)));

  if (!loaded) {
    return (
      <div style={{ background: C.bg, minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: C.textDim, fontFamily: fonts.mono, fontSize: 13 }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "12px 12px 40px" }}>
      {/* Stats row */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        {[
          { value: `${daysLeft}d`, label: "TO DEADLINE", color: daysLeft <= 5 ? C.red : daysLeft <= 10 ? C.amber : C.blue },
          { value: `${doneTotal}/${totalTasks}`, label: "DONE", color: C.green },
          { value: String(activeTotal), label: "ACTIVE", color: C.amber },
          { value: String(blockedTotal), label: "BLOCKED", color: blockedTotal > 0 ? C.red : C.textDim },
          { value: `${Math.round((doneTotal / totalTasks) * 100)}%`, label: "COMPLETE", color: C.blue },
        ].map((s, i) => (
          <div key={i} style={{ flex: "1 1 70px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color, fontFamily: fonts.mono }}>{s.value}</div>
            <div style={{ fontSize: 9, color: C.textDim, marginTop: 1, fontFamily: fonts.mono, letterSpacing: "0.05em" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 12px", marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontSize: 10, color: C.textDim, fontFamily: fonts.mono }}>OVERALL PROGRESS</span>
          <span style={{ fontSize: 10, color: C.green, fontFamily: fonts.mono }}>{doneTotal} of {totalTasks} tasks</span>
        </div>
        <div style={{ width: "100%", height: 6, background: C.border, borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: `${(doneTotal / totalTasks) * 100}%`, height: "100%", background: `linear-gradient(90deg, ${C.green}, ${C.cyan})`, borderRadius: 3, transition: "width 0.3s" }} />
        </div>
      </div>

      {/* Sections */}
      {data.sections.map((section) => (
        <SectionBlock
          key={section.id}
          section={section}
          onToggle={() => toggleSection(section.id)}
          onTaskUpdate={(taskId, updates) => updateTask(section.id, taskId, updates)}
          onAddTask={(name) => addTask(section.id, name)}
          onDeleteTask={(taskId) => deleteTask(section.id, taskId)}
        />
      ))}

      {/* Legend + Reset */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 4px", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 10, fontSize: 10, color: C.textDim }}>
          <span style={{ fontFamily: fonts.mono }}>Click status icon to cycle</span><span>·</span>
          <span style={{ fontFamily: fonts.mono }}>Click task/note to edit</span><span>·</span>
          <span style={{ fontFamily: fonts.mono }}>Data persists across sessions</span>
        </div>
        <button onClick={resetData} title="Reset to defaults" style={{ fontSize: 10, color: C.textDim, background: "none", border: `1px solid ${C.border}`, borderRadius: 4, padding: "3px 8px", cursor: "pointer", fontFamily: fonts.mono }}>
          ↺ Reset
        </button>
      </div>
    </div>
  );
}
