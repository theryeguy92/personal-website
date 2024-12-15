import { Box, SimpleGrid, Heading, Image, Text, Link } from "@chakra-ui/react";

// Default fallback if no projects are provided
const fallbackProjects = [
  { title: "Project 1", image: "./assets/nes_emulator_image.png", link: "http://emulator:8081" },
  { title: "Project 2", image: "./assets/waffle_house_project.png", link: "#" },
  { title: "Project 3", image: "https://via.placeholder.com/300", link: "#" },
];

const Projects = ({ projects = [] }) => {
  const displayedProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <Box py={10} px={6}>
      <Heading mb={6} textAlign="center" color="brand.primary">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {displayedProjects.map((project, index) => (
          <Link
            href={project.link || "#"}
            isExternal
            key={index}
          >
            <Box
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Image
                src={project.image || "https://via.placeholder.com/300"}
                alt={project.title || "Project"}
              />
              <Text
                p={4}
                fontWeight="bold"
                textAlign="center"
                color="brand.primary"
              >
                {project.title || "Untitled Project"}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
