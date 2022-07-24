const Message = require('../models/messgageModel');
const asyncHandler = require('express-async-handler');

const getMessages = asyncHandler(async (req, res) => {
    try{
        const data = await Message.find({});
        res.status(200).json(data);
    }catch(error){
        res.status(400);
        console.log('error in fetching data');
        return res.json({ error: error.message });
    }
})



const createMessage = asyncHandler(async(req, res) =>{
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        res.status(400);
        return res.json({ message: 'Please Include All fields' });
    }
    
    const messageText = new Message({
        name,
        email,
        message,
    });

    try{
        await messageText.save();
        res.status(201);
        res.json({
            _id: messageText.id,
            name: messageText.name,
            email: messageText.email,
            message: messageText.message
        });

        console.log('Message saved successfully');
    }catch(error){
        res.status(400);
        return res.json({ message: 'Message not saved...' });
    }
})

module.exports = {
    getMessages,
    createMessage
}