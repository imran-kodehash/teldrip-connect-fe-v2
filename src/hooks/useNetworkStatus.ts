import { useEffect, useState } from "react";
import type { NetworkStripType } from "@/components/NetworkStrip";

const SLOW_THRESHOLD_MBPS = 0.8;

export function useNetworkStatus(): NetworkStripType {
  const [status, setStatus] = useState<NetworkStripType>("Connected");

  useEffect(() => {
    function updateOnlineStatus() {
      if (!navigator.onLine) {
        setStatus("Offline");
        return;
      }

      // If Network Information API is supported
      const nav: any = navigator;
      if (
        nav.connection?.downlink &&
        nav.connection.downlink < SLOW_THRESHOLD_MBPS
      ) {
        setStatus("Slow");
      } else {
        setStatus("Connected");
      }
    }

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    updateOnlineStatus();

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return status;
}
