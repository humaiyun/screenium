import mongoose from "mongoose";

const user = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: [true, "Username already exists"],
        lowercase: true,
        maxLength: 20,
        required: [true, "Username cannot be empty"]
    },
    password: {
        type: String,
        minLength: [3, "Password must be minimum 5 characters"],
        maxLength: [100, "Password cannot exceed 100 characters"],
        required: [true, "Password cannot be empty"] 
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        maxLength: 50,
        required: [true, "Email cannot be empty"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },


    firstName: {
        type: String,
        trim: true,
        maxLength: 50,
        default: ""
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 50,
        default: ""
    },
    gender: {
        type: String,
        trim: true,
        maxLength: 15,
        default: ""
    },
    biography: {
        type: String,
        trim: true,
        maxLength: 150,
        default: ""
    },
    photo: {
        type: String
    },
    watchList: {
        list: [
            { 
                name: { type: String },
                movieId: { type: Number },
                picture: { type: String }
            }
        ],
        default: []
    },


    userType: {
        type: String,
        enum: ["user", "admin", "banned"],
        required: true,
        default: "user"
    }
});

