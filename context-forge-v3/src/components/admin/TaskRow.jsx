import { useState } from "react";
import { C, fonts } from "../../styles/tokens";
import { Badge } from "../ui";
import { STATUS_MAP, STATUS_CYCLE } from "../../data/admin";

export default function TaskRow({ task, onCycleStatus, onUpdateNote, onUpdateName, onDelete }) {
  const [editing, setEditing] = useState(null);
  const [editVal, setEditVal] = useState("");
  const s = STATUS_MAP[task.status] || STATUS_MAP.todo;
  const priColors = { urgent: C.red, high: C.orange, normal: C.blue, low: C.textDim };

  const startEdit = (field) => { setEditing(field); setEditVal(field === "note" ? task.note : task.name); };
  const commitEdit = () => {
    if (editing === "note") onUpdateNote(editVal);
    else if (editing === "name") onUpdateName(editVal);
    setEditing(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0", borderBottom: `1px solid ${C.border}40` }}>
      <button
        onClick={onCycleStatus}
        title={`Click to cycle (${STATUS_CYCLE.join(" → ")})`}
        style={{ color: s.color, fontSize: 13, marginTop: 1, fontFamily: fonts.mono, minWidth: 16, textAlign: "center", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 1 }}
      >
        {s.icon}
      </button>
      <div style={{ flex: 1, minWidth: 0 }}>
        {editing === "name" ? (
          <input autoFocus value={editVal} onChange={(e) => setEditVal(e.target.value)} onBlur={commitEdit}
            onKeyDown={(e) => { if (e.key === "Enter") commitEdit(); if (e.key === "Escape") setEditing(null); }}
            style={{ fontSize: 13, color: C.text, background: C.surfaceAlt, border: `1px solid ${C.blue}50`, borderRadius: 4, padding: "2px 6px", width: "100%", fontFamily: fonts.sans, outline: "none" }}
          />
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span onClick={() => startEdit("name")} style={{ fontSize: 13, color: task.status === "done" ? C.textDim : C.text, fontWeight: 500, textDecoration: task.status === "done" ? "line-through" : "none", cursor: "pointer" }} title="Click to edit">{task.name}</span>
            {task.priority && task.priority !== "normal" && <span style={{ width: 6, height: 6, borderRadius: 3, background: priColors[task.priority] || C.textDim, flexShrink: 0 }} title={task.priority} />}
            {task.owner && <span style={{ fontSize: 10, color: C.textDim, fontFamily: fonts.mono }}>{task.owner}</span>}
          </div>
        )}
        {editing === "note" ? (
          <input autoFocus value={editVal} onChange={(e) => setEditVal(e.target.value)} onBlur={commitEdit}
            onKeyDown={(e) => { if (e.key === "Enter") commitEdit(); if (e.key === "Escape") setEditing(null); }}
            placeholder="Add a note..."
            style={{ fontSize: 11, color: C.textMid, background: C.surfaceAlt, border: `1px solid ${C.blue}50`, borderRadius: 4, padding: "2px 6px", width: "100%", fontFamily: fonts.sans, outline: "none", marginTop: 3 }}
          />
        ) : (
          <div onClick={() => startEdit("note")} style={{ fontSize: 11, color: task.note ? C.textDim : C.border, marginTop: 2, lineHeight: 1.4, cursor: "pointer", minHeight: 14 }} title="Click to edit note">
            {task.note || "+ add note"}
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        <Badge label={s.label} color={s.color} />
        <button onClick={onDelete} title="Delete task" style={{ background: "none", border: "none", color: C.textDim, fontSize: 11, cursor: "pointer", padding: "0 2px", opacity: 0.4 }}>×</button>
      </div>
    </div>
  );
}
