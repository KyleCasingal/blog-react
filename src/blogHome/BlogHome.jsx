import Topbar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import "./BlogHome.css";

export default function BlogHome() {
  function darkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <>
      <Topbar />
      <div className="blogHome">
        <div className="blogScroll">
          <div className="blogHead">
            <p>Recent Posts</p>
          </div>
          <div className="blogPost">
            <div className="blogProfile">
              <img
                className="avatarBlog"
                src="https://i.pinimg.com/736x/6a/6c/ca/6a6cca8ac5994554019c257af2b17b6a.jpg"
                alt=""
              />
              <div className="profileText">
                <label className="profileName">Elizabeth Mckinney</label>
                <label className="profileDate">4:57 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img
                className="postImg"
                src="https://cdn.mos.cms.futurecdn.net/6rFtcRpN8NpKyEHASVhV5o-970-80.jpg.webp"
                alt=""
              ></img>
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
              <img
                className="avatarBlog"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2dfe33e-32e3-41b7-b62c-96985dd07256/ddr2jj8-e99ccf68-7627-4c2a-9e6c-a2cb8296745a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyZGZlMzNlLTMyZTMtNDFiNy1iNjJjLTk2OTg1ZGQwNzI1NlwvZGRyMmpqOC1lOTljY2Y2OC03NjI3LTRjMmEtOWU2Yy1hMmNiODI5Njc0NWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QmKKaPVNkSj_e9r_HO4hEbDua3HoNqS1IEwaYkqE9Vw"
                alt=""
              />
              <div className="profileText">
                <label className="profileName">Garth Dolton</label>
                <label className="profileDate">5:32 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img
                className="postImg"
                src="https://1.bp.blogspot.com/-D5CbLLfVCUE/VPro2zrcLEI/AAAAAAABVIA/2NxqCPL_k-c/s1600/Queen%2BElizabeth%2BII%2B(1).jpg"
                alt=""
              ></img>
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
              <img
                className="avatarBlog"
                src="https://i.pinimg.com/736x/57/6d/25/576d256698b579eb1a762406a74b9ef2.jpg"
                alt=""
              />
              <div className="profileText">
                <label className="profileName">Ruby Todd</label>
                <label className="profileDate">5:57 pm 10/30/2022</label>
              </div>
            </div>
            <div className="postContent">
              <img
                className="postImg"
                src="https://www.boredpanda.com/blog/wp-content/uploads/2022/01/61e6c042b43f1_lc3n8ty6to881__700.jpg"
                alt=""
              ></img>
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
