import { useCallback, useEffect, useState } from "react";
import API from "../api/axios";

/** Fetch list from API; refetch when user returns to tab (admin save → switch tab). */
export function useApiList(endpoint) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const { data } = await API.get(endpoint, {
        params: { _t: Date.now() },
        headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
      });
      setItems(Array.isArray(data) ? data : []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    load();

    const onVisible = () => {
      if (document.visibilityState === "visible") load();
    };

    window.addEventListener("focus", load);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("focus", load);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [load]);

  return { items, loading, reload: load };
}
