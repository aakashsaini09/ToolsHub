import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    Slug:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
},{timestamps:true});

export default mongoose.model("UserData", UserSchema)