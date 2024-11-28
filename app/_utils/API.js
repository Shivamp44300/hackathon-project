// Fetch all user data
const getAllUserData = async () => {
  try {
    const res = await fetch(`/api/users`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data, "This coming from API"); // Log or return the data
    return data; // Return data if needed for further processing
  } catch (error) {
    console.log("Error while fetching data from database", error);
  }
};

// Fetch a specific user by email
export const getUser = async (email) => {
  try {
    const res = await fetch(`/api/users/${email}`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data; // Return the data for use in the component or other functions
  } catch (error) {
    console.log("Error while fetching data from database", error);
  }
};

// Create a new user
export const createUser = async (userData) => {
  try {
    // Send the user data to the backend API to create the user
    const res = await fetch(`/api/users/create`, {
      method: "POST", // Make sure the backend is expecting a POST request
      headers: {
        "Content-Type": "application/json", // Ensure the correct content type is set
      },
      body: JSON.stringify(userData), // Convert the user data to JSON
    });

    // Check if the request was successful (HTTP status 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Parse the response data from the backend
    const data = await res.json();
    console.log(data, "This is the response from createUser");

    // Return the user data received from the backend
    return data;
  } catch (error) {
    // Log the error message if something goes wrong
    console.error("Error while creating user:", error.message);
    throw error; // Re-throw the error so the calling function can handle it
  }
};

// Update a user by email
export const updateUser = async (email, updatedData) => {
  try {
    const dataUpdate = {
      phone: updatedData.phone,
      room_number: updatedData.room_number,
      floor_number: updatedData.floor_number,
      profile_photo: updatedData.profile_photo,
      emergency_contact: {
        emergency_contact_name: updatedData.emergency_contact_name,
        emergency_contact_phone: updatedData.emergency_contact_phone,
      },
    };

    const res = await fetch(`/api/users/${email}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    });

    if (!res.ok) {
      const errorText = await res.text(); // Capture detailed error text
      throw new Error(`HTTP error! Status: ${res.status}. Error: ${errorText}`);
    }

    const data = await res.json();
    console.log("Updated user:", data);
    return data; // Return the updated user data
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// Update visit log for a user
export const updateUserVisitLog = async (email, updatedData) => {
  try {
    const dataUpdate = {
      visit_logs: [
        {
          place: updatedData.place,
          location: updatedData.position || [null, null], // Ensure position is an array
          reason: updatedData.reason,
          status_log: updatedData.status || "Pending", // Default status
        },
      ],
    };

    const res = await fetch(`/api/users/${email}/update/visitlog`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    });

    if (!res.ok) {
      const errorResponse = await res.text();
      throw new Error(
        `HTTP error! Status: ${res.status}. Error: ${errorResponse}`
      );
    }

    const data = await res.json();
    console.log("Updated visit log:", data);
    return data;
  } catch (error) {
    console.error("Error updating visit log:", error);
  }
};
