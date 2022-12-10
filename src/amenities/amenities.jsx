import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./amenities.css";
import React, { useState } from "react";

export default function Amenities() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Topbar />
      {/* AMENITIES FORM */}
      <div className="amenities">
        <div className="amenitiesForm">
          <label>Name:</label>
          <input type="text" name="name" id="name" />

          <div className="timeinput">
            <label>Time:</label>
            <input
              type="time"
              name="time"
              id="time"
              min="6:00"
              max="21:00"
              required
            />
            <label>To</label>
            <input
              type="time"
              name="time2"
              id="time2"
              min="6:00:00"
              max="21:00:00"
              required
            />
            <label>6:00am to 9:00pm only</label>
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
          <input type="text" readOnly />

          <button className="btnSubmitPost" name="submitPost" id="submitPost">
            Add Reservation
          </button>
        </div>
        <div className="paymentForm">
          <label className="writeText">Upload proof of payment here:</label>
          <div className="BlogWrite">
            <input
              className="attInput"
              type="file"
              id="image"
              accept="image/*"
              onChange={handleChange}
            ></input>
            <img
              className="imagePrev"
              id="imagePreview"
              src={file}
              alt=""
              onError='this.style.display = "none"'
            />
          </div>
          <label for="image" className="upload">
            Upload Photo
          </label>
        </div>
      </div>

      {/* CART */}
      <label className="lblRegistration">Cart</label>
      <table className="table tblAmenityCart">
        <thead>
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
          <th>Amenity</th>
          <th>Amount</th>
          <th>Payment Status</th>
        </thead>
        <tr>
          <td>
            <input className="tblCheck" type="checkbox" name="" id="" />
          </td>
          <td>Jane Doe</td>
          <td>6:00 pm to 8:00 pm</td>
          <td>11/22/2022</td>
          <td>Basketball Court</td>
          <td>300</td>
          <td>Fully Paid</td>
        </tr>
        <tr>
          <td>
            <input className="tblCheck" type="checkbox" name="" id="" />
          </td>
          <td>Jane Doe</td>
          <td>7:00 pm to 9:00 pm</td>
          <td>11/23/2022</td>
          <td>Basketball Court</td>
          <td>300</td>
          <td>Fully Paid</td>
        </tr>
        <tr>
          <td>
            <input className="tblCheck" type="checkbox" name="" id="" />
          </td>
          <td>Jane Doe</td>
          <td>7:00 pm to 8:00 pm</td>
          <td>11/24/2022</td>
          <td>Basketball Court</td>
          <td>300</td>
          <td>Fully Paid</td>
        </tr>
      </table>
      <div className="btnArea">
        <button type="submit" className="btnSubmitReg">
          Process Payment
        </button>

        <button type="submit" className="btnClearReg">
          Remove
        </button>
      </div>

      {/* SCHEDULED FACILITIES */}
      <label className="lblRegistration">Scheduled Amenities</label>
      <table className="table tblAmenityCart">
        <thead>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
          <th>Amenity</th>
          <th>Amount</th>
          <th>Payment Status</th>
        </thead>
        <tr>
          <td>Jane Doe</td>
          <td>6:00 pm to 8:00 pm</td>
          <td>11/22/2022</td>
          <td>Basketball Court</td>
          <td>300</td>
          <td>Fully Paid</td>
        </tr>
        <tr>
          <td>Jane Doe</td>
          <td>7:00 pm to 9:00 pm</td>
          <td>11/23/2022</td>
          <td>Basketball Court</td>
          <td>300</td>
          <td>Fully Paid</td>
        </tr>
        <tr>
          <td>Jane Doe</td>
          <td>7:00 pm to 8:00 pm</td>
          <td>11/24/2022</td>
          <td>Basketball Court</td>
          <td>300</td>
          <td>Fully Paid</td>
        </tr>
      </table>
      <Footer />
    </>
  );
}
