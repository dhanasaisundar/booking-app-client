import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaAsterisk } from "react-icons/fa6";

import Loader from "../Loader/Loader";
import { assets } from "../../assets/assets";
import { authRegisterFn } from "../../utils/apiAuth";
import { validateEmail, validatePassword } from "../../utils/validateInput";
import "./Auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid.isValid || email === "") {
      toast.error(isEmailValid.message);
      setLoading(false);
      return;
    }

    if (!isPasswordValid.isValid || password === "") {
      toast.error(isPasswordValid.message);
      setLoading(false);
      return;
    }

    if (confirmPassword !== password) {
      toast.error("Password and Confirm Password must be the same");
      setLoading(false);
      return;
    }

    try {
      const result = await authRegisterFn(email, password);

      if (result.success) {
        toast.success(result.message || "Registration successful!");
        navigate("/user/login");
      } else {
        toast.error(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("An error occurred during registration.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-bg">
        <form className="login-form" onSubmit={handleSubmit}>
          <header>
            <div className="logo-container">
              <img src={assets.logo} alt="logo" className="login-form-logo" />
              <h2>myBooking.com</h2>
            </div>
          </header>
          <div className="sub-title-con">
            <h2>Sign up to myBooking.com</h2>
          </div>
          <div className="form">
            <label htmlFor="email">
              Email
              <span>
                <FaAsterisk className="asterisk" />
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="password">
              Password
              <FaAsterisk className="asterisk" />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                const newPassword = e.target.value;
                setPassword(newPassword);
                const passwordValidation = validatePassword(newPassword);
                setIsValidPassword(passwordValidation.isValid);
              }}
            />
            {password !== "" && !isValidPassword && (
              <p className="alter-message">
                Password should contain atleast 8 character,1 capital letter, 1
                number and 1 special character
              </p>
            )}

            <label htmlFor="confirm-password">
              Confirm Password
              <FaAsterisk className="asterisk" />
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={
              !(email !== "" && password !== "" && confirmPassword !== "")
            }
          >
            {loading ? <Loader type="Loading" /> : "Sign up"}
          </button>
          <p>
            Already have an Account?
            <Link to="/user/Login" className="login-form-ca">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
