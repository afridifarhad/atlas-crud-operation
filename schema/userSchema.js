import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    name:{
        type: "string"
    },
    email: {
        type: "string",
        require: true,
        unique: true
    },

    password: {
        type: "string",
        require: true
    }
})

export const  User = mongoose.model("user", userSchema)