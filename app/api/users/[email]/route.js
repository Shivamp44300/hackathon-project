import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    // Step 1: Connect to the database
    await connectToDB();

    // Step 2: Extract email from params
    const { email } = params;
    console.log(email, "this from email route 🤣🤣🤣🤣");

    // Step 3: Find user by email
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      // Step 4: Return 404 response if user is not found
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Step 5: Return the user data with 200 status code
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    // Step 6: Handle errors and return a 500 response
    console.error("Error retrieving user:", error);
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }
};
