import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const users = await User.find();

    if (users.length === 0) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Users retrieved successfully", users },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving users:", error);
    return NextResponse.json(
      { error: "An error occurred while retrieving users" },
      { status: 500 }
    );
  }
};
