import mongoose from 'mongoose';

const otpSchema = mongoose.Schema({
    email:String,
    code: String,
    expiresIn: Number
},{
  timestamps:true
})
const otp = mongoose.model('otp', otpSchema,'otp')
export default otp