const express = require('express');
const app = express();
const router = app.Router();


// Define a route for the root URL
router.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a response to the root URL
});

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
