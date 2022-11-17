import "./topbarLanding.css";
import { useNavigate } from "react-router-dom";
import logoSV from "../img/logoSV.png";

export default function TopbarLanding() {
  const navigate = useNavigate();

  function addHeader() {
    document.body.classList.add("Topbar");
  }
  function removeHeader() {
    document.body.classList.remove("Topbar");
  }

  return (
    <div className="topLanding">
      <div className="topLeftLanding">
        <img src={logoSV} alt="" />
        <i className="topIconLanding">SUNNYVALE</i>
      </div>
      <div className="topCenterLanding">
        <ul className="topListLanding">
          <li
            className="topListItemLanding"
            onClick={() => {
              navigate("/");
              removeHeader();
            }}
          >
            HOME
          </li>
          <li
            className="topListItemLanding"
            onClick={() => {
              navigate("/AmenitiesGuest");
              addHeader();
            }}
          >
            AMENITIES
          </li>

          <button
            className="registerButtonLanding"
            onClick={() => {
              navigate("/Register");
            }}
          >
            Register your Account
          </button>
          <button
            className="loginButtonLanding"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
}
