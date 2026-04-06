
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
// // import { useState } from "react";
// // import TextField from "@mui/material/TextField";
// import { useSearch } from "../context/SearchContext";


// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";

// const items = [
//   { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
//   { label: "Goals", path: "/goals", icon: <PeopleIcon /> },
//   { label: "Categories", path: "/categories", icon: <SettingsIcon /> },
//   { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
// ];

// export default function Sidebar({ collapsed = false, goals = [] }) {
//   const [search, setSearch] = useState("");

//   const { search, setSearch } = useSearch();

//   const filteredGoals = goals.filter((goal) =>
//     goal.name.toLowerCase().includes(search.toLowerCase()) ||
//     goal.category.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box sx={{ width: collapsed ? 72 : 240, p: 2 }}>
      
//       {!collapsed && (
//         <TextField
//   fullWidth
//   size="small"
//   placeholder="Search goals..."
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
//   sx={{ mb: 2 }}
  
// />
//       )}

//       <List>
//         {items.map((item) => (
//           <ListItemButton key={item.label} component={Link} to={item.path}>
//             <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
//               {item.icon}
//             </ListItemIcon>
//             {!collapsed && <ListItemText primary={item.label} sx={{ ml: 2 }} />}
//           </ListItemButton>
//         ))}
//       </List>

//       <Divider sx={{ my: 2 }} />

//       {!collapsed && search && (
//         <List>
//           {filteredGoals.map((goal) => (
//             <ListItemButton key={goal.id}>
//               <ListItemText primary={goal.name} secondary={goal.category} />
//             </ListItemButton>
//           ))}
//         </List>
//       )}
//     </Box>
//   );
// }


import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext.jsx";

const items = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "Goals", path: "/goals", icon: <PeopleIcon /> },
  { label: "Categories", path: "/categories", icon: <SettingsIcon /> },
  { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

export default function Sidebar({ collapsed = false, goals = [] }) {
  // گرفتن state سرچ از Context
  const { search, setSearch } = useSearch();

  // امن سازی فیلتر کردن برای goal های ناقص
  const filteredGoals = (goals || []).filter((goal) =>
  (goal?.title || "").toLowerCase().includes(search.toLowerCase()) ||
  (goal?.type || "").toLowerCase().includes(search.toLowerCase())
);

  return (
    <Box
      sx={{
        width: collapsed ? 72 : 240,
        minHeight: "100vh",
        p: 2,
        borderRight: "1px solid",
        borderColor: "divider",
        transition: "width 0.3s",
      }}
    >
      {/* Search Box */}
      {!collapsed && (
        <TextField
          fullWidth
          size="small"
          placeholder="Search goals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}

      {/* Main Menu */}
      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.path}
            sx={{ px: collapsed ? 1.5 : 2 }}
          >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.label} sx={{ ml: 2 }} />}
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Filtered Goals */}
      {!collapsed && search && filteredGoals.length > 0 && (
        <List>
          {filteredGoals.map((goal) => (
            <ListItemButton key={goal.id}>
              <ListItemText
                primary={goal?.title || "Unnamed Goal"}
                secondary={goal?.type || "No Category"}
              />
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
}
