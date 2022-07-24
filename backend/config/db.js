const mongoose = require('mongoose');

// const uri = 'mongodb+srv://dikshant:dikshant1263@portfolio.izlzy.mongodb.net/portfolio?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        mongoose.connect(process.env.uri)
        .then(() => console.log(`MongoDB Connected:`))
        .catch(err => console.error(err));        
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}
