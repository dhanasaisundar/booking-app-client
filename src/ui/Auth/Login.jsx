import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa6";
import toast from "react-hot-toast";

import { assets } from "../../assets/assets";
import { validateEmail } from "../../utils/validateInput";
import { authLoginFn } from "../../utils/apiAuth";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../contexts/authContext";

function Login() {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localLoading, setLocalLoading] = useState(false);
  const navigate = useNavigate();
  async function handleOnSubmit(e) {
    e.preventDefault();
    setLocalLoading(true);
    dispatch({ type: "auth/start" });
    const isEmailValid = validateEmail(email);

    if (!isEmailValid.isValid || email === "") {
      toast.error(isEmailValid.message);
      setLocalLoading(false);
      dispatch({ type: "auth/failure", payload: isEmailValid.message });
      return;
    }

    if (password === "") {
      toast.error("Password should not be empty");
      setLocalLoading(false);
      dispatch({
        type: "auth/failure",
        payload: "Password should not be empty",
      });

      return;
    }

    try {
      const result = await authLoginFn(email, password);
      if (result.success) {
        const userDetails = result.data;
        localStorage.setItem("user", JSON.stringify(userDetails));
        dispatch({ type: "auth/success", payload: userDetails });
        toast.success(result.message);
        setLocalLoading(false);
        navigate("/");
      } else if (!result.success) {
        toast.error(result.message);
        dispatch({
          type: "auth/failure",
          payload: result.message,
        });
        setLocalLoading(false);
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Login failed");
      setLocalLoading(false);
      dispatch({
        type: "auth/failure",
        payload: "Login failed",
      });
    }
  }

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleOnSubmit}>
        <header>
          <div className="logo-container">
            <img src={assets.logo} alt="logo" className="login-form-logo" />
            <h2>myBooking.com</h2>
          </div>
        </header>
        <h3>Login in to myBooking.com</h3>
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            Password
            <span>
              <FaAsterisk className="asterisk" />
            </span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="#" className="login-form-fp">
          Forgot Password?
        </a>
        <button type="submit" disabled={localLoading}>
          {localLoading ? <Loader type="Logging in" /> : "Login"}
        </button>
        <span>
          Not Registered?
          <Link to="/user/register" className="login-form-ca">
            Create Account
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
