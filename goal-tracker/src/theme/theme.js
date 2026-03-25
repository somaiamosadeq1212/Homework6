import { createTheme } from "@mui/material/styles";

export const getTheme = (direction) =>
  createTheme({
    direction: direction,
    palette: {
      primary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });