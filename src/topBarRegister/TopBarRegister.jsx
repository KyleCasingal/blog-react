import "./topbarRegister.css";
import { useNavigate } from "react-router-dom";
import logoSV from "../img/logoSV.png";

export default function TopbarRegister() {
  const navigate = useNavigate();

  return (
    <div className="topRegister">
      <div className="topLeftRegister">
        <img src={logoSV} alt="" />
        <i className="topIconRegister">SUNNYVALE</i>
      </div>
      <div className="topRightRegister">
        <p>Already have an Account?</p>
        <button
          className="loginButtonReg"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
