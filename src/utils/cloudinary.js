const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return;
        const response = await cloudinary.v2.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        console.log('File Uploaded on Cloudinary ! ', response.url);
        
        // after successfull upload, remove from local storage
        fs.unlinkSync(localFilePath);
        return response;
    } catch (err) {
        fs.unlinkSync(localFilePath);
    }
}

exports.uploadOnCloudinary = uploadOnCloudinary;