import express from 'express';

const app = express();
const port = 5000;

// Define a simple Hello World API
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/hello', (req, res) => {
  res.send('Hello World! from hello');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});