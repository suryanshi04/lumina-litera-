const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000; // Backend port

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch(err => console.error(err));

app.use(express.json());

// Sample route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
