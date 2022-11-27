import user from "../img/user.png";
import edit from "../img/edit.png";
import inbox from "../img/envelope.png";
import settings from "../img/settings.png";
import help from "../img/question.png";
import logout from "../img/log-out.png";
import "./topbar.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoSVgray from "../img/logoSVgray.png";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navigate = useNavigate();

  function backtoTop() {
    window.scrollTo(0, 0);
  }

  function darkMode() {
    document.body.classList.remove("dark");
  }

  return (
    <>
    <div className="top">
      <div className="topLeft">
        <img src={logoSVgray} alt="" />
        <i className="topIcon">SUNNYVALE</i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li
            className="topListItem1"
            onClick={() => {
              darkMode();
              navigate("/");
            }}
          >
            HOME
          </li>
          <li
            className="topListItem1"
            onClick={() => {
              darkMode();
              navigate("/Amenities");
            }}
          >
            AMENITIES
          </li>
          <li
            className="topListItem1"
            onClick={() => {
              navigate("/BlogHome");
            }}
          >
            BLOG
          </li>
          <li
            className="topListItem1"
            onClick={() => {
              darkMode();
              navigate("/BlogWrite");
            }}
          >
            WRITE
          </li>
        </ul>
      </div>
      <div className="topRight">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            className="topImg1"
            src="https://i.pinimg.com/736x/6a/6c/ca/6a6cca8ac5994554019c257af2b17b6a.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={`dropdown-menu1 ${open ? "active" : "inactive"}`}>
        <h3 className="uName">
          Elizabeth Mckinney
          <br />
          <span className="uType">Member</span>
        </h3>
        <ul>
          <div
            onClick={() => {
              navigate("/MemberPanel");
            }}
          >
            <DropdownItem img={user} text={"My Profile"} />
          </div>
          <div>
            <DropdownItem img={inbox} text={"Inbox"} />
          </div>
          <div>
            <button
            className="concernBtn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            ><DropdownItem img={help} text={"Raise a Concern"} /></button>
            
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <DropdownItem img={logout} text={"Logout"} />
          </div>
        </ul>
      </div>
    </div>
    <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Raise a Concern
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="concernSubject">
                      <label >Subject:</label> 
                      <textarea name="" id="" cols="30" rows="10" className="subjectText"></textarea>
                    </div>
                    <div className="concernMessage">
                    <textarea name="" id="" cols="30" rows="10" className="concernText" placeholder="explain briefly your concern..." maxLength={255}></textarea>
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
                    <button type="button" class="btn btn-primary">
                      Submit Concern
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem1">
      <img src={props.img} alt=""></img>
      <a> {props.text} </a>
    </li>
  );
}
