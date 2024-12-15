import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const Hero = () => (
  <Box
    height="100vh"
    bgGradient="linear(to-r, teal.400, blue.500)"
    color="white"
    display="flex"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
  >
    <VStack spacing={6}>
      <Heading fontSize="5xl">Hi, I'm [Your Name]</Heading>
      <Text fontSize="lg">A Creative Frontend Developer</Text>
      <VStack spacing={4} direction="row">
        <Button size="lg" colorScheme="teal">Contact Me</Button>
        <Button size="lg" colorScheme="blue" variant="outline">
          View Portfolio
        </Button>
      </VStack>
    </VStack>
  </Box>
);

export default Hero;
