import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;

        console.log(user);
        try {
          await connectToDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/users/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                profile_photo: image,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },

    // Add the redirect callback to send the user to the dashboard after sign-in
    async redirect({ url, baseUrl }) {
      // Check if the URL is the default, and redirect to the dashboard
      if (url === baseUrl || url === "/") {
        return `${baseUrl}/userdashboard`; // Change to the desired dashboard path
      }
      return url;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
