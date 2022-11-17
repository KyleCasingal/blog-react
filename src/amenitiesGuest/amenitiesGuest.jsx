
import Footer from "../footer/Footer";
import "./amenitiesGuest.css";
import React, { useState } from "react";
import TopbarLanding from "../topbarLanding/TopBarLanding";


export default function AmenitiesGuest() {
 
  const [file, setFile] = useState();
  function handleChange(e){
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
    <TopbarLanding/>
    <div className='amenities'>
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
      <div className="paymentForm">
      <label className="writeText">Upload proof of payment here:</label>
          <div className="BlogWrite">
            <input className="attInput" type="file" id="image" accept="image/*" onChange={handleChange}></input>
            <img className="imagePrev" id="imagePreview" src={file} alt="" onError='this.style.display = "none"' /> 
          </div>
      <label for="image" className="upload">Upload Photo</label>
      </div>
    </div>
    <Footer/>
    </>
  )
}