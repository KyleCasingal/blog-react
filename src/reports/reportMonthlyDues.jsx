import "./reports.css";

export default function ReportMonthlyDues() {
  return (
    <>
      <div className="reportBody">
        <div className="reportPage">
          <div className="head">
            <label className="reportHeader">
              Sunnyvale Home Owners Association
            </label>
            <label className="reportSubtext">
              Sunnyvale Subdivision Compound, Binangonan, Rizal
            </label>
          </div>
          <div className="reportContainer">
            <label className="tblTitle">Monthly Dues Payments</label>
            <table className="tblReportData">
              <thead>
                <th>Name</th>
                <th>Month</th>
                <th>Year</th>
                <th>Address</th>
                <th>Amount Paid</th>
                <th>Date Paid</th>
              </thead>
              <tr>
                <td>Elizabeth Mckinney</td>
                <td>October</td>
                <td>2022</td>
                <td>blk 1 lot 2</td>
                <td>200</td>
                <td>12/04/2022</td>
              </tr>
              <tr>
                <td>Elizabeth Mckinney</td>
                <td>October</td>
                <td>2022</td>
                <td>blk 1 lot 2</td>
                <td>200</td>
                <td>12/04/2022</td>
              </tr>
              <tr>
                <td>Elizabeth Mckinney</td>
                <td>October</td>
                <td>2022</td>
                <td>blk 1 lot 2</td>
                <td>200</td>
                <td>12/04/2022</td>
              </tr>
              <tr>
                <td>Elizabeth Mckinney</td>
                <td>October</td>
                <td>2022</td>
                <td>blk 1 lot 2</td>
                <td>200</td>
                <td>12/04/2022</td>
              </tr>
              <tr>
                <td>Elizabeth Mckinney</td>
                <td>October</td>
                <td>2022</td>
                <td>blk 1 lot 2</td>
                <td>200</td>
                <td>12/04/2022</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
