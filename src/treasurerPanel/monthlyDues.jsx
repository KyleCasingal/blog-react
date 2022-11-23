
import "./treasurerPanel.css";

export default function MonthlyDues() {
    return(
        <>
            <div className="treasurerForm">
              <label>Name:</label>
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
              <input type="text" readOnly />

              <button
                className="btnSubmitPost"
                name="submitPost"
                id="submitPost"
              >
                Submit Payment
              </button>
            </div>

            <div class="table-responsive">
              <table
                id="dtBasicExample"
                class="table table-hover"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jane Doe</td>
                    <td>October</td>
                    <td>2022</td>
                    <td>blk 1 lot 2</td>
                  </tr>
                  <tr>
                    <td>Jane Doe</td>
                    <td>October</td>
                    <td>2022</td>
                    <td>blk 1 lot 2</td>
                  </tr>
                  <tr>
                    <td>Jane Doe</td>
                    <td>October</td>
                    <td>2022</td>
                    <td>blk 1 lot 2</td>
                  </tr>
                  <tr>
                    <td>Jane Doe</td>
                    <td>October</td>
                    <td>2022</td>
                    <td>blk 1 lot 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </>
    );
}