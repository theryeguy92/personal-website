import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const ProjectCard = ({ project }) => (
    <Box p={4} borderWidth="1px" borderRadius="lg" shadow="sm" bg="white">
        <Heading as="h3" size="md" color="brand.500">
            {project.name}
        </Heading>
        <Text mt={2}>{project.description}</Text>
        {project.link && (
            <Text mt={2} color="blue.500">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                </a>
            </Text>
        )}
    </Box>
);

export default ProjectCard;
