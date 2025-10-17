const express = require('express');
const cors = require('cors');
const fareRoutes = require('./routes/fareRoutes');

const app = express();

// CORS config
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Log every request for debugging
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

// Mount routes
app.use('/api', fareRoutes); // now your frontend POST to /api/fare will work

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
