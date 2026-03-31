

// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import { Link } from "react-router-dom";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";

// const items = [
//   { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
//   { label: "Goals", path: "/goals", icon: <PeopleIcon /> },
//   { label: "Categories", path: "/categories", icon: <SettingsIcon /> },
//   { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
// ];

// export default function Sidebar({ collapsed = false }) {
//   return (
//     <Box
//       sx={{
//         width: collapsed ? 72 : 240,
//         minHeight: "calc(100vh - 64px)",
//         borderRight: "1px solid",
//         borderColor: "divider",
//         p: 2,
//         transition: "width 0.3s",
//       }}
//     >
//       <List>
//         {items.map((item) => (
//           <ListItemButton
//             key={item.label}
//             component={Link}
//             to={item.path}
//             sx={{
//               px: collapsed ? 1.5 : 2,
//             }}
//           >
//             <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
//               {item.icon}
//             </ListItemIcon>
//             {!collapsed && <ListItemText primary={item.label} sx={{ ml: 2 }} />}
//           </ListItemButton>
//         ))}
//       </List>
//       <Divider sx={{ my: 2 }} />
//     </Box>
//   );
// }


import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const items = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "Goals", path: "/goals", icon: <PeopleIcon /> },
  { label: "Categories", path: "/categories", icon: <SettingsIcon /> },
  { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

export default function Sidebar({ collapsed = false }) {
  return (
    <Box
      sx={{
        width: collapsed ? 72 : 240,
        minHeight: "calc(100vh - 64px)",
        borderRight: "1px solid",
        borderColor: "divider",
        p: 2,
        transition: "width 0.3s",
      }}
    >
      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              px: collapsed ? 1.5 : 2,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.label} sx={{ ml: 2 }} />}
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
}