import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SummaryCards from "./SummaryCards";
import { Box, Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import getTheme from "../../theme/theme";

// const drawerWidth = 240;

export default function Layout() {

     const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleMenuClick = () => {
    alert("Menu clicked (later we can make this open a drawer)");
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar
          onMenuClick={handleMenuClick}
          mode={mode}
          onToggleMode={toggleMode}
        />

        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Box sx={{ flex: 1, py: 3 }}>
            <Container maxWidth="lg">
              <Typography variant="h5" sx={{ mb: 2 }}>
                Overview
              </Typography>

              <SummaryCards />
              {/* <UsersTable /> */}
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>

  );
}