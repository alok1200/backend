import {asyncHandler} from "../utils/asynshandler.js"
import {apierrorui} from "../utils/apierrorui.js"
import {User} from "../models/User.moduls.js"
import {uploadOneCloudnary} from "../utils/Cloudinary.js"


 const registorUser = asyncHandler( async(req, res) => {
    const {fullname, email, password, username} = 
    req.body;
    console.log("email: "  ,email);

     if([fullname, email, password, username].some((filds)=> 
     filds?.trem() === ''
    )
){
     throw new apierrorui(400, "All filds is required")    
     }
    
    const existingUser = User.findOne({
        $or: [{email: email}, {username: username}],
    })
    if(!existingUser){
        throw new apierrorui(409, "User name email is already exists")
    }

   const avatarLocalPath = req.files?.avatar[0]?.path
   const coverImageLocalPath = req.files?.coverImage[0]?.path

   if (!avatarLocalPath) {
      throw new apierrorui(400, "avter is required")
   }




})
export {registorUser,}
