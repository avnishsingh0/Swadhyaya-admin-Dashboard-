import { ThemeOptions, createTheme } from "@mui/material/styles";

// ... (other imports and interfaces)

// Define the types for your chart colors
interface ChartColors {
  main: string;
  yellow: string[];
  blue: string[];
  violet: string[];
  green: string[];
  red: string[];
}

// Extend the Palette interface in the '@mui/material/styles' module
declare module "@mui/material/styles" {
  interface Palette {
    chart: ChartColors;
  }
  interface PaletteOptions {
    chart?: Partial<ChartColors>;
  }
}

// Create your theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    // Other palette colors...

    // Ensure that chart object is defined and contains the blue property
    chart: {
      main: "#ffeb3b",
      yellow: ["#ffeb3b", "#fff59d"],
      blue: ["#2196f3", "#64b5f6"],
      violet: ["#9c27b0", "#ce93d8"],
      green: ["#4caf50", "#81c784"],
      red: ["#f44336", "#ef9a9a"],
    },
  },
  typography: {
    // Your typography settings
  },
});

export default theme;
