
import "./secretaryPanel.css";

export default function HomeownerRegistration() {
  return (
    <>
      <div className="regForm">
        <table>
          <tr>
            <td>First Name:</td>
            <td>
              <input type="text" name="" id="" placeholder="first name" />
            </td>
            <td>Date of Birth:</td>
            <td>
              <input type="date" name="" id="" />
            </td>
          </tr>
          <tr>
            <td>Middle Name:</td>
            <td>
              <input type="text" name="" id="" placeholder="middle name" />
            </td>
            <td>Gender</td>
            <td>
              <select name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input type="text" name="" id="" placeholder="last name" />
            </td>
            <td>Email:</td>
            <td>
              <input type="text" name="" id="" placeholder="email" />
            </td>
          </tr>
          <tr>
            <td>Residence Address:</td>
            <td>
              <input type="text" name="" id="" placeholder="Lot and Block" />
            </td>
            <td>
              <select name="" id="">
                <option value="Sunnyvale 1">Sunnyvale 1</option>
                <option value="Sunnyvale 2">Sunnyvale 2</option>
                <option value="Sunnyvale 3">Sunnyvale 3</option>
                <option value="Sunnyvale 4">Sunnyvale 4</option>
              </select>
            </td>
            <td>
              <select name="" id="">
                <option value="Palangoy">Palangoy</option>
                <option value="Pantok">Pantok</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Business Address:</td>
            <td>
              <input
                type="text"
                name=""
                id=""
                placeholder="input business address"
              />
            </td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>
              <input type="text" name="" id="" placeholder="mobile no." />
            </td>
          </tr>
          <tr>
            <td>Occupation:</td>
            <td>
              <input type="text" name="" id="" placeholder="occupation" />
            </td>
          </tr>
          <tr>
            <td>Employer:</td>
            <td>
              <input type="text" name="" id="" placeholder="employer" />
            </td>
            <td>
              <button type="submit" className="btnSubmitReg">
                Submit
              </button>
            </td>
            <td>
              <button type="reset" value="reset" className="btnClearReg">
                Clear
              </button>
            </td>
          </tr>
        </table>
      </div>
      <label className="lblRegistration">Registered Home</label>
      <div className="tblContainer">
        <table className="tblHomeowners table-hover">
          <thead>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Residence Address</th>
            <th>Business Address</th>
            <th>Mobile Number</th>
            <th>Occupation</th>
            <th>Employer</th>
          </thead>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>Elizabeth B. Mckinney</td>
            <td>Jan 1, 2001</td>
            <td>Female</td>
            <td>sample@gmail.com</td>
            <td>lot1 block2, Sunnyvale 1, Palangoy</td>
            <td>NA</td>
            <td>09123456789</td>
            <td>NA</td>
            <td>NA</td>
          </tr>
        </table>
      </div>
    </>
  );
}
