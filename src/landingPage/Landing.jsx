import Footer from "../footer/Footer";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import landingBG from "../img/landingBG.png"
import TopbarLanding from "../topbarLanding/TopBarLanding";


export default function Landing() {
  return (
      <>
        <TopbarLanding/>
        <div className="landingPage">
            <img src={landingBG} alt="" />
            <div className="landingTitle">
              Sunnyvale
              <p>Where dreams come home.</p>
            </div>
        </div>
        <Footer/>      
      </>
    );
}