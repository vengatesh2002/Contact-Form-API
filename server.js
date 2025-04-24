const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact'); // <-- make sure this path is correct

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ROUTES
app.use('/api', contactRoutes); // <-- this is what enables /api/contact

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
