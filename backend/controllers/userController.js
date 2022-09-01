//import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer' 
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import Otp from '../models/otpModel.js'

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await Users.findOne({email})

   // if (user && (bcryptjs.compare(password, user.password))) 
    if( user && await user.matchPassword(password))
    {
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(401)
        throw new Error('Invalid email or password');
    }
})

// @desc Get user profile
// @route POST /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async(req,res) => {
  const user = await Users.findById(req.user._id)

  if(user) {
    return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin       
    })
  }else{
      res.status(404)
      throw new Error('User not found')
  }
})

//@desc Register a new user
//@route POST api/users
//@access Public

const registerUser = asyncHandler(async(req,res) => {
    const { name,email,password } = req.body
    const userExists = await Users.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
  const user = await Users.create({ name, email, password })
if(user) {
    res.json({
        _id : user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
    })
} else{
    res.status(400)
    throw new Error ('Invalid user data')
}
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async(req,res) => {
   const user = await Users.findById(req.user._id)
   if(user) {
       user.name = req.body.name || user.name
       user.email = req.body.email || user.email
       if(req.body.password){
           user.password = req.body.password
       }
       const updatedUser = await user.save()
           
          res.json({
              id: updatedUser._id,
              name: updatedUser.name,
              email: updatedUser.email,
              isAdmin: updatedUser.isAdmin,
              token: generateToken(updatedUser._id)
          })
        } else{
            res.status(404)
            throw new Error('User not found')
        }
})

const forgotpassword = asyncHandler(async(req,res) => {
    // res.status(200).json('Send email')
    const userExists = await Users.findOne({email:req.body.email})
    //console.log(userExists.name);
     // const responseType = {};
    if(userExists){
        let otpcode = Math.floor((Math.random()*1000)+1)
       let otpdata = new Otp({ 
        email: req.body.email,
        code: otpcode,
        expiresIn: new Date().getTime() + 300*1000
       })
       let otpResponse = await otpdata.save();
        res.json({
        otpCode: otpResponse.code,
        message: "Please check your email for OTP"
    })
    } else{
        res.status(404)
        throw new Error('User email not found')
    }

  })
  const resetpassword = asyncHandler(async(req,res) => {
    let data = await Otp.find({email: req.body.email, code: req.body.otpCode})
    const respone = {}
  if(data){
    let currentTime = new Date().getTime();
    let diff = data.expiresIn -  currentTime;
    if(diff < 0){
        res.status(404)
        throw new Error('Token Expired')
        
    } else{
        let user = await Users.findOne({email: req.body.email})
        user.password = req.body.password
        user.save()
        res.json({
            message: "Password Changed Successfully"
        })
    }
} else{
    res.json({
        message: "Invalid OTP"
    })
}
      })
      

      const mailer = (email, otp)=>{
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'baranwal.purnima@gmail.com',
            pass: 'tubelight12'
        }
      })
      const mailOptions = {
        from: 'baranwal.purnima@gmail.com',
        to: 'purnimak.nyfs@gmail.com',
        subject: 'Sending email using Node.js',
        text: 'Thank you'
      }
      transporter.sendEmail(mailOptions, function(error,info){
        if(error){
            console.log(error);
         } else{
            console.log('Email sent ' + info.response);
            
         }
      })
      }


export {authUser,getUserProfile,registerUser,updateUserProfile,forgotpassword,resetpassword}