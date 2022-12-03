import profile1 from "../img/profileIMG/profile1.jpg";

export default function MemberProfile() {
  return (
    <>
      <label className="lblProfile">Member Profile</label>
      <div className="profileForm">
        <img
          className="profileImg"
          src={profile1}
          alt=""
        />
        
        <table className="table tblProfile">
          
          <tbody>
            <tr>
              <td className="lbl">Name:</td>
              <td className="data">Elizabeth Mckinney</td>
            </tr>
            <tr>
              <td className="lbl">Date of Birth:</td>
              <td className="data">January 1, 2001</td>
            </tr>
            <tr>
              <td className="lbl">Gender:</td>
              <td className="data">Female</td>
            </tr>
            <tr>
              <td className="lbl">Residence Address:</td>
              <td className="data">blk 1 lot 2 kingsroad st. Sunnyvale 2</td>
            </tr>
            <tr>
              <td className="lbl">Business Address:</td>
              <td className="data">blk 1 lot 2 kingsroad st. Sunnyvale 2</td>
            </tr>
            <tr>
              <td className="lbl">Occupation:</td>
              <td className="data">None</td>
            </tr>
            <tr>
              <td className="lbl">Email:</td>
              <td className="data">sample@gmail.com</td>
            </tr>
            <tr>
              <td className="lbl">Mobile Number:</td>
              <td className="data">09123456789</td>
            </tr>
          </tbody>
        </table>
        <button className="editBtnProfile"><i className="fa-solid fa-pen fa-2x"></i></button>
        
      </div>
      <div class="table-responsive">
        <label className="lblTable">Paid Monthly Dues</label>
        <table
          id="dtBasicExample"
          class="tblPaidMonthly table-hover"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th>Address</th>
              <th>Amount Paid</th>
              <th>Date Paid</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </>
  );
}
