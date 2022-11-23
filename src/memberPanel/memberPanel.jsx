import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./memberPanel.css";
import { MemoryRouter } from "react-router-dom";
import MemberProfile from "./memberProfile";
import MemberInbox from "./memberInbox";

export default function MemberPanel() {
  function profile() {
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");

    profile.style.display = "block";
    inbox.style.display = "none";
  }

  function inbox() {
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");

    profile.style.display = "none";
    inbox.style.display = "block";
  }

  return (
    <>
      <Topbar />
      <div className="treasurer">
        <div className="sideBar">
          <ul className="memberSideBar">
            <li
              id="profileBtn"
              onClick={() => {
                profile();
              }}
            >
              Profile
            </li>
            <li
              id="inboxBtn"
              onClick={() => {
                inbox();
              }}
            >
              Inbox
            </li>
          </ul>
        </div>
        <div className="memberPanel">
          <div className="profileMem" id="profile">
            <MemberProfile />
          </div>

          <div className="inbox" id="inbox">
            <MemberInbox />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
