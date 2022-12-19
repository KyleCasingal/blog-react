import "./adminPanel.css";

export default function SettingsAmenities() {
    return (
      <>
        {/* AMENITIES SECTION */}
        <label className="lblSettings">Amenities</label>
        <div className="settingsAddAmenity" id="AddAmenity">
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
                <th>Subdivision</th>
                <th>Amenity</th>
                <th>Rate</th>
                <th>Availabiliity</th>
              </thead>
              <tr>
                <td>Sunnyvale 1</td>
                <td>BasketBall Court</td>
                <td>150</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Sunnyvale 2</td>
                <td>Multi-purpose hall</td>
                <td>200</td>
                <td>Available</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
}