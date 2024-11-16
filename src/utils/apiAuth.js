import { authLoginUrl, authRegisterUrl } from "./url";

export async function authRegisterFn(email, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  try {
    const response = await fetch(authRegisterUrl, options);
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

/* ######################################################################################################### */
export async function authLoginFn(email, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  try {
    const response = await fetch(authLoginUrl, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
    const jsonData = await response.json();
    return {
      success: true,
      message: jsonData.message,
      data: jsonData.data.userDetails,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "An error occurred. Please try again.",
    };
  }
}

/* ######################################################################################################### */
