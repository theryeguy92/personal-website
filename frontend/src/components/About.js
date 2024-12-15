import { Box, VStack, Text, Avatar, Heading } from "@chakra-ui/react";

const About = () => (
  <Box py={10} textAlign="center">
    <VStack spacing={4}>
      <Avatar size="2xl" src="https://via.placeholder.com/150" />
      <Heading>About Me</Heading>
      <Text maxW="600px">
        SMOLL PENIS FOR THE WIN!
      </Text>
    </VStack>
  </Box>
);

export default About;
