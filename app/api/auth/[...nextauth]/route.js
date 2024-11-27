import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import NextAuth from "next-auth";
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

        try {
          await connectToDB();

          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch(
              `${process.env.NEXTAUTH_URL}/api/users/create`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  profile_photo: image,
                }),
              }
            );

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log("Error during sign-in:", error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
