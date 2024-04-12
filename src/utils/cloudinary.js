import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';    

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:  process.env.CLOUDINARY_API_KEY,
  api_secret:  process.env.CLOUDINARY_API_KEY_SECRET
});

const uploadonCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath)  return null;
      const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type : 'auto',
        });
        // file has been uploaded successfully
      //  console.log('file is uploaded on cloudinary ',response.url);  
    //    console.log(response);
        fs.unlinkSync(localFilePath);
        return response;    
    } catch(e){
        fs.unlinkSync(localFilePath);   // remove temporary file as operation failed
        return null;
    }
}


export {uploadonCloudinary}