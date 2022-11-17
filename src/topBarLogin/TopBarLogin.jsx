import "./topbarLogin.css";
import { useNavigate } from "react-router-dom";
import logoSV from "../img/logoSV.png";


export default function TopbarLogin() {

  const navigate = useNavigate();


  return (
    <div className='topLogin'>
        <div className="topLeftLogin">
          <img src={logoSV} alt="" />
            <i className="topIconLogin">SUNNYVALE</i>
            
        </div>
        <div className="topRightLogin">
          <p>Already an Association Member?</p> 
          <button className="registerButtonTop" onClick={()=>{navigate("/Register")}} >
              Register your Account
            </button>
        </div>
    </div>
  )
}

