const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./model'); // Assuming your model is in the 'models' folder
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { firstName, lastName, gender, dateOfBirth, weight, height, activityLevel, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ firstName, lastName, dateOfBirth });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            gender,
            dateOfBirth,
            weight,
            height,
            activityLevel,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
