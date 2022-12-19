import "./adminPanel.css"

export default function SettingsAccounts() {
    return (
      <>
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
                Add account
              </button>

              <button type="submit" className="btnClearReg">
                Update account
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
      </>
    );
}