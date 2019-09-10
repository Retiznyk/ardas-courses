import { useState, useEffect } from "react";

export default function useTicker(deps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick(tick + 1), 1000);
    return () => clearInterval(timer);
  }, [deps, tick]);

  return {
    tick
  };
}
