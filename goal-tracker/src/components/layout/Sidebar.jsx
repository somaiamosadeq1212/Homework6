import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const items = [
    { label: "Dashboard", path: "/" },
    { label: "Goals", path: "/goals" },
    { label: "Categories", path: "/categories" },
    { label: "Settings", path: "/settings" },
  ];

export default function Sidebar() {

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "calc(100vh - 64px)", // subtract navbar height
        borderRight: "1px solid",
        borderColor: "divider",
        p: 2,
      }}
    >

      <List>
        {items.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />
    </Box>
  );
}
