// pages/api/users/[email]/update/index.js
import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();

    const { email } = params;
    const updateData = await req.json();

    console.log("Received user data:", updateData);

    // Validate incoming data
    if (!updateData || Object.keys(updateData).length === 0) {
      return new NextResponse("No data provided to update", { status: 400 });
    }

    let updateFields = {};

    if (updateData.phone?.trim()) {
      updateFields.phone = updateData.phone.trim();
    }
    if (updateData.room_number?.trim()) {
      updateFields.room_number = updateData.room_number.trim();
    }
    if (updateData.floor_number?.trim()) {
      updateFields.floor_number = updateData.floor_number.trim();
    }

    if (updateData.profile_photo?.trim()) {
      updateFields.profile_photo = updateData.profile_photo.trim();
    }

    if (updateData.emergency_contact) {
      const { emergency_contact_name, emergency_contact_phone } =
        updateData.emergency_contact;

      if (emergency_contact_name?.trim()) {
        updateFields["emergency_contact.emergency_contact_name"] =
          emergency_contact_name.trim();
      }

      if (emergency_contact_phone?.trim()) {
        updateFields["emergency_contact.emergency_contact_phone"] =
          emergency_contact_phone.trim();
      }
    }

    if (Object.keys(updateFields).length === 0) {
      return new NextResponse("No valid data to update", { status: 400 });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: updateFields, $currentDate: { updated_at: true } },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse("Failed to update user", { status: 500 });
  }
};
