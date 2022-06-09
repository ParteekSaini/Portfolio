import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
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
    </div>;
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
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Amazon Clone App ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce Website designed to sell products online wth payment system integration, and user authentication",
      subHeading:
        "Technologies Used:  React JS, Express Js, Stripe, Firebase Cloud Functions, firestore",
    },
    {
      title: "Netflix Clone Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Replicated Netflix website on React Js by using TMDB API",
      subHeading: "Technologies Used: React Js, TMDB API",
    },
    {
      title: "Netflix Clone Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Replicated Netflix website on React Js by using TMDB API",
      subHeading: "Technologies Used: React Js, TMDB API",
    },
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container sscreen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
