import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Step 1: Connect to the database
    await connectToDB();

    // Step 2: Parse the incoming request body
    const body = await req.json();

    // Validate if the body exists and contains the required fields
    if (!body || !body.email ) {
      return NextResponse.json(
        { error: "Request body must contain 'email' and 'user_id'" },
        { status: 400 }
      );
    }

    console.log("Request Body:", body);

    const {
      email,
      name,
      profile_photo,
      phone,
      face_recognition_data,
      access_level,
      authorized_areas,
      entry_time_range,
      last_location,
      tracking_consent,
      visit_logs,
      emergency_contact,
      status,
    } = body;

    // Step 3: Check if a user with the given email already exists
    const existUser = await User.findOne({ email });

    if (existUser) {
      // Step 4: If the user already exists, return a response indicating so
      return NextResponse.json(
        { message: "User already exists", user: existUser },
        { status: 200 }
      );
    }

    // Step 5: If the user doesn't exist, create a new user
    const newUser = new User({
      email,
      name,
      profile_photo,
      phone,
      face_recognition_data,
      access_level : "user",
      authorized_areas,
      entry_time_range,
      last_location,
      tracking_consent,
      visit_logs,
      emergency_contact,
      status,
      created_at: new Date(),
      updated_at: new Date(),
    });

    // Save the new user to the database
    await newUser.save();

    // Step 6: Return the newly created user as the response
    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    // Step 7: Handle errors and provide useful messages
    console.error("Error processing request:", error.message);
    return NextResponse.json(
      {
        error: `An error occurred while processing the request: ${error.message}`,
      },
      { status: 500 }
    );
  }
};
