import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";
import "./sidebar.css";

interface SidebarProps {
  selectedView: "dashboard" | "deliveries";
  onSelect: (view: "dashboard" | "deliveries") => void;
}

const Sidebar = ({ selectedView, onSelect }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Box
      width={collapsed ? "80px" : "300px"}
      bgcolor="#2C80FF"
      color="white"
      display="flex"
      flexDirection="column"
      sx={{ transition: "width 0.3s ease" }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent={collapsed ? "center" : "space-between"}
        alignItems="center"
        p={4}
        pb={2}
      >
        {!collapsed && (
          <Typography variant="h5" fontWeight="bold">
            Logo
          </Typography>
        )}
        <IconButton sx={{ color: "white" }} onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <List className="sidebarItem">
        <ListItem
          component="div"
          onClick={() => onSelect("dashboard")}
          sx={{
            backgroundColor:
              selectedView === "dashboard" ? "#1e90ff" : "transparent",
            borderRadius: 2,
            mb: 1,
            "&:hover": {
              backgroundColor:
                selectedView === "dashboard" ? "#1e90ff" : "#1e90ff88",
            },
            cursor: "pointer",
          }}
        >
          <ListItemIcon
            sx={{ color: "white", minWidth: "unset", mr: collapsed ? 0 : 2 }}
          >
            <DashboardIcon />
          </ListItemIcon>
          {!collapsed && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem
          component="div"
          onClick={() => onSelect("deliveries")}
          sx={{
            backgroundColor:
              selectedView === "deliveries" ? "#1e90ff" : "transparent",
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              backgroundColor:
                selectedView === "deliveries" ? "#1e90ff" : "#1e90ff88",
            },
          }}
        >
          <ListItemIcon
            sx={{ color: "white", minWidth: "unset", mr: collapsed ? 0 : 2 }}
          >
            <LocalShippingIcon />
          </ListItemIcon>
          {!collapsed && <ListItemText primary="Deliveries" />}
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
