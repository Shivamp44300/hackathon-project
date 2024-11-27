/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"], // Allow images from Cloudinary
  },
};

export default nextConfig;
