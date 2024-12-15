// App.js
import React, { useEffect, useState } from 'react';
//import theme from './theme/theme'; // Adjusted path to match the file structure
import { Box, Heading, VStack, Spinner, Alert } from '@chakra-ui/react';
import { Provider } from './components/provider';
import ProjectCard from './components/ProjectCard'; // Import the ProjectCard component

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/projects';

  // Fetch project data from the API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <Provider>
      <Box bg="gray.50" minH="100vh" p={8}>
        <VStack spacing={6}>
          <Heading as="h1" size="xl" color="brand.500">
            My Projects
          </Heading>
          {/* Show loading spinner */}
          {loading && <Spinner size="xl" color="brand.500" />}

          {/* Show error alert */}
          {error && (
            <Alert status="error" bg="red.50" color="red.700" borderRadius="md" p={4}>
              {error}
            </Alert>
          )}

          {/* Show project cards */}
          {!loading && !error && (
            <VStack spacing={4} align="stretch" w="100%" maxW="600px">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </VStack>
          )}
        </VStack>
      </Box>
    </Provider>
  );
}

export default App;
