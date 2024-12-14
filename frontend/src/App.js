import React, { useEffect, useState } from 'react';

function App() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/projects';

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                return response.json();
            })
            .then((data) => setProjects(data.data || [])) // Handle empty data gracefully
            .catch((error) => setError(error.message));
    }, [API_URL]);

    return (
        <div>
            <h1>Projects</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
