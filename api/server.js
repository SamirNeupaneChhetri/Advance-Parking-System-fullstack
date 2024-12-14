const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/AuthRoute.js'); // Ensure the path is correct
require('dotenv').config();

// Log the version of bcryptjs for debugging purposes
console.log('bcryptjs version:', require('bcryptjs').version);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON requests
app.use(cors()); // Middleware for enabling CORS

// Routes
app.use('/api', authRoutes);

// Global error handler (Optional, but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
