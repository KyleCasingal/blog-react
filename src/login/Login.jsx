import TopbarLogin from "../topBarLogin/TopBarLogin";
import Footer from "../footer/Footer";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <TopbarLogin />
      <div className="loginPage">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
          <button
            className="guestButtonLogin"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue as Guest
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
