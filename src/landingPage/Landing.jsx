import Footer from "../footer/Footer";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import landingBG from "../img/landingBG.png";
import TopbarLanding from "../topbarLanding/TopBarLanding";

export default function Landing() {
  return (
    <>
      <TopbarLanding />
      <div className="landingPage">
        <img src={landingBG} alt="" />
        <div className="landingTitle">
          Sunnyvale
          <p>Where dreams come home.</p>
        </div>
      </div>

      <div className="landingRecentContent">
        <label className="landingTitles">Recent Announcements</label>
        <label>announcement content here</label>
      </div>

      <div className="landingIntroduction">
        <label className="landingTitles">Mission</label>
        <p className="landingText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mollis aliquet aliquet. Ut non porta lacus, in commodo ligula. Duis
          dapibus ex a malesuada molestie. Vestibulum eu enim et orci laoreet
          fringilla. Integer non sodales nibh. Nam sodales, orci id elementum
          dictum, dolor diam malesuada metus, id ullamcorper dui diam id magna.
          Curabitur sodales libero non purus pharetra, eu pharetra dolor
          dapibus.
        </p>

        <label className="landingTitles">Vision</label>
        <p className="landingText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mollis aliquet aliquet. Ut non porta lacus, in commodo ligula. Duis
          dapibus ex a malesuada molestie. Vestibulum eu enim et orci laoreet
          fringilla. Integer non sodales nibh. Nam sodales, orci id elementum
          dictum, dolor diam malesuada metus, id ullamcorper dui diam id magna.
          Curabitur sodales libero non purus pharetra, eu pharetra dolor
          dapibus.
        </p>

        <label className="landingTitles">Goals</label>
        <p className="landingText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mollis aliquet aliquet. Ut non porta lacus, in commodo ligula. Duis
          dapibus ex a malesuada molestie. Vestibulum eu enim et orci laoreet
          fringilla. Integer non sodales nibh. Nam sodales, orci id elementum
          dictum, dolor diam malesuada metus, id ullamcorper dui diam id magna.
          Curabitur sodales libero non purus pharetra, eu pharetra dolor
          dapibus.
        </p>
      </div>
      <Footer />
    </>
  );
}
