import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./secretaryPanel.css";
import HomeownerRegistration from "./homeownerRegistration";

export default function SecretaryPanel() {
  return (
    <>
      <Topbar />
      <div className="secretary">
        <div className="sideBar">
          <ul className="secretarySideBar">
            <li>Homeowner Registration</li>
            <li>Approval of Accounts</li>
            <li>Complaint Tickets</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="secretaryPanel">
          <div className="homeownerRegistration">
            <label className="lblRegistration">Registration</label>

            <HomeownerRegistration />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
