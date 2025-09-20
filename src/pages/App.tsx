import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "@/routes";
import { Toaster } from "sonner";
import NetworkStrip from "@/components/NetworkStrip";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default function App() {
  const netStatus = useNetworkStatus();

  console.log("netStatus", netStatus)
  return (
    <BrowserRouter>
      {netStatus !== "Connected" && <NetworkStrip type={netStatus} />}
      <AppRoutes />
      {/* <Toaster richColors position="top-right" /> */}
    </BrowserRouter>
  );
}
