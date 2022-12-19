export default function SettingsOfficers() {
    return (
      <>
        {/* SUBDIVISION OFFICERS SECTION */}
        <label className="lblSettings">Subivision Officers</label>
        <div className="settingsOfficers">
          <div className="addAmenityForm">
            <table className="tblAmenityForm">
              <tr>
                <td>Officer Name:</td>
                <td>
                  <input type="text" placeholder="officer name" />
                </td>
              </tr>
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
                <td>Position:</td>
                <td>
                  <select name="" id="">
                    <option value="President">President</option>
                    <option value="Vice President">VicePresident</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Treasurer">Treasurer</option>
                    <option value="Auditor">Auditor</option>
                    <option value="PIO">PIO</option>
                    <option value="Sgt.at Arms">Sgt.at Arms</option>
                  </select>
                </td>
              </tr>
            </table>
            <div className="btnArea">
              <button type="submit" className="btnSubmitReg">
                Add officer
              </button>

              <button type="submit" className="btnClearReg">
                Update officer
              </button>
            </div>
          </div>
          <div className="tblAmenityContainer">
            <table className="table tblAmenity">
              <thead>
                <th>Officer Name</th>
                <th>Subdivision</th>
                <th>Position</th>
              </thead>
              <tr>
                <td>Sadie Wheeler</td>
                            <td>Sunnyvale 1</td>
                            <td>President</td>
              </tr>
              <tr>
                <td>Bennett Cooke</td>
                <td>Sunnyvale 1</td>
                <td>Vice President</td>
              </tr>
              <tr>
                <td>Martin Craig</td>
                <td>Sunnyvale 1</td>
                <td>Secretary</td>
              </tr>
              <tr>
                <td>Audrey Benson</td>
                <td>Sunnyvale 1</td>
                <td>Treasurer</td>
              </tr>
              <tr>
                <td>Ruth Walsh</td>
                <td>Sunnyvale 1</td>
                <td>Auditor</td>
              </tr>
              <tr>
                <td>Hadley Steele</td>
                <td>Sunnyvale 1</td>
                <td>PIO</td>
              </tr>
              <tr>
                <td>Hadley Steele</td>
                <td>Sunnyvale 1</td>
                <td>Sgt.at Arms</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
}