import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js'

export const sendMessage = async (req, res) => {
    try {
        //Get message and receiver id from HTTP request
        const {message} = req.body;
        const {id: receiverId} = req.params;
        //Get sender ID by decoding user cookies using protectRoute middleware
        const senderId = req.user._id;

        //Check for existing conversation between the users
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        });

        //Create one if nonexistent
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        };

        //Create a newMessage containing the info
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        //Add it to conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        };
        
        //Saves conversation and message data to DB
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}