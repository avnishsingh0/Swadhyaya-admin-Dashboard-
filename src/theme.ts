import {  createTheme } from "@mui/material/styles";
interface ChartColors {
  main: string;
  yellow: string[];
  blue: string[];
  violet: string[];
  green: string[];
  red: string[];
}

declare module "@mui/material/styles" {
  interface Palette {
    chart: ChartColors;
  }
  interface PaletteOptions {
    chart?: Partial<ChartColors>;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },

    chart: {
      main: "#ffeb3b",
      yellow: ["#ffeb3b", "#fff59d"],
      blue: ["#2196f3", "#64b5f6"],
      violet: ["#9c27b0", "#ce93d8"],
      green: ["#4caf50", "#81c784"],
      red: ["#f44336", "#ef9a9a"],
    },
  },
  
});

