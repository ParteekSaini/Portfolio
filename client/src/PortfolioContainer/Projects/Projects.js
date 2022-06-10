import React from "react";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"My cool projects"} />;
      </div>
    </div>
  );
}

export default Projects;
