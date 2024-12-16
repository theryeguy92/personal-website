import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Heading, Text, Spinner, Alert, Button } from "@chakra-ui/react";

const ProjectDetails = () => {
  const { id } = useParams(); // Extract project ID from URL
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects`) // Fetch all projects
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.data.find((proj) => proj.id === parseInt(id));
        setProject(selectedProject);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" p={4}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error || !project) {
    return (
      <Alert status="error" justifyContent="center">
        {error || "Project not found"}
      </Alert>
    );
  }

  return (
    <Box p={4}>
      <Link to="/">
        <Button mb={4} colorScheme="teal">
          Back to Projects
        </Button>
      </Link>
      <Heading as="h2" size="xl" mb={4}>
        {project.name}
      </Heading>
      <Text fontSize="lg" mb={2}>
        {project.description}
      </Text>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Button colorScheme="teal">Visit Project</Button>
      </a>
    </Box>
  );
};

export default ProjectDetails;
