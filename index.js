import express from 'express';

const app = express();
const port = 3000;

// Define a simple Hello World API
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});