import { connectToDB } from "@/mongodb";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();

    const { email } = params;
    const updateData = await req.json();

    console.log("Received visit logs data:", updateData);

    // Ensure visit_logs is provided and is an array
    if (
      !Array.isArray(updateData.visit_logs) ||
      updateData.visit_logs.length === 0
    ) {
      return new NextResponse("Invalid visit logs data", { status: 400 });
    }

    // Process visit_logs and set default values where necessary
    const processedLogs = updateData.visit_logs.map((log) => ({
      ...log,
      entry_time: log.entry_time || new Date(), // Default entry_time to current time if missing
      exit_time:
        log.status_log === "Completed" && !log.exit_time
          ? new Date()
          : log.exit_time, // Set exit_time if status_log is 'Completed'
      location: log.location || [null, null], // Default to [null, null] if location is missing
      place: log.place || null, // Default to null if place is missing
      reason: log.reason || null, // Default to null if reason is missing
      status_log: log.status_log || "Pending", // Default to 'Pending' if status_log is missing
    }));

    // Directly push new logs into the visit_logs array
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $push: { visit_logs: { $each: processedLogs } } },
      { new: true } // Return the updated user document
    );

    // Check if the user was found and updated
    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Return the updated user document with the updated visit_logs
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error("Error updating visit logs:", error);
    return new NextResponse("Failed to update visit logs", { status: 500 });
  }
};
