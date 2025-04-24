const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// POST: Save message
router.post('/contact', async (req, res) => {
  try {
    console.log("Incoming data:", req.body);
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error while saving message:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ STEP 1: GET all messages
router.get('/contact', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
