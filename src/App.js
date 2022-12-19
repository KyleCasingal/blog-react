import BlogHome from "./blogHome/BlogHome";
import Login from "./login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landingPage/Landing";
import Amenities from "./amenities/amenities";
import AmenitiesGuest from "./amenitiesGuest/amenitiesGuest";
import TreasurerPanel from "./treasurerPanel/treasurerPanel";
import MemberPanel from "./memberPanel/memberPanel";
import AdminPanel from "./adminPanel/adminPanel";
import ReportAmenities from "./reports/reportAmenities";
import ReportMonthlyDues from "./reports/reportMonthlyDues";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* BEFORE LOGIN */}
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/AmenitiesGuest" element={<AmenitiesGuest />}></Route>

          {/* MAIN CONTENT */}
          <Route path="/BlogHome" element={<BlogHome />}></Route>
          <Route path="/Amenities" element={<Amenities />}></Route>
          <Route path="/MemberPanel" element={<MemberPanel />}></Route>
          
          {/* SYSTEM ACCOUNT PANELS */}
          <Route path="/TreasurerPanel" element={<TreasurerPanel />}></Route>
          <Route path="/AdminPanel" element={<AdminPanel />}></Route>

          {/* REPORTS */}
          <Route path="/ReportAmenities" element={<ReportAmenities />}></Route>
          <Route path="/ReportMonthlyDues" element={<ReportMonthlyDues />}></Route>

          {/* SETTINGS */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
