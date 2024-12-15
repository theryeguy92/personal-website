import { Box, Heading, SimpleGrid, Tag } from "@chakra-ui/react";

const skills = ["Python", "SQL", "Java","Kafka","AWS", "Tableau"];

const Skills = () => (
  <Box py={10} px={6} bg="brand.background">
    <Heading mb={6} textAlign="center" color="brand.primary">
      Skills
    </Heading>
    <SimpleGrid columns={[2, 3, 4]} spacing={4} justifyItems="center">
      {skills.map((skill, index) => (
        <Tag size="lg" colorScheme="blue" key={index}>
          {skill}
        </Tag>
      ))}
    </SimpleGrid>
  </Box>
);

export default Skills;
