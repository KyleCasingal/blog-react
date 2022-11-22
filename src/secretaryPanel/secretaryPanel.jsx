import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./secretaryPanel.css";
import HomeownerRegistration from "./homeownerRegistration";
import MemberManagement from "./userManagement";
import ComplaintManagement from "./complaintManagement";
export default function SecretaryPanel() {

  function homeownerReg(){
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");

    homeownerReg.style.display = "block";
    userManage.style.display = "none";
    complaintManage.style.display = "none";
  }

  function accManagement(){
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "block";
    complaintManage.style.display = "none";
  }

  function complaintManagement(){
    var homeownerReg = document.getElementById("homeownerRegistration");
    var userManage = document.getElementById("userManagement");
    var complaintManage = document.getElementById("complaintManagement");

    homeownerReg.style.display = "none";
    userManage.style.display = "none";
    complaintManage.style.display = "block";
  }


  return (
    <>
      <Topbar />
      <div className="secretary">
        <div className="sideBar">
          <ul className="secretarySideBar">
            <li onClick={()=>{homeownerReg()}}>Homeowner Registration</li>
            <li onClick={()=>{accManagement()}}>Approval of Accounts</li>
            <li onClick={()=>{complaintManagement()}}>Complaint Tickets</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="secretaryPanel">
          <div className="homeownerRegistration" id="homeownerRegistration">
            <label className="lblRegistration">Registration</label>
            <HomeownerRegistration />
          </div>
          <div className="userManagement" id="userManagement">
          <label className="lblRegistration">Account Management</label>
            <MemberManagement/>
          </div>
          <div className="complaintManagement" id="complaintManagement">
            <ComplaintManagement />
          </div>
            
          
        </div>
      </div>
      <Footer />
    </>
  );
}
