import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from bcrypt;
import { decrypt } from "dotenv";

const userSchema = new Schema(
     {
        username:{
            type: String,
            required: [true, 'username is required'],
            unique: true,
            lovercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: [true, 'email is required'], 
            unique: true,
            lovercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: [true, 'full name is required'],
            trim: true,
            index: true,
        },
        avater:{
              type: String, 
              required: true,  //  cloudenary service
        },
        coverImage:{
             type: String,    // cloudenary service using
        },
        watchHistory:[{
            type: Schema.Types.ObjectId,
            ref: 'Video'
              
        }],
        password:{
            type: String,
            required: [true , 'password is required'],
           
        },
        refrashToken:{
           type: String,
       },      
    },
    {
     timestamps: true
   }
)


userSchema.pre("save", function (next) {              //password decrypt and 
    if(!this.isModified ("password")) return next();  // and modified
    this.password = decrypt.has(this.password, 10)
    next()
}) 

userSchema.methods.isPasswordCorrect = async function (password)
{                 // password compare and and chack all perameter
    return await decrypt.compare(password, this.password)
    }
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        id: this._id,
        fullname: this.fullname,
        email: this.email,
        password: this.password,

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }
)
}
userSchema.methods.generateRefrashToken = function(){
    return jwt.sign({
        id: this._id,
    },
    process.env.REFERASH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
     }
)}



export const User = mongoose.model("User", userSchema)