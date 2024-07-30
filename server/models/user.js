import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    role:{
        type:Number,
        default:0
    }
});


const user = mongoose.model('user', userSchema);

export default user;