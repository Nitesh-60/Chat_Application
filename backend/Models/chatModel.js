const mongoose = reqire("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName: {type:String, trim: true},
        isGroupChat: {type:Boolean, default: false},
        users:[{
            type:mongoose.Scheme.Types.ObjectId,
            ref:"User"
        }],
        latestMessage: {

            type: mongoose.Scheme.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Scheme.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;


// ChatName
// isGroupChat
// listOfUsers
// latestMsg
// admin