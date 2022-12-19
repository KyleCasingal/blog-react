import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./adminPanel.css";
import HomeownerRegistration from "./homeownerRegistration";
import MemberManagement from "./userManagement";
import ComplaintManagement from "./complaintManagement";
import Settings from "./settings";
import Reports from "./reports";
import PostManagement from "./postManagement";

import SettingsAmenities from "./settingsAmenities.jsx";
import SettingsSubdivision from "./settingsSubdivision.jsx";
import SettingsDues from "./settingsDues.jsx";
import SettingsAccounts from "./settingsAccounts.jsx";
import SettingsOfficers from "./settingsOfficers.jsx";

export default function AdminPanel() {
  function homeownerReg() {
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");
    var settings = document.getElementById("settings");
    var reports = document.getElementById("reports");
    var postManage = document.getElementById("postManagement");
     var nonSettings = document.getElementById("nonSettings");

     nonSettings.style.display = "block";
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
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "block";
    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "block";
    settings.style.display = "none";
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
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "block";
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
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "block";
    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "none";
    settings.style.display = "none";
    reports.style.display = "none";
    postManage.style.display = "block";
  }

function AMENITIES() {
    var AMENITIES = document.getElementById("AMENITIES");
    var SUBDIVISION = document.getElementById("SUBDIVISION");
    var DUES = document.getElementById("DUES");
    var SYSTEM_ACCOUNTS = document.getElementById("SYSTEM-ACCOUNTS");
    var OFFICERS = document.getElementById("OFFICERS");
    var settings = document.getElementById("settings");
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "none";
    settings.style.display = "block";
    AMENITIES.style.display = "block";
    SUBDIVISION.style.display = "none";
    DUES.style.display = "none";
    SYSTEM_ACCOUNTS.style.display = "none";
    OFFICERS.style.display = "none";
    
  }

  function SUBDIVISION() {
    var AMENITIES = document.getElementById("AMENITIES");
    var SUBDIVISION = document.getElementById("SUBDIVISION");
    var DUES = document.getElementById("DUES");
    var SYSTEM_ACCOUNTS = document.getElementById("SYSTEM-ACCOUNTS");
    var OFFICERS = document.getElementById("OFFICERS");
    var settings = document.getElementById("settings");
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "none";
    settings.style.display = "block";
    AMENITIES.style.display = "none";
    SUBDIVISION.style.display = "block";
    DUES.style.display = "none";
    SYSTEM_ACCOUNTS.style.display = "none";
    OFFICERS.style.display = "none";
  }

  function DUES() {
    var AMENITIES = document.getElementById("AMENITIES");
    var SUBDIVISION = document.getElementById("SUBDIVISION");
    var DUES = document.getElementById("DUES");
    var SYSTEM_ACCOUNTS = document.getElementById("SYSTEM-ACCOUNTS");
    var OFFICERS = document.getElementById("OFFICERS");
    var settings = document.getElementById("settings");
    var nonSettings = document.getElementById("nonSettings")

    nonSettings.style.display = "none";
    settings.style.display = "block";
    AMENITIES.style.display = "none";
    SUBDIVISION.style.display = "none";
    DUES.style.display = "block";
    SYSTEM_ACCOUNTS.style.display = "none";
    OFFICERS.style.display = "none";
  }

  function SYSTEM_ACCOUNTS() {
    var AMENITIES = document.getElementById("AMENITIES");
    var SUBDIVISION = document.getElementById("SUBDIVISION");
    var DUES = document.getElementById("DUES");
    var SYSTEM_ACCOUNTS = document.getElementById("SYSTEM-ACCOUNTS");
    var OFFICERS = document.getElementById("OFFICERS");
    var settings = document.getElementById("settings");
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "none";
    settings.style.display = "block";
    AMENITIES.style.display = "none";
    SUBDIVISION.style.display = "none";
    DUES.style.display = "none";
    SYSTEM_ACCOUNTS.style.display = "block";
    OFFICERS.style.display = "none";
  }

  function OFFICERS() {
    var AMENITIES = document.getElementById("AMENITIES");
    var SUBDIVISION = document.getElementById("SUBDIVISION");
    var DUES = document.getElementById("DUES");
    var SYSTEM_ACCOUNTS = document.getElementById("SYSTEM-ACCOUNTS");
    var OFFICERS = document.getElementById("OFFICERS");
    var settings = document.getElementById("settings");
    var nonSettings = document.getElementById("nonSettings");

    nonSettings.style.display = "none";
    settings.style.display = "block";
    AMENITIES.style.display = "none";
    SUBDIVISION.style.display = "none";
    DUES.style.display = "none";
    SYSTEM_ACCOUNTS.style.display = "none";
    OFFICERS.style.display = "block";
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
                <li
                  className="settingsDropdown"
                  onClick={() => {
                    AMENITIES();
                  }}
                >
                  Amenities
                </li>
                <li
                  className="settingsDropdown"
                  onClick={() => {
                    SUBDIVISION();
                  }}
                >
                  Subdivision
                </li>
                <li
                  className="settingsDropdown"
                  onClick={() => {
                    DUES();
                  }}
                >
                  Monthly Dues
                </li>
                <li
                  className="settingsDropdown"
                  onClick={() => {
                    SYSTEM_ACCOUNTS();
                  }}
                >
                  System Accounts
                </li>
                <li
                  className="settingsDropdown"
                  onClick={() => {
                    OFFICERS();
                  }}
                >
                  Subdivision Officers
                </li>
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
          <div className="nonSettings" id="nonSettings">
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
            <div className="reports" id="reports">
            <Reports />
          </div>

          </div>
          

          <div className="settings" id="settings">
             {/* AMENITIES SECTION */}
            <div className="AMENITIES" id="AMENITIES">
              <SettingsAmenities />
            </div>

            {/* SUBDIVISION SECTION */}
            <div className="SUBDIVISION" id="SUBDIVISION"> 
              <SettingsSubdivision />
            </div>

            {/* MONTHLY DUES SECTION */}
            <div className="DUES" id="DUES">
              <SettingsDues />
            </div>

            {/* SYSTEM ACCOUNTS SECTION */}
            <div className="SYSTEM-ACCOUNTS" id="SYSTEM-ACCOUNTS">
              <SettingsAccounts />
            </div>

            {/* SUBDIVISION OFFICERS SECTION */}
            <div className="OFFICERS" id="OFFICERS">
              <SettingsOfficers />
            </div>
          </div>
           
          

          
        </div>
      </div>
      <Footer />
    </>
  );
}
