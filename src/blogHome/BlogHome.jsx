import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./BlogHome.css";
import postImg1 from "../img/postIMG/postImg1.jpg";
import postImg2 from "../img/postIMG/postImg2.jpg";
import postImg3 from "../img/postIMG/postImg3.jpg";
import postImg4 from "../img/postIMG/postImg4.jpg";
import postImg5 from "../img/postIMG/postImg5.jpg";
import postImg6 from "../img/postIMG/postImg6.jpg";
import profileImg1 from "../img/profileIMG/profile1.jpg";
import profileImg2 from "../img/profileIMG/profile2.jpg";
import profileImg3 from "../img/profileIMG/profile3.jpg";

export default function BlogHome() {
  function darkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <>
      <Topbar />
      {/* BLOGHOME PAGE */}
      <div className="blogHome">
        <div className="blogScroll">
          <div className="blogHead">
            <p>Recent Posts</p>
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
      </div>
    </>
  );
}
