import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, VStack, Spinner, Alert } from "@chakra-ui/react";
import { Provider } from "./components/provider";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import EmulatorPage from "./components/Emulatorpage"; // Import EmulatorPage

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api/projects";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
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
      <Router>
        <Box p={4}>
          <VStack spacing={8} align="stretch">
            <Hero />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {loading && (
                      <Box textAlign="center">
                        <Spinner size="xl" />
                      </Box>
                    )}
                    {error && (
                      <Alert status="error" justifyContent="center">
                        {error}
                      </Alert>
                    )}
                    {!loading && !error && <Projects projects={projects} />}
                  </>
                }
              />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/emulator" element={<EmulatorPage />} /> {/* Add Emulator Route */}
            </Routes>

            <Footer />
          </VStack>
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
