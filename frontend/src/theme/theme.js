import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Default to dark mode
    useSystemColorMode: false, // Disable system preference for color mode
  },
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        bg: "gray.100", // Default light theme background
        color: "gray.800",
      },
    },
  },
  colors: {
    brand: {
      primary: "#2D3748", // Dark gray
      secondary: "#3182CE", // Blue accent
      background: "#EDF2F7", // Light gray background
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
});

export default theme;
