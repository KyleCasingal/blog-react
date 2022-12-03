export default function ReportBilling() {
    return(
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
            <label className="tblTitle">Billing</label>
            <table className="tblReportData">
            <thead>
            <tr>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th>Status</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Elizabeth Mckinney</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
            <tr>
              <td>Elizabeth Mckinney</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
            <tr>
              <td>Elizabeth Mckinney</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
            <tr>
              <td>Elizabeth Mckinney</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
          </tbody>
            </table>
          </div>
        </div>
      </div>
        </>
    );
}