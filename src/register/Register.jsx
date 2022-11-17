import TopbarRegister from "../topBarRegister/TopBarRegister";
import "./register.css";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <>
      <TopbarRegister />
      <div className="register">
        <span className="registerTitle">Register your Account</span>
        <form className="registerForm">
          <label>First Name</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your first name..."
          />
          <label>Last Name</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your last name..."
          />
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
          />
          <label>Confirm password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
          <button
            className="guestButtonRegister"
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
