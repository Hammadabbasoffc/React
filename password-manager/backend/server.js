require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const passwordSchema = new mongoose.Schema({
  URL: String,
  userName: String,
  password: String,
});

const Password = mongoose.model('Password', passwordSchema);

// CRUD Routes
// Create
app.post('/passwords', async (req, res) => {
  try {
    const newPassword = await Password.create(req.body);
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read
app.get('/passwords', async (req, res) => {
  try {
    const passwords = await Password.find();
    res.json(passwords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update
app.patch('/passwords/:id', async (req, res) => {
  try {
    const updatedPassword = await Password.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPassword);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete
app.delete('/passwords/:id', async (req, res) => {
  try {
    await Password.findByIdAndDelete(req.params.id);
    res.json({ message: 'Password deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
