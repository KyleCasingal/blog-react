import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./secretaryPanel.css";

export default function MemberManagement() {
    return (
        <>
            <div className="tblContainer">
                <table className="table tblUser">
                    <thead>
                        <th>User ID</th>
                        <th>Fullname</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Account Status</th>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>Mon Carlo Delima</td>
                        <td>********</td>
                        <td>sample@gmail.com</td>
                        <td>activated</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mon Carlo Delima</td>
                        <td>********</td>
                        <td>sample@gmail.com</td>
                        <td>activated</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mon Carlo Delima</td>
                        <td>********</td>
                        <td>sample@gmail.com</td>
                        <td>activated</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mon Carlo Delima</td>
                        <td>********</td>
                        <td>sample@gmail.com</td>
                        <td>activated</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mon Carlo Delima</td>
                        <td>********</td>
                        <td>sample@gmail.com</td>
                        <td>activated</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mon Carlo Delima</td>
                        <td>********</td>
                        <td>sample@gmail.com</td>
                        <td>activated</td>
                    </tr>
                </table>

            </div>
            <div className="btnArea">
                <button type="submit" className="btnSubmitReg">
                    Activate
                </button>


                <button type="reset" value="reset" className="btnClearReg">
                    Deactivate
                </button>
            </div>


        </>
    );
}
