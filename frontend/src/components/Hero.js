import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

const Hero = () => (
  <Box
    h="100vh"
    bg="brand.primary"
    color="white"
    display="flex"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
  >
    <VStack spacing={4}>
      <Heading fontSize="6xl">Hello! I'm Ryan Levey</Heading>
      <Text fontSize="xl">MSc Computer Science | Data Engineer | Data Scientist</Text>
      <Button colorScheme="blue" size="lg" onClick={() => window.scrollBy(0, 800)}>
        Explore My Work
      </Button>
    </VStack>
  </Box>
);

export default Hero;
