// src/components/provider.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

export function Provider({ children }) {
  console.log("Using theme:", theme);
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
