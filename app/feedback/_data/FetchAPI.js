export const getAllUsers = async () => {
  try {
    const res = await fetch("/api/users", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch users, status: ${res.status}`);
    }

    const data = await res.json();

    console.log("The list of all users are:", data.users);

    return data.users;
  } catch (error) {
    console.error("Error fetching all user data:", error.message);
  }
};

export const createUser = async (userData) => {
  try {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to create user");
    }

    const data = await res.json();
    console.log("User created successfully:", data.user);
    return data.user;
  } catch (error) {
    console.error("Error creating user:", error.message);
    return null;
  }
};
