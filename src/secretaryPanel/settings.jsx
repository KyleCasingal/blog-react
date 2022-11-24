export default function Settings() {


  return (
    <>
      <label className="lblSettings" id="amenity">Amenities</label>
      <div className="settingsAddAmenity" id="AddAmenity">
        <div className="addAmenityForm">
          <table className="tblAmenityForm">
            <tr>
              <td>Amenity:</td>
              <td>
                <input type="text" placeholder="new amenity" />
              </td>
            </tr>
            <tr>
              <td>Amenity Rate Per Hour:</td>
              <td>
                <input type="text" placeholder="rate per hour" />
              </td>
            </tr>
            <tr>
              <td>Availability:</td>
              <td>
                <select name="" id="">
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </td>
            </tr>
          </table>
          <div className="btnArea">
            <button type="submit" className="btnSubmitReg">
              Add amenity
            </button>

            <button type="submit" className="btnClearReg">
              Update Amenity
            </button>
          </div>
        </div>
        <div className="tblAmenityContainer">
          <table className="table tblAmenity">
            <thead>
              <th>Amenity</th>
              <th>Rate</th>
              <th>Availabiliity</th>
            </thead>
            <tr>
              <td>BasketBall Court</td>
              <td>150</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Multi-purpose hall</td>
              <td>200</td>
              <td>Available</td>
            </tr>
          </table>
        </div>
      </div>

      <label className="lblSettings">Subdivisions</label>
      <div className="settingsAddSubdivision">
      <div className="addAmenityForm">
          <table className="tblAmenityForm">
            <tr>
              <td>Subdivision:</td>
              <td>
                <input type="text" placeholder="new subdivision" />
              </td>
            </tr>
            <tr>
              <td>Barangay:</td>
              <td>
                <input type="text" placeholder="barangay"/>
              </td>
            </tr>
          </table>
          <div className="btnArea">
            <button type="submit" className="btnSubmitReg">
              Add Subdivision
            </button>

            <button type="submit" className="btnClearReg">
              Update Subdivision
            </button>
          </div>
        </div>
        <div className="tblAmenityContainer">
          <table className="table tblAmenity">
            <thead>
              <th>Subdivision</th>
              <th>Barangay</th>
            </thead>
            <tr>
              <td>Sunnyvale 1</td>
              <td>Pantok</td>
            </tr>
            <tr>
              <td>Sunnyvale 2</td>
              <td>Palangoy</td>
            </tr>
            <tr>
              <td>Sunnyvale 3</td>
              <td>Palangoy</td>
            </tr>
            <tr>
              <td>Sunnyvale 4</td>
              <td>Pantok</td>
            </tr>
          </table>
      </div>
      </div>

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

      <label className="lblSettings">System Accounts</label>
      <div className="settingsSystemAccounts">
      <div className="addAmenityForm">
          <table className="tblAmenityForm">
            <tr>
              <td>System Account:</td>
              <td>
                <input type="text" placeholder="account name" />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input type="text" placeholder="password" />
              </td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td>
                <input type="text" placeholder="password" />
              </td>
            </tr>
            <tr>
              <td>Account Type:</td>
              <td>
                <select name="" id="">
                  <option value="Admin">Admin</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Treasurer">Treasurer</option>
                </select>
              </td>
            </tr>
          </table>
          <div className="btnArea">
            <button type="submit" className="btnSubmitReg">
              Add Officer
            </button>

            <button type="submit" className="btnClearReg">
              Update Officer
            </button>
          </div>
        </div>
        <div className="tblAmenityContainer">
          <table className="table tblAmenity">
            <thead>
              <th>Account Name</th>
              <th>Password</th>
              <th>Account Type</th>
            </thead>
            <tr>
              <td>SV1_Admin</td>
              <td>*********</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>SV1_Secretary</td>
              <td>*********</td>
              <td>Secretary</td>
            </tr>
            <tr>
              <td>SV1_Treasurer</td>
              <td>*********</td>
              <td>Secretary</td>
            </tr>
            <tr>
              <td>SV2_Admin</td>
              <td>*********</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>SV2_Secretary</td>
              <td>*********</td>
              <td>Secretary</td>
            </tr>
            <tr>
              <td>SV2_Treasurer</td>
              <td>*********</td>
              <td>Treasurer</td>
            </tr>
          </table>
        </div>
      </div>

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
              Add account
            </button>

            <button type="submit" className="btnClearReg">
              Update Account
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
