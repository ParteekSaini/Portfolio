import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "interests.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skills: "JavaScript", ratingPercentage: 85 },
    { skills: "React Js", ratingPercentage: 85 },
    { skills: "Express Js", ratingPercentage: 83 },
    { skills: "Node Js", ratingPercentage: 80 },
    { skills: "Mongo Db", ratingPercentage: 70 },
    { skills: "HTML", ratingPercentage: 87 },
    { skills: "CSS", ratingPercentage: 84 },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Douglas College, New Westminister, Canada"}
        subHeading={
          "POST BACCALAUREATE DIPLOMA in COMPUTER AND INFORMATION SYSTEMS"
        }
        fromDate={"2020"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Kurukshetra University"}
        subHeading={"POST GRADUATE DIPLOMA IN COMPUTER APPLICATIONS"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Deenbandhu Chhotu Ram University"}
        subHeading={"BACHELOR’S IN ELECTRONICS & COMMUNICATION "}
        fromDate={"2014"}
        toDate={"2018"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Red Finch Media (Calgary, Canada)"}
          subHeading={"WEB DEVELOPER INTERN"}
          fromDate={"May 2021"}
          toDate={"Aug 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Designed front-end layouts using HTML5/CSS3, JavaScript, and
            Bootstrap
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Assist seniors in developing full-stack web apps for production
            using frameworks such as React.js, and Node.js/Express.js
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Green Leaf IT Consulting (Delhi, India)"}
          subHeading={"JUNIOR WEB DEVELOPER"}
          fromDate={"Jan 2019"}
          toDate={"Dec 2019"}
        />
        <div className="experience-description secondJobDescription">
          <span className="resume-description-text">
            Developed web application, using HTML/CSS, PHP, MySQL, and Apache
            server
          </span>
        </div>
        <div className="experience-description secondJobDescription">
          <span className="resume-description-text">
            Designed front-end interface using HTML/CSS, maintaining up-to-date
            interface and experience for end users
          </span>
          <br />
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => {
        return (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skills}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        );
      })}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Astronomy"
        description="I am fond of Astronomy. Sometimes, even during the day I read and watch documentaries about working of universe even if its just for 5 minutes! Learning about Black Holes, Neutron Stars, and distant galaxies fulfill my hunger of curiosity and invigorates my soul."
      />
      <ResumeHeading
        heading="Badminton"
        description="Badminton is the sport that I love playing. I was introduced to badminton from an early age by my father. I have also won couple of inter college badminton tournaments and I was the captain of my college team during graduation in India."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      return (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="oops,,, no internet connection"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
