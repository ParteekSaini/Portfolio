import React from "react";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
import Typical from "react-typical";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://github.com/ParteekSaini" target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/parteek-saini-95a122158/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/parteek.saini.756/"
                target="_blank"
              >
                <i className="fa fa-facebook-square"></i>
              </a>

              {/* <a href="#" target="_blank">
                <i className="fa fa-instagram"></i>
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hey, I'M <span className="highlighted-text">Parteek</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={[
                    "React Developer 😎",
                    5000,
                    "Enthusiastic Dev 🔴",
                    5000,
                    "Full-Stack Developer 💻",
                    5000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Interst in creating web apps using latest technologies.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="ParteekResume.pdf" download="Parteek Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
