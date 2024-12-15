// theme.js
import { createSystem, defaultBaseConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: '#3182CE' }, // Custom brand color
        },
      },
    },
  },
});

const system = createSystem(defaultBaseConfig, customConfig);

export default system;
