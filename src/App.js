import BlogHome from "./blogHome/BlogHome";
import Login from "./login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landingPage/Landing";
import BlogWrite from "./blogWrite/BlogWrite";
import Amenities from "./amenities/amenities";
import AmenitiesGuest from "./amenitiesGuest/amenitiesGuest";
import TreasurerPanel from "./treasurerPanel/treasurerPanel";
import MemberPanel from "./memberPanel/memberPanel";
import AdminPanel from "./adminPanel/adminPanel";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/BlogHome" element={<BlogHome />}></Route>
          <Route path="/BlogWrite" element={<BlogWrite />}></Route>
          <Route path="/Amenities" element={<Amenities />}></Route>
          <Route path="/AmenitiesGuest" element={<AmenitiesGuest />}></Route>
          <Route path="/TreasurerPanel" element={<TreasurerPanel />}></Route>
          <Route path="/MemberPanel" element={<MemberPanel />}></Route>
          <Route path="/AdminPanel" element={<AdminPanel />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
