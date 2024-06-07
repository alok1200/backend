import {v2 } from "cloudinary";
import { Console } from "console";
import { response } from "express";
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOneCloudnary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null 
        // uplode file on cloudinary
     const response = await cloudinary.uploader.uplode(localFilePath, {
            resource_type: "auto"
        })

        Console.log ("file is successfully uploded",response.url)
        return response.url

    } catch (error) {
        fs.unlinkSync(localFilePath)  // delete all local file in our file base
        return null; 
    }
};

export default {uploadOneCloudnary}