import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./treasurerPanel.css";


export default function TreasurerPanel() {

    
    
    function faciltyRent(){
      var facility = document.getElementById('facilityRenting');
      var dues = document.getElementById('monthlyDues');
      
      facility.style.display = 'block';
      dues.style.display = 'none';

   
    }

    function monthlyDues(){
      var facility = document.getElementById('facilityRenting');
      var dues = document.getElementById('monthlyDues');
      
      facility.style.display = 'none';
      dues.style.display = 'block';
    }
    
  return (
    <>
    <Topbar />
    <div className="treasurer">
      
        <div className="sideBar">
        <ul className="treasurerSideBar">
            <li id="facilty" onClick={()=>{faciltyRent()}}>Facility Renting</li>
            <li id="dues" onClick={()=>{monthlyDues()}}>Monthly Dues</li>
        </ul>
        </div>
    <div className="treasurerPanel">
    <div className="monthlyDues" id="monthlyDues">
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
        <input type="text" readOnly/>

        
        <button className="btnSubmitPost" name="submitPost" id="submitPost">Submit Payment</button>
      </div>
      
      <div class="table-responsive">
      <table id="dtBasicExample" class="table table-hover" cellspacing="0" width="100%">
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
      <div className="facilityRenting" id="facilityRenting">
      <div className="amenitiesForm">
        <label>Name:</label>
        <input type="text" name="name" id="name" />
        
        <div className="timeinput">
          <label>Time:</label>
          <input type="time" name="time" id="time"
            min="6:00" max="21:00" required  
          />
          <label>To</label>
          <input type="time" name="time2" id="time2"
            min="6:00:00" max="21:00:00" required  
          />
          <label >6:00am to 9:00pm only</label>
        </div>
        
        <label>Date:</label>
        <input type="date" />

        <label>Amenity:</label>
        <select name="amenity" id="amenity">
          <option value="Basketball Court">Basketball Court</option>
          <option value="Volleyball Court">Volleyball Court</option>
          <option value="Badminton Court">Badminton Court</option>
          <option value="Multi-purpose Hall">Multi-purpose Hall</option>
        </select>

        <label>Amount:</label>
        <input type="text" readOnly/>

        
        <button className="btnSubmitPost" name="submitPost" id="submitPost">Submit Reservation</button>
      </div>
      

      </div>
      </div>
    </div>
    
    <Footer/> 
    
    </>
   
  )
}
