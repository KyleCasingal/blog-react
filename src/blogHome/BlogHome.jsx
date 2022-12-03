import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./BlogHome.css";
import "./BlogWrite.css"
import postImg1 from "../img/postIMG/postImg1.jpg";
import postImg2 from "../img/postIMG/postImg2.jpg";
import postImg3 from "../img/postIMG/postImg3.jpg";
import postImg4 from "../img/postIMG/postImg4.jpg";
import postImg5 from "../img/postIMG/postImg5.jpg";
import postImg6 from "../img/postIMG/postImg6.jpg";
import profileImg1 from "../img/profileIMG/profile1.jpg";
import profileImg2 from "../img/profileIMG/profile2.jpg";
import profileImg3 from "../img/profileIMG/profile3.jpg";
import React, { useState } from "react";

export default function BlogHome() {
  function darkMode() {
    document.body.classList.toggle("dark");
  }

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Topbar />
      {/* BLOGHOME PAGE */}
      <div className="blogHome">
        <div className="blogScroll">
          <div className="blogHead">
            <p>Recent Posts</p>
            <button className="newPostBtn" data-bs-toggle="modal" data-bs-target="#addPostModal">
              <i class="fa-solid fa-circle-plus fa-2x"></i>
            </button>
            
          </div>

          {/* BLOG POST CONTAINERS */}
          <div className="blogPost">
            <div className="blogProfile">
              <img className="avatarBlog" src={profileImg1} alt="" />
              <div className="profileText">
                <label className="profileName">Elizabeth Mckinney</label>
                <label className="profileDate">4:57 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img className="blogImg" src={postImg1} alt=""></img>
              <p className="blogTitle">Lorem Ipsum</p>
              <p className="blogBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eu consectetur eros. Morbi non ex sed tellus tincidunt
                iaculis vitae id augue. Fusce laoreet ultrices libero id
                tristique. Nullam scelerisque maximus rutrum. Nam eu augue non
                leo sollicitudin vehicula ac at neque. Integer tempor gravida
                ex, vitae consectetur nisi fermentum ultrices. Donec luctus
                elementum neque, sit amet pellentesque elit eleifend a.
              </p>
            </div>
          </div>

          <div className="blogPost">
            <div className="blogProfile">
              <img className="avatarBlog" src={profileImg2} alt="" />
              <div className="profileText">
                <label className="profileName">Garth Dolton</label>
                <label className="profileDate">5:32 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img className="blogImg" src={postImg2} alt=""></img>
              <p className="blogTitle">Lorem Ipsum</p>
              <p className="blogBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eu consectetur eros. Morbi non ex sed tellus tincidunt
                iaculis vitae id augue. Fusce laoreet ultrices libero id
                tristique. Nullam scelerisque maximus rutrum. Nam eu augue non
                leo sollicitudin vehicula ac at neque. Integer tempor gravida
                ex, vitae consectetur nisi fermentum ultrices. Donec luctus
                elementum neque, sit amet pellentesque elit eleifend a.
              </p>
            </div>
          </div>

          <div className="blogPost">
            <div className="blogProfile">
              <img className="avatarBlog" src={profileImg3} alt="" />
              <div className="profileText">
                <label className="profileName">Ruby Todd</label>
                <label className="profileDate">5:57 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img className="blogImg" src={postImg3} alt=""></img>
              <p className="blogTitle">Lorem Ipsum</p>
              <p className="blogBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eu consectetur eros. Morbi non ex sed tellus tincidunt
                iaculis vitae id augue. Fusce laoreet ultrices libero id
                tristique. Nullam scelerisque maximus rutrum. Nam eu augue non
                leo sollicitudin vehicula ac at neque. Integer tempor gravida
                ex, vitae consectetur nisi fermentum ultrices. Donec luctus
                elementum neque, sit amet pellentesque elit eleifend a.
              </p>
            </div>
          </div>

          <div className="blogPost">
            <div className="blogProfile">
              <img className="avatarBlog" src={profileImg1} alt="" />
              <div className="profileText">
                <label className="profileName">Elizabeth Mckinney</label>
                <label className="profileDate">4:57 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img className="blogImg" src="" alt=""></img>
              <p className="blogTitle">Lorem Ipsum</p>
              <p className="blogBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eu consectetur eros. Morbi non ex sed tellus tincidunt
                iaculis vitae id augue. Fusce laoreet ultrices libero id
                tristique. Nullam scelerisque maximus rutrum. Nam eu augue non
                leo sollicitudin vehicula ac at neque. Integer tempor gravida
                ex, vitae consectetur nisi fermentum ultrices. Donec luctus
                elementum neque, sit amet pellentesque elit eleifend a.
              </p>
            </div>
          </div>

          <div className="blogPost">
            <div className="blogProfile">
              <img className="avatarBlog" src={profileImg2} alt="" />
              <div className="profileText">
                <label className="profileName">Garth Dolton</label>
                <label className="profileDate">5:32 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img className="blogImg" src="" alt=""></img>
              <p className="blogTitle">Lorem Ipsum</p>
              <p className="blogBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eu consectetur eros. Morbi non ex sed tellus tincidunt
                iaculis vitae id augue. Fusce laoreet ultrices libero id
                tristique. Nullam scelerisque maximus rutrum. Nam eu augue non
                leo sollicitudin vehicula ac at neque. Integer tempor gravida
                ex, vitae consectetur nisi fermentum ultrices. Donec luctus
                elementum neque, sit amet pellentesque elit eleifend a.
              </p>
            </div>
          </div>

          <div className="blogPost">
            <div className="blogProfile">
              <img className="avatarBlog" src={profileImg3} alt="" />
              <div className="profileText">
                <label className="profileName">Ruby Todd</label>
                <label className="profileDate">5:57 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img className="blogImg" src="" alt=""></img>
              <p className="blogTitle">Lorem Ipsum</p>
              <p className="blogBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eu consectetur eros. Morbi non ex sed tellus tincidunt
                iaculis vitae id augue. Fusce laoreet ultrices libero id
                tristique. Nullam scelerisque maximus rutrum. Nam eu augue non
                leo sollicitudin vehicula ac at neque. Integer tempor gravida
                ex, vitae consectetur nisi fermentum ultrices. Donec luctus
                elementum neque, sit amet pellentesque elit eleifend a.
              </p>
            </div>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="side">
          <div class="sideContent">
            <div className="sideText">
              <div className="categoriesText">
                <ul className="categoryList">
                  <li className="categoryListItem">LifeStyle</li>
                  <li className="categoryListItem">Food</li>
                  <li className="categoryListItem">Events</li>
                  <li className="categoryListItem">Sports</li>
                </ul>
              </div>
            </div>
          </div>
          <label className="darkmodeBtn">
            <label className="darkBtnTxt">Dark Mode</label>
            <input
              type="checkbox"
              id="checkbox"
              onClick={() => {
                darkMode();
              }}
            />
            <span className="check"></span>
          </label>
        </div>
      </div>
      <div className="footerDiv">
        <Footer />

        <div
        class="modal fade"
        id="addPostModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addPostModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addPostModalLabel">
                Add New Post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            <br></br>
          </div>
        </div>
      </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn submitPost">
                Submit Post
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
