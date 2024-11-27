// cloudinaryConfig.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Set from environment variables
  api_key: process.env.CLOUDINARY_API_KEY, // Set from environment variables
  api_secret: process.env.CLOUDINARY_API_SECRET, // Set from environment variables
});

module.exports = cloudinary;
