// server.js

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());  // For parsing JSON data

const users = [];  // Temporary in-memory "database"

// Signup Route
app.post("/api/signup", 
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user
    const newUser = { name, email, password: hashedPassword };
    users.push(newUser);

    // Create a JWT token
    const token = jwt.sign({ userId: newUser.email }, "yourSecretKey", { expiresIn: "1h" });

    res.status(201).json({
      message: "User created successfully!",
      token
    });
  }
);

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Create JWT token
  const token = jwt.sign({ userId: user.email }, "yourSecretKey", { expiresIn: "1h" });

  res.status(200).json({
    message: "Login successful!",
    token
  });
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
