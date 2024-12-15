// provider.js
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme'; // Correct path to theme.js

export function Provider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
