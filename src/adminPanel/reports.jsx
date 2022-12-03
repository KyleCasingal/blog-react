import ReportAmenities from "../reports/reportAmenities";
import ReportAuditTrail from "../reports/reportAuditTrail";
import ReportBilling from "../reports/reportBilling";
import ReportMonthlyDues from "../reports/reportMonthlyDues";

export default function Reports() {

  function Print(divName){
    var printContents = document.getElementById(divName).innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;

			window.print();

			document.body.innerHTML = originalContents;
  }
  
  function showReportAmenities() {
    var reportAmenities = document.getElementById("reportAmenities");
    var reportMonthlyDues = document.getElementById("reportMonthlyDues");
    var reportBilling = document.getElementById("reportBilling");
    var reportAuditTrail = document.getElementById("reportAuditTrail");
    

    reportAmenities.style.display = "block";
    reportMonthlyDues.style.display = "none";
    reportBilling.style.display = "none";
    reportAuditTrail.style.display = "none";
    
   }

   function showReportMonthlyDues() {
    var reportAmenities = document.getElementById("reportAmenities");
    var reportMonthlyDues = document.getElementById("reportMonthlyDues");
    var reportBilling = document.getElementById("reportBilling");
    var reportAuditTrail = document.getElementById("reportAuditTrail");
    

    reportAmenities.style.display = "none";
    reportMonthlyDues.style.display = "block";
    reportBilling.style.display = "none";
    reportAuditTrail.style.display = "none";
    
   }

   function showReportBilling() {
    var reportAmenities = document.getElementById("reportAmenities");
    var reportMonthlyDues = document.getElementById("reportMonthlyDues");
    var reportBilling = document.getElementById("reportBilling");
    var reportAuditTrail = document.getElementById("reportAuditTrail");
    

    reportAmenities.style.display = "none";
    reportMonthlyDues.style.display = "none";
    reportBilling.style.display = "block";
    reportAuditTrail.style.display = "none";
    
   }

   function showReportAuditTrail() {
    var reportAmenities = document.getElementById("reportAmenities");
    var reportMonthlyDues = document.getElementById("reportMonthlyDues");
    var reportBilling = document.getElementById("reportBilling");
    var reportAuditTrail = document.getElementById("reportAuditTrail");
    

    reportAmenities.style.display = "none";
    reportMonthlyDues.style.display = "none";
    reportBilling.style.display = "none";
    reportAuditTrail.style.display = "block";
    
   }


  return (
    <>
      <div className="reportsModule">
        <div className="buttonArea">
          <button type="submit" className="btnSubmitReg" onClick={()=>{showReportAmenities()}}>
            Amenity Renting
          </button>
          <button type="submit" className="btnSubmitReg" onClick={()=>{showReportMonthlyDues()}}>
            Paid Dues
          </button>
          <button type="submit" className="btnSubmitReg" onClick={()=>{showReportBilling()}}>
            Billing 
          </button>
          <button type="submit" className="btnSubmitReg" onClick={()=>{showReportAuditTrail()}}>
            Audit Trail
          </button>
          <button type="submit" className="btnPrint" onClick={()=>{Print("reportContainer")}}>
            Print
          </button>
        </div>
        <div className="reportContainer" id="reportContainer">

          <div className="reportAmenities" id="reportAmenities">
            <ReportAmenities />
          </div>

          <div className="reportMonthlyDues" id="reportMonthlyDues">
            <ReportMonthlyDues />
          </div>

          <div className="reportBilling" id="reportBilling">
            <ReportBilling />
          </div>

          <div className="reportAuditTrail" id="reportAuditTrail">
            <ReportAuditTrail />
          </div>
          
        </div>
      </div>
    </>
  );
}
