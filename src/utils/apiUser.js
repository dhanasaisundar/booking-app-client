import { userInfoUrl } from "./url";

export async function updateUserInfo(userId, userInfo) {
  const apiUrl = `${userInfoUrl}/${userId}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userInfo }),
  };

  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }
    const data = await response.json();
    return {
      success: true,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "An error occurred. Please try again.",
    };
  }
}
