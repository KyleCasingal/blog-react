import "./treasurerPanel.css";

export default function Billing() {
  return (
    <>
      <div className="treasurerForm">
        {/* <label>Name:</label>
        <input type="text" name="name" id="name" />

        <div className="date">
          <label>Month:</label>
          <select name="month" id="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <label>Year:</label>
          <select name="year" id="year">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>

        <label>Block and Lot Number:</label>
        <input type="text" readOnly /> */}
        <div className="billingInput">
            <label>Generate Billing by:</label>
            <select name="month" id="month">
            <option value="month" disabled hidden>Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select name="year" id="year">
            <option value="Year" disabled hidden>Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        
        <button className="btnSubmitPost" name="submitPost" id="submitPost">
          Generate Billing
        </button>
      </div>
      <label className="lblRegistration">Issued Billings</label>
      <div class="table-responsive">
        
        <table
          id="dtBasicExample"
          class="table tblDues"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>
                <input className="tblCheck" type="checkbox" name="" id="" />
              </th>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th>Status</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="tblCheck" type="checkbox" name="" id="" />
              </td>
              <td>Jane Doe</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
            <tr>
              <td>
                <input className="tblCheck" type="checkbox" name="" id="" />
              </td>
              <td>Jane Doe</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
            <tr>
              <td>
                <input className="tblCheck" type="checkbox" name="" id="" />
              </td>
              <td>Jane Doe</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
            <tr>
              <td>
                <input className="tblCheck" type="checkbox" name="" id="" />
              </td>
              <td>Jane Doe</td>
              <td>October</td>
              <td>2022</td>
              <td>Pending</td>
              
            </tr>
          </tbody>
        </table>

        {/* BUTTONS */}
        {/* <div className="btnArea">
          <button type="submit" className="btnSubmitReg">
            Checkout
          </button>

          <button type="submit" className="btnClearReg">
            Remove from cart
          </button>
        </div> */}
      </div> 
    </>
  );
}
