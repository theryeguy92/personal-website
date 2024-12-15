import { Box, SimpleGrid, Heading, Image, Text, Link } from "@chakra-ui/react";

const projects = [
  { title: "Project 1", image: "https://via.placeholder.com/300", link: "#" },
  { title: "Project 2", image: "https://via.placeholder.com/300", link: "#" },
  { title: "Project 3", image: "https://via.placeholder.com/300", link: "#" },
];

const Projects = () => (
  <Box py={10} px={6}>
    <Heading mb={6} textAlign="center" color="brand.primary">
      Projects
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {projects.map((project, index) => (
        <Link href={project.link} isExternal key={index}>
          <Box
            boxShadow="lg"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image src={project.image} alt={project.title} />
            <Text p={4} fontWeight="bold" textAlign="center" color="brand.primary">
              {project.title}
            </Text>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  </Box>
);

export default Projects;
