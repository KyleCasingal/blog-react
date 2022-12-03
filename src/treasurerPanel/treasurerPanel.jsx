import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./treasurerPanel.css";
import MonthlyDues from "./monthlyDues";
import FacilityRentingTR from "./facilityRentingTR";
import Billing from "./billing";

export default function TreasurerPanel() {
  function showFaciltyRent() {
    var facility = document.getElementById("facilityRenting");
    var dues = document.getElementById("monthlyDues");
    var bills = document.getElementById("billing");

    facility.style.display = "block";
    dues.style.display = "none";
    bills.style.display = "none";

  }

  function showMonthlyDues() {
    var facility = document.getElementById("facilityRenting");
    var dues = document.getElementById("monthlyDues");
    var bills = document.getElementById("billing");

    facility.style.display = "none";
    dues.style.display = "block";
    bills.style.display = "none";
  }

  function showBilling() {
    var facility = document.getElementById("facilityRenting");
    var dues = document.getElementById("monthlyDues");
    var bills = document.getElementById("billing");

    facility.style.display = "none";
    dues.style.display = "none";
    bills.style.display = "block";

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
            <li id="bill" onClick={()=>{showBilling()}}>Billing</li>
          </ul>
        </div>
        <div className="treasurerPanel">
          <div className="monthlyDues" id="monthlyDues">
            <MonthlyDues />
          </div>
          <div className="facilityRenting" id="facilityRenting">
            <FacilityRentingTR />
          </div>
          <div className="billing" id="billing">
            <Billing />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
