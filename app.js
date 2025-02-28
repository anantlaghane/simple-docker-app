const express = require('express'); // Import Express
const app = express(); // Create an Express app

const PORT = 8000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Dockerized Node.js app!');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
