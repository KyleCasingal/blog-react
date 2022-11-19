import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./memberPanel.css";

export default function MemberPanel() {
  function profile() {
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");

    profile.style.display = "block";
    inbox.style.display = "none";
  }

  function inbox() {
    var profile = document.getElementById("profile");
    var inbox = document.getElementById("inbox");

    profile.style.display = "none";
    inbox.style.display = "block";
  }

  return (
    <>
      <Topbar />
      <div className="treasurer">
        <div className="sideBar">
          <ul className="memberSideBar">
            <li
              id="profileBtn"
              onClick={() => {
                profile();
              }}
            >
              Profile
            </li>
            <li
              id="inboxBtn"
              onClick={() => {
                inbox();
              }}
            >
              Inbox
            </li>
          </ul>
        </div>
        <div className="memberPanel">
          <div className="profileMem" id="profile">
            <label className="lblProfile">Member Profile</label>
            <div className="profileForm">
              <img
                className="profileImg"
                src="https://i.pinimg.com/736x/6a/6c/ca/6a6cca8ac5994554019c257af2b17b6a.jpg"
                alt=""
              />
              <table className="table tblProfile">
                <tbody>
                  <tr>
                    <td className="lbl">Name:</td>
                    <td className="data">Nene Yashiro</td>
                    <td className="editBtn">
                      <i className="fa-solid fa-pen fa-2x"></i>
                    </td>
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
                    <td className="data">
                      blk 1 lot 2 kingsroad st. Sunnyvale 2
                    </td>
                  </tr>
                  <tr>
                    <td className="lbl">Business Address:</td>
                    <td className="data">
                      blk 1 lot 2 kingsroad st. Sunnyvale 2
                    </td>
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
            </div>
            <div class="table-responsive">
              <label className="lblTable">Paid Monthly Dues</label>
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
          </div>

          <div className="inbox" id="inbox">
            <label className="inboxTitle">Messages</label>
            <div className="inboxContainer">
              <table className="tblMessage">
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
                <tr className="trInbox">
                  <td className="msgSender">Jane Doe</td>
                  <td className="msgDesc">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit sdasdasdasdsadas"
                  </td>
                  <td className="msgTime">9:00 pm</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
