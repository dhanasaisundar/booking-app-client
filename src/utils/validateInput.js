const lengthRegex = /.{8,}/;
const capitalLetterRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePassword(password) {
  if (!lengthRegex.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least 8 character",
    };
  }
  if (!capitalLetterRegex.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one capital letter",
    };
  }
  if (!numberRegex.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    };
  }
  if (!specialCharRegex.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one special character",
    };
  }

  return {
    isValid: true,
  };
}

/* ################################################################################################# */
function validateEmail(email) {
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Invalid email. please try again",
    };
  }
  return {
    isValid: true,
  };
}

/* ################################################################################################# */

export { validateEmail, validatePassword };
