import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    first_name: String, 
    last_name: String,
    email: {
        unique: true,
        type: String
    },
    password: String,
    role: {
        type: String,
        default: 'user'
    }
});


const UserModel = mongoose.model('users', userSchema);

export default UserModel;