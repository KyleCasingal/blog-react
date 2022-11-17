import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./BlogWrite.css";
import React, { useState } from "react";

export default function BlogWrite() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Topbar />
      <div className="writeBlog">
        <div className="writeBlogPage">
          <div className="formBlog">
            <label className="writeText">Add Photos</label>
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
            <label>Title</label>
            <input type="text" name="title" id="title" />

            <label>Description</label>
            <textarea
              className="descInput"
              type="text"
              name="desc"
              id="desc"
              maxLength={500}
            />

            <label>Tags</label>
            <input type="text" />

            <button className="btnSubmitPost" name="submitPost" id="submitPost">
              Submit
            </button>
            <br></br>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
