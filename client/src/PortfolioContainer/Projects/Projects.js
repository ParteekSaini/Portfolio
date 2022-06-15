import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import amazonProjectImage from "../../assets/Projects/amazon_project.png";
import portfolioPprojectImage from "../../assets/Projects/portfolio.png";
import netflixProjectImage from "../../assets/Projects/netflix.png";
import nutriGuideProjectImage from "../../assets/Projects/nutri_guide.png";
import hatchwaysImage from "../../assets/Projects/hatchways.png";
import internationalGuideImage from "../../assets/Projects/international_student_guide.png";

function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen?.fadeInScreen !== props?.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    slideBy: 3,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      image: portfolioPprojectImage,
      nonDeploymentText: "This Website is live demo",
      githubLink: "https://github.com/ParteekSaini/Portfolio",
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, and Emailjs",
    },
    {
      title: "Amazon Clone App ",
      image: amazonProjectImage,
      liveDemoLink: "https://clone-ee6fa.firebaseapp.com/",
      githubLink: "https://github.com/ParteekSaini/AmazonCloneApp",
      description:
        "An ecommerce Website with payment system, and user authentication",
      subHeading:
        "Technologies Used:  React JS, Express Js, Stripe, Firebase Cloud Functions, firestore, and React Context API",
    },
    {
      title: "Netflix Clone Website ",
      image: netflixProjectImage,
      liveDemoLink: "https://netflix-clone-tmdb-app.herokuapp.com/",
      githubLink: "https://github.com/ParteekSaini/NetflixCloneProject",
      description: "Replicated Netflix website on React Js by using TMDB API",
      subHeading: "Technologies Used: React Js, TMDB API",
    },
    {
      title: "NutriGuide Website ",
      image: nutriGuideProjectImage,
      liveDemoLink: "https://parteeksaini.github.io/NutriGuide/",
      githubLink: "https://github.com/ParteekSaini/NutriGuide",
      description: "A web-based application for health nutrition guidance ",
      subHeading: "Technologies Used: HTML5/CSS3, and JavaScript",
    },
    {
      title: "International Student Guide",
      image: internationalGuideImage,

      githubLink:
        "https://github.com/ParteekSaini/InternationalStudentGuideGit",
      nonDeploymentText: "Not Deployed Yet",
      description:
        "Developed full stack React app for international students aspiring to study in Canada",
      subHeading:
        "Technologies Used: React.js, Express.js, Node.js, MongoDB, Postman,",
    },
    {
      title: "Hatchways front-end asscessment",
      image: hatchwaysImage,
      liveDemoLink: "https://hatchways-front-end-assessment.herokuapp.com/",
      githubLink:
        "https://github.com/ParteekSaini/Hatchways-front-end-assessment",
      youtubeLink:
        "https://www.youtube.com/watch?v=xzA4rXLP5NU&ab_channel=PARTEEKSAINI",
      description:
        "Fetch Data from public JSON API, and make mobile responsive page with search and add feature",
      subHeading: "Technologies Used: React.js",
    },
  ];

  const mapProjects = () => {
    {
      return projectsDetails.map((project, index) => {
        return (
          <div className="col-lg-12" key={index}>
            <div className="project-item">
              <div className="project-title">
                <span>
                  {index + 1}
                  {". "}
                  {project.title}
                </span>
              </div>
              <div className="project-image">
                <img src={project.image} alt="project-image" />
              </div>
              <div className="project-description">
                <span>{project.description}</span>
              </div>
              <div className="project-sub-heading">
                <span>{project.subHeading}</span>
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                {project?.liveDemoLink ? (
                  <a href={project.liveDemoLink} target="_blank">
                    <i class="fa fa-link"></i>
                  </a>
                ) : (
                  <span className="non-deployment-text">
                    {project?.nonDeploymentText}
                  </span>
                )}
                {project?.youtubeLink && (
                  <a href={project.youtubeLink} target="_blank">
                    <i class="fa fa-youtube"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="projects-container">
      <ScreenHeading title={"Projects"} subHeading={"My cool projects"} />;
      <section className="projects-section fade in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousal"
              id="projects-carousal"
              {...options}
            >
              {mapProjects()}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src="img/Testimonial/shape-bg.png" alt="image not responding" />
      </div>
    </div>
  );
}

export default Projects;
