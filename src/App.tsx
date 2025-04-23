import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";

import Deliveries from "./pages/deliveries/Deliveries";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const [selectedView, setSelectedView] = useState<"dashboard" | "deliveries">(
    "dashboard"
  );

  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar selectedView={selectedView} onSelect={setSelectedView} />
      <Box flexGrow={1} bgcolor="#F2F2F2" p={2}>
        <Box
          bgcolor="white"
          p={4}
          pt={0}
          sx={{
            borderRadius: 2,
            boxShadow: 1,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {selectedView === "dashboard" ? <Dashboard /> : <Deliveries />}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
