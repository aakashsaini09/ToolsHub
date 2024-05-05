

import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    slug:{
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
    },
    email: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model("productSchema", UserSchema)
