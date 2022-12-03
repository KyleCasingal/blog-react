import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./memberPanel.css";
import { MemoryRouter } from "react-router-dom";
import MemberProfile from "./memberProfile";
import MemberInbox from "./memberInbox";
import MonthlyDuesMember from "./monthlyDuesMember";

export default function MemberPanel() {
  function showProfile() {
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");
    var duesMem = document.getElementById("duesMem");

    profile.style.display = "block";
    inbox.style.display = "none";
    duesMem.style.display = "none";
   }

  function showInbox() {
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");
    var duesMem = document.getElementById("duesMem");

    profile.style.display = "none";
    inbox.style.display = "block";
    duesMem.style.display = "none";
  }

  function showDuesMem(){
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");
    var duesMem = document.getElementById("duesMem");

    profile.style.display = "none";
    inbox.style.display = "none";
    duesMem.style.display = "block";
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
                showProfile();
              }}
            >
              Profile
            </li>
            <li
              id="inboxBtn"
              onClick={() => {
                showInbox();
              }}
            >
              Inbox
            </li>
            <li onClick={()=>{showDuesMem()}}>Monthly Dues</li>
          </ul>
        </div>
        <div className="memberPanel">
          <div className="profileMem" id="profile">
            <MemberProfile />
          </div>

          <div className="inbox" id="inbox">
            <MemberInbox />
          </div>

          <div className="monthlyDuesMem" id="duesMem">
            <MonthlyDuesMember />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
