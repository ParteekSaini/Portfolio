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
          {/* {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )} */}
          {props?.githubLink && (
            <div className="coloz-icons">
              <div className="github-link">
                <a href={props.githubLink} target="_blank">
                  <i
                    className="fa fa-github fa-lg"
                    style={{ color: "black" }}
                  ></i>
                </a>
              </div>
            </div>
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
    { label: "Projects", logoSrc: "projects.svg" },
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

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      liveDemoLink: "https://www.google.com/",
      githubLink: "https://github.com/ParteekSaini/Portfolio",
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Amazon Clone App ",
      duration: { fromDate: "2020", toDate: "2021" },
      liveDemoLink: "https://clone-ee6fa.firebaseapp.com/",
      githubLink: "https://github.com/ParteekSaini/AmazonCloneApp",
      description:
        "An ecommerce Website designed to sell products online wth payment system integration, and user authentication",
      subHeading:
        "Technologies Used:  React JS, Express Js, Stripe, Firebase Cloud Functions, firestore",
    },
    {
      title: "Netflix Clone Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      liveDemoLink: "https://netflix-clone-tmdb-app.herokuapp.com/",
      githubLink: "https://github.com/ParteekSaini/NetflixCloneProject",
      description: "Replicated Netflix website on React Js by using TMDB API",
      subHeading: "Technologies Used: React Js, TMDB API",
    },
    {
      title: "Netflix Clone Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      liveDemoLink: "https://netflix-clone-tmdb-app.herokuapp.com/",
      githubLink: "https://github.com/ParteekSaini/NetflixCloneProject",
      description: "Replicated Netflix website on React Js by using TMDB API",
      subHeading: "Technologies Used: React Js, TMDB API",
    },
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
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Deenbandhu Chhotu Ram University of Science and Technology"}
        subHeading={"BACHELOR’S IN ELECTRONICS & COMMUNICATION "}
        fromDate={"2014"}
        toDate={"2018"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Red Finch Media"}
          subHeading={"WEB DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Designed and Developed layouts on front-end using HTML5/CSS3,
            JavaScript, and Bootstrap
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
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => {
        return (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
            githubLink={projectsDetails.githubLink}
            liveDemoLink={projectsDetails.liveDemoLink}
          />
        );
      })}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
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
