const http = require('http');

const server = http.createServer((req, res) => {
    // Check if the requested URL is exactly '/about'
    if (req.url === '/about') { // Check req.url for the specific route
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page\n'); // New route response: "About Page"
    } else {
        // Handle all other routes (like '/')
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n'); // Default response
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});