import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

interface SidebarProps {
  selectedView: "dashboard" | "deliveries";
  onSelect: (view: "dashboard" | "deliveries") => void;
}

const Sidebar = ({ selectedView, onSelect }: SidebarProps) => {
  return (
    <Box
      width="220px"
      bgcolor="#2C80FF"
      color="white"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h4" fontWeight="bold" p={4} pb={2}>
        Logo
      </Typography>

      <List style={{ cursor: "pointer", padding: "15px" }}>
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
          }}
        >
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{
              color: "white",
              fontWeight: "bold",
            }}
          />
        </ListItem>

        <ListItem
          component="div"
          onClick={() => onSelect("deliveries")}
          sx={{
            backgroundColor:
              selectedView === "deliveries" ? "#1e90ff" : "transparent",
            borderRadius: 2,
            "&:hover": {
              backgroundColor:
                selectedView === "deliveries" ? "#1e90ff" : "#1e90ff88",
            },
          }}
        >
          <ListItemText
            primary="Deliveries"
            primaryTypographyProps={{
              color: "white",
              fontWeight: selectedView === "deliveries" ? "bold" : "normal",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
