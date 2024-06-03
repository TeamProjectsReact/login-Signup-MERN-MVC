const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const authRoutes = require('./Routes/authRoute');
const StudentRoute = require('./Routes/StudentRoute');
const EmployeeRoute = require('./Routes/EmployeeRoute');


// app
const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// all routes
app.use('/api/auth', authRoutes);
app.use('/api/Student', StudentRoute);
app.use('/Test', EmployeeRoute);

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})