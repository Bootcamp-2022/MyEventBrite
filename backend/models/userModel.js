import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        ddefault: false
    }
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcryptjs.compare(enteredPassword,this.password)
}


const Users = mongoose.model('Users', userSchema)
export default Users