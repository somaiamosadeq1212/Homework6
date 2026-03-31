

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
// import Tooltip from "@mui/material/Tooltip";
// import { useTheme, useMediaQuery } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

// export default function Navbar({ onMenuClick, onCollapse, mode, onToggleMode, collapsed }) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // xs و sm
//   const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm")); // sm و بالاتر

//   return (
//     <AppBar position="fixed" elevation={24}>
//       <Toolbar sx={{ gap: 1 }}>
//         {/* موبایل: Menu */}
//         {isMobile && (
//           <IconButton color="inherit" edge="start" onClick={onMenuClick}>
//             <MenuIcon />
//           </IconButton>
//         )}

//         {/* تبلت و دسکتاپ: Collapse */}
//         {isTabletOrDesktop && (
//           <IconButton color="inherit" edge="start" onClick={onCollapse}>
//             {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         )}

//         <Box sx={{ flexGrow: 1, minWidth: 0 }}>
//           <Typography
//             variant="h6"
//             component="div"
//             noWrap
//             sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
//           >
//             Admin Dashboard
//           </Typography>
//         </Box>

//         {/* Dark/Light Mode */}
//         <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
//           <IconButton color="inherit" onClick={onToggleMode}>
//             {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//           </IconButton>
//         </Tooltip>

//         <IconButton color="inherit">
//           <NotificationsIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// }



import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useTheme, useMediaQuery } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar({ onMenuClick, onCollapse, mode, onToggleMode, collapsed }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="fixed" elevation={24}>
      <Toolbar sx={{ gap: 1 }}>
        {/* موبایل: Menu */}
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}

        {/* تبلت و دسکتاپ: Collapse */}
        {isTabletOrDesktop && (
          <IconButton color="inherit" edge="start" onClick={onCollapse}>
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Admin Dashboard
          </Typography>
        </Box>

        {/* Dark/Light Mode */}
        <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
          <IconButton color="inherit" onClick={onToggleMode}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}