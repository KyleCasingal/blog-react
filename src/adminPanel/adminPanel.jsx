import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./adminPanel.css";
import HomeownerRegistration from "./homeownerRegistration";
import MemberManagement from "./userManagement";
import ComplaintManagement from "./complaintManagement";
import Settings from "./settings";
import Reports from "./reports";
import PostManagement from "./postManagement";

export default function AdminPanel() {
  function homeownerReg() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");

    homeownerReg.style.display = "block";
    userManage.style.display = "none";
    complaintManage.style.display = "none";
    settings.style.display = "none";
    reports.style.display = "none";
    postManage.style.display = "none";
  }

  function accManagement() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "block";
    complaintManage.style.display = "none";
    settings.style.display = "none";
    reports.style.display = "none";
    postManage.style.display = "none";
  }

  function complaintManagement() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "block";
    settings.style.display = "none";
    reports.style.display = "none";
    postManage.style.display = "none";
  }

  function settings() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "none";
    settings.style.display = "block";
    reports.style.display = "none";
    postManage.style.display = "none";
  }
  function reports() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "none";
    settings.style.display = "none";
    reports.style.display = "block";
    postManage.style.display = "none";
  }
  function postManagement() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "none";
    settings.style.display = "none";
    reports.style.display = "none";
    postManage.style.display = "block";
  }

  return (
    <>
      <Topbar />
      <div className="admin">
        <div className="sideBar">
          <ul className="secretarySideBar">
            <li
              onClick={() => {
                homeownerReg();
              }}
            >
              Homeowner Registration
            </li>
            <li
              onClick={() => {
                accManagement();
              }}
            >
              Approval of Accounts
            </li>
            <li
              onClick={() => {
                complaintManagement();
              }}
            >
              Complaint Tickets
            </li>
            <li
              onClick={() => {
                postManagement();
              }}
            >
              Posts Management
            </li>


            <li>
              <button
                className="btnChevron"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings <i class="fa-solid fa-circle-chevron-right"></i>
              </button>
              <ul class="dropdown-menu">
                <li className="settingsDropdown">Amenities</li>
                <li className="settingsDropdown">Subdivision</li>
                <li className="settingsDropdown">Monthly Dues</li>
                <li className="settingsDropdown">System Accounts</li>
                <li className="settingsDropdown">Subdivision Officers</li>
              </ul>
            </li>
            <li
              onClick={() => {
                reports();
              }}
            >
              Reports
            </li>
          </ul>
        </div>
        <div className="adminPanel">
          <div className="homeownerRegistration" id="homeownerRegistration">
            <label className="lblRegistration">Registration</label>
            <HomeownerRegistration />
          </div>

          <div className="userManagement" id="userManagement">
            <label className="lblRegistration">Account Management</label>
            <MemberManagement />
          </div>

          <div className="postManagement" id="postManagement">
            <PostManagement />
          </div>

          <div className="complaintManagement" id="complaintManagement">
            <ComplaintManagement />
          </div>

          <div className="settings" id="settings">
            <Settings />
          </div>

          <div className="reports" id="reports">
            <Reports />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
