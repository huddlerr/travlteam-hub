import { useState, useEffect, useCallback } from "react";
import { ADMIN_INITIAL, STORAGE_KEY } from "../data/admin";

/**
 * Hook that persists admin task data to localStorage.
 * Returns [data, save, loaded] — loaded is false until hydration completes.
 */
export default function usePersistedState() {
  const [data, setData] = useState(ADMIN_INITIAL);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.sections) setData(parsed);
      }
    } catch { /* use initial */ }
    setLoaded(true);
  }, []);

  const save = useCallback((newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error("Save failed:", e);
    }
  }, []);

  return [data, save, loaded];
}
