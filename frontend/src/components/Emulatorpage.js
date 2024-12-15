import { Box, Heading } from '@chakra-ui/react';

const EmulatorPage = () => {
  return (
    <Box p={6} textAlign="center">
      <Heading mb={4}>NES Emulator</Heading>
      <iframe 
        src="http://emulator:8081" 
        width="800" 
        height="600" 
        style={{ border: 'none' }}
        title="NES Emulator"
      ></iframe>
    </Box>
  );
};

export default EmulatorPage;
