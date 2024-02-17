const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = "mongodb+srv://uhkecanaveup:5kXIGWwBpxTp2tov@cluster0.lqcin8h.mongodb.net/?retryWrites=true&w=majority";



const app = express();
const port = 3000; // or any port you prefer

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for your data
const TextInputModel = mongoose.model('TextInput', {
  text: String
});

// Middleware
app.use(bodyParser.json());

// Define routes
app.post('/save-text', async (req, res) => {
  try {
    const { text } = req.body;
    const textInput = new TextInputModel({ text });
    await textInput.save();
    res.status(200).send('Text saved successfully');
  } catch (error) {
    res.status(500).send('Error saving text');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});