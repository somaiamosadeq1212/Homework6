

// import { useState, useMemo } from "react";
// import {
//   Box,
//   CssBaseline,
//   ThemeProvider,
//   Container,
//   Drawer,
//   Toolbar,
//   useMediaQuery,
// } from "@mui/material";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import getTheme from "../../theme/theme";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   const [mode, setMode] = useState("light");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const theme = useMemo(() => getTheme(mode), [mode]);
//   const navbarHeight = 64;

//   const toggleMode = () =>
//     setMode((prev) => (prev === "light" ? "dark" : "light"));
//   const handleMobileToggle = () => setMobileOpen((prev) => !prev);
//   const handleCollapseToggle = () => setCollapsed((prev) => !prev);

//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

//   // عرض Drawer بر اساس collapsed و موبایل
//   const drawerWidth = isMobile ? 240 : collapsed ? 72 : 240;

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <Navbar
//         onMenuClick={handleMobileToggle}
//         onCollapse={handleCollapseToggle}
//         mode={mode}
//         onToggleMode={toggleMode}
//         collapsed={collapsed}
//       />

//       <Box sx={{ display: "flex" }}>
//         {/* Sidebar */}
//         <Drawer
//           variant={isMobile ? "temporary" : "permanent"}
//           open={isMobile ? mobileOpen : true}
//           onClose={handleMobileToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               top: `${navbarHeight}px`,
//               height: `calc(100vh - ${navbarHeight}px)`,
//               overflowY: "auto",
//               overflowX: "hidden",
//               transition: "width 0.3s",
//             },
//           }}
//         >
//           <Sidebar collapsed={!isMobile && collapsed} />
//         </Drawer>

//         {/* Main Content */}
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             transition: "margin 0.3s",
//             ml: isMobile ? 0 : `${drawerWidth}px`,
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg">
//             <Outlet />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

import { useState, useMemo } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Container,
  Drawer,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import getTheme from "../../theme/theme";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const theme = useMemo(() => getTheme(mode), [mode]);
  const navbarHeight = 64;

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const handleMobileToggle = () => setMobileOpen((prev) => !prev);
  const handleCollapseToggle = () => setCollapsed((prev) => !prev);

  // Breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  // عرض سایدبار بر اساس حالت و اندازه صفحه
  const drawerWidth = isMobile ? 240 : collapsed ? 72 : 240;

  // margin-left محتوا بر اساس breakpoint و collapsed
  // const contentMarginLeft = isMobile
  //   ? 0
  //   : isTablet
  //   ? collapsed
  //     ? 72
  //     : 200 // فاصله مناسب تبلت
  //   : collapsed
  //   ? 72
  //   : 240; // دسکتاپ

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Navbar */}
      <Navbar
        onMenuClick={handleMobileToggle} // موبایل
        onCollapse={handleCollapseToggle} // تبلت و دسکتاپ
        mode={mode}
        onToggleMode={toggleMode}
      />

      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleMobileToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              top: `${navbarHeight}px`,
              height: `calc(100vh - ${navbarHeight}px)`,
              overflowY: "auto",
              overflowX: "hidden",
              transition: "width 0.3s",
            },
          }}
        >
          <Sidebar collapsed={!isMobile && collapsed} />
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin 0.3s",
            ml: 0,
          }}
        >
          <Toolbar />
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}