export default function SettingsSubdivision() {
    return (
      <>
        {/* SUBDIVISION SECTION */}
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
                  <input type="text" placeholder="barangay" />
                </td>
              </tr>
              <tr>
                <td>Contact No:</td>
                <td>
                  <input type="text" placeholder="contact no" />
                </td>
              </tr>
              <tr>
                <td>Subdivision Image:</td>
                <td>
                  <input type="file" />{" "}
                  <button className="upload">Upload Image</button>
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
                <th>Contact No.</th>
              </thead>
              <tr>
                <td>Sunnyvale 1</td>
                <td>Pantok</td>
                <td>8123-4567</td>
              </tr>
              <tr>
                <td>Sunnyvale 2</td>
                <td>Palangoy</td>
                <td>8123-4567</td>
              </tr>
              <tr>
                <td>Sunnyvale 3</td>
                <td>Palangoy</td>
                <td>8123-4567</td>
              </tr>
              <tr>
                <td>Sunnyvale 4</td>
                <td>Pantok</td>
                <td>8123-4567</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
}