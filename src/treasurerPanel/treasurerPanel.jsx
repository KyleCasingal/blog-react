import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./treasurerPanel.css";
import MonthlyDues from "./monthlyDues";
import FacilityRentingTR from "./facilityRentingTR";

export default function TreasurerPanel() {
  function showFaciltyRent() {
    var facility = document.getElementById("facilityRenting");
    var dues = document.getElementById("monthlyDues");

    facility.style.display = "block";
    dues.style.display = "none";
  }

  function showMonthlyDues() {
    var facility = document.getElementById("facilityRenting");
    var dues = document.getElementById("monthlyDues");

    facility.style.display = "none";
    dues.style.display = "block";
  }

  return (
    <>
      <Topbar />
      <div className="treasurer">
        <div className="sideBar">
          <ul className="treasurerSideBar">
            <li
              id="facilty"
              onClick={() => {
                showFaciltyRent();
              }}
            >
              Facility Renting
            </li>
            <li
              id="dues"
              onClick={() => {
                showMonthlyDues();
              }}
            >
              Monthly Dues
            </li>
          </ul>
        </div>
        <div className="treasurerPanel">
          <div className="monthlyDues" id="monthlyDues">
            <MonthlyDues />
          </div>
          <div className="facilityRenting" id="facilityRenting">
            <FacilityRentingTR />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
