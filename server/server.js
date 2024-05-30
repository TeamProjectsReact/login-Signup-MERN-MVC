const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const authRoutes = require('./Routes/authRoute');
const studentRoute = require('./Routes/StudentRoute');


// app
const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// all routes
app.use('/api/auth', authRoutes);
app.use('/api/Student', studentRoute);

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})