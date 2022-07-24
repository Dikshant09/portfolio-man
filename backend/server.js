const path = require('path');
const express = require('express');
const app = express();

const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

// Routes
const messageRoutes = require('./routes/messageRoute');

// Connect to database
const { connectDB } = require('./config/db.js');
connectDB();


// Using middleware to get the data which is passed by user in post request : to Parse data
app.use(express.urlencoded({ extended: false }))

// Parse json
app.use(express.json());

// Messages Routes
app.use('/api/', messageRoutes);

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    // FIX: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
} else {
    app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome Dikshant Portfolio API' })
    })
}


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})