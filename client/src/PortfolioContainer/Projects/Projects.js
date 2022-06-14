import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import amazonProjectImage from "../../assets/Projects/amazon_project.png";
import portfolioPprojectImage from "../../assets/Projects/portfolio.png";
import netflixProjectImage from "../../assets/Projects/netflix.png";

function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
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
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Amazon Clone App ",
      image: amazonProjectImage,
      liveDemoLink: "https://clone-ee6fa.firebaseapp.com/",
      githubLink: "https://github.com/ParteekSaini/AmazonCloneApp",
      description:
        "An ecommerce Website designed to sell products online with payment system, and user authentication",
      subHeading:
        "Technologies Used:  React JS, Express Js, Stripe, Firebase Cloud Functions, firestore",
    },
    {
      title: "Netflix Clone Website ",
      image: netflixProjectImage,
      duration: { fromDate: "2020", toDate: "2021" },
      liveDemoLink: "https://netflix-clone-tmdb-app.herokuapp.com/",
      githubLink: "https://github.com/ParteekSaini/NetflixCloneProject",
      description: "Replicated Netflix website on React Js by using TMDB API",
      subHeading: "Technologies Used: React Js, TMDB API",
    },
  ];

  const mapProjects = () => {};

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
              {projectsDetails.map((project, index) => {
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
                      <div className="project-links">
                        <a href={project.githubLink} target="_blank">
                          <i className="fa fa-github fa-lg"></i>
                        </a>
                        {project?.liveDemoLink ? (
                          <a href={project.liveDemoLink} target="_blank">
                            <i class="fa fa-link fg-lg"></i>
                          </a>
                        ) : (
                          <span className="non-deployment-text">
                            {project?.nonDeploymentText}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
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
