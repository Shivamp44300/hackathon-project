/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"], // Allow images from Cloudinary
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Corrected pattern for all API routes
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://gatewayhackathon.vercel.app/", // Replace with your frontend URL
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, DELETE, PATCH, POST, PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Content-Type, X-Api-Version",
          },
        ],
      },
      {
        source: "/api/:path*", // Ensure CORS for preflight requests with correct pattern
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://gatewayhackathon.vercel.app/", // Replace with your frontend URL
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, X-Requested-With",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
        ],
      },
    ];
  },
};

export default nextConfig;
