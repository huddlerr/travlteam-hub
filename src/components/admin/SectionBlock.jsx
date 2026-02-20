import { useState } from "react";
import { C, fonts } from "../../styles/tokens";
import { STATUS_CYCLE } from "../../data/admin";
import TaskRow from "./TaskRow";

export default function SectionBlock({ section, onToggle, onTaskUpdate, onAddTask, onDeleteTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [adding, setAdding] = useState(false);

  const doneCount = section.tasks.filter(t => t.status === "done").length;
  const total = section.tasks.length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const sectionColor = section.tasks.every(t => t.status === "done") ? C.green : section.tasks.some(t => t.status === "active") ? C.amber : section.color;

  const addTask = () => {
    if (!newTaskName.trim()) return;
    onAddTask(newTaskName.trim());
    setNewTaskName("");
    setAdding(false);
  };

  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", cursor: "pointer", borderBottom: section.open ? `1px solid ${C.border}` : "none", background: sectionColor + "06" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 3, height: 16, background: sectionColor, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: C.white, letterSpacing: "0.02em" }}>{section.title}</span>
          <span style={{ fontSize: 10, color: C.textDim, fontFamily: fonts.mono }}>{doneCount}/{total}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 40, height: 4, background: C.border, borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: `${pct}%`, height: "100%", background: sectionColor, borderRadius: 2, transition: "width 0.3s" }} />
          </div>
          <span style={{ fontSize: 10, color: C.textDim, fontFamily: fonts.mono }}>{pct}%</span>
          <span style={{ fontSize: 12, color: C.textDim, transition: "transform 0.15s", transform: section.open ? "rotate(0)" : "rotate(-90deg)" }}>▼</span>
        </div>
      </div>
      {section.open && (
        <div style={{ padding: "4px 14px 8px" }}>
          {section.tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onCycleStatus={() => {
                const idx = STATUS_CYCLE.indexOf(task.status);
                onTaskUpdate(task.id, { status: STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length] });
              }}
              onUpdateNote={(note) => onTaskUpdate(task.id, { note })}
              onUpdateName={(name) => onTaskUpdate(task.id, { name })}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))}
          {adding ? (
            <div style={{ display: "flex", gap: 6, padding: "8px 0 2px", alignItems: "center" }}>
              <input autoFocus value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addTask(); if (e.key === "Escape") { setAdding(false); setNewTaskName(""); } }}
                placeholder="Task name..."
                style={{ flex: 1, fontSize: 12, color: C.text, background: C.surfaceAlt, border: `1px solid ${C.blue}40`, borderRadius: 5, padding: "5px 8px", fontFamily: fonts.sans, outline: "none" }}
              />
              <button onClick={addTask} style={{ fontSize: 11, color: C.blue, background: C.blue + "15", border: `1px solid ${C.blue}30`, borderRadius: 5, padding: "4px 10px", cursor: "pointer", fontWeight: 600 }}>Add</button>
              <button onClick={() => { setAdding(false); setNewTaskName(""); }} style={{ fontSize: 11, color: C.textDim, background: "none", border: "none", cursor: "pointer", padding: "4px 6px" }}>✕</button>
            </div>
          ) : (
            <button onClick={() => setAdding(true)} style={{ fontSize: 11, color: C.textDim, background: "none", border: "none", cursor: "pointer", padding: "8px 0 2px", fontFamily: fonts.sans, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 14, lineHeight: 1 }}>+</span> Add task
            </button>
          )}
        </div>
      )}
    </div>
  );
}
