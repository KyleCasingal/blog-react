export default function SettingsMonthlyDues() {
    return (
      <>
        {/* MONTHLY DUES SECTION */}
        <label className="lblSettings">Monthly Dues</label>
        <div className="settingsMonthlyDues">
          <div className="addAmenityForm">
            <table className="tblAmenityForm">
              <tr>
                <td>Subdivision:</td>
                <td>
                  <select name="" id="">
                    <option value="Sunnyvale 1">Sunnyvale 1</option>
                    <option value="Sunnyvale 2">Sunnyvale 2</option>
                    <option value="Sunnyvale 3">Sunnyvale 3</option>
                    <option value="Sunnyvale 4">Sunnyvale 4</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Monthly Dues Amount:</td>
                <td>
                  <input type="text" placeholder="monthly rate" />
                </td>
              </tr>
            </table>
            <div className="btnArea">
              <button type="submit" className="btnSubmitReg">
                Add amount
              </button>

              <button type="submit" className="btnClearReg">
                Update Amount
              </button>
            </div>
          </div>
          <div className="tblAmenityContainer">
            <table className="table tblAmenity">
              <thead>
                <th>Subdivision</th>
                <th>Amount</th>
                <th>Updated at</th>
              </thead>
              <tr>
                <td>Sunnyvale 1</td>
                <td>200</td>
                <td>11/24/2022</td>
              </tr>
              <tr>
                <td>Sunnyvale 2</td>
                <td>200</td>
                <td>11/19/2022</td>
              </tr>
              <tr>
                <td>Sunnyvale 3</td>
                <td>200</td>
                <td>11/22/2022</td>
              </tr>
              <tr>
                <td>Sunnyvale 4</td>
                <td>200</td>
                <td>11/16/2022</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
}