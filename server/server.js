const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// app
const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())

// all routes


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})