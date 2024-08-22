const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./registration'); // Assuming your routes are in the 'routes' folder

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect('mongodb+srv://Zaruq2005:Zaruq2005@zaruq1.hb30f9q.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
