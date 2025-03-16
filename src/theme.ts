import { createTheme } from "@mui/material";

// Extend the theme to include custom colors
declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom?: {
      primary?: string;
      secondary?: string;
      background?: string;
      yellow?: string;
      grey?: string;
      lightRed?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4b2862",
    },
    secondary: {
      main: "#E5D753",
    },
    custom: {
      background: "#fffcff", // Background color for surfaces
      yellow: "#E5D753", // Custom yellow color
      grey: "#6F8695", // Custom grey color
      lightRed: "#F87575", // Custom light red color
    },
  },
});
