import React, { useEffect, useState } from "react";
import { Box, VStack, Spinner, Alert } from "@chakra-ui/react";
import { Provider } from "./components/provider";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api/projects";

  // Fetch project data from the API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.data || []); // Use API response data
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <Provider>
      <Box p={4}>
        <VStack spacing={8} align="stretch">
          {/* Hero Section */}
          <Hero />

          {/* Loading State */}
          {loading && (
            <Box textAlign="center">
              <Spinner size="xl" />
            </Box>
          )}

          {/* Error State */}
          {error && (
            <Alert status="error" justifyContent="center">
              {error}
            </Alert>
          )}

          {/* Projects Section */}
          {!loading && !error && <Projects projects={projects} />}

          {/* Footer */}
          <Footer />
        </VStack>
      </Box>
    </Provider>
  );
}

export default App;
