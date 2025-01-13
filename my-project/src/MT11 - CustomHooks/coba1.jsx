import { useEffect, useState } from "react";

export default function useOnlineStatus(key) {
  const [state, setState] = useState(key);

  useEffect(() => {
    function handleOnline() {
      setState(true);
    }
    function handleOffline() {
      setState(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return state;
}
