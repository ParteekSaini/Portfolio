import React from "react";
import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pradeepImage from "../../assets/Testimonial/pradeep.png";
import navinderImage from "../../assets/Testimonial/navinder.png";
import chanderImage from "../../assets/Testimonial/chander.png";

function Testimonial(props) {
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
    anmimateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
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

  return (
    <div className="testimonial-container">
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      ;
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It was nice working with Parteek during his internship. He
                      delivered even more than I imagined. I recommend him for
                      you.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={navinderImage} alt="no internet connection" />
                    <h5>
                      Navinder Banwait{<span>&nbsp;&nbsp;&nbsp;</span>}
                      <span>
                        <a
                          href="https://www.linkedin.com/in/navinder-kaur-banwait-56981218/"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            className="font-awesome-icon"
                            icon={faLinkedin}
                          />
                        </a>
                      </span>
                    </h5>
                    <p>Manager, Red Finch Media</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Parteek is awesome, delivers exactly what you want and is
                      a great guy as well, thanks for all your hard work.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={chanderImage} alt="no internet connection" />
                    <h5>Chander Mohan</h5>
                    <p>Project Manager, Greenleaf</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      When he first came to Greenleaf, he was an intern , and by
                      the time he left Greenleaf for further studies he was a
                      matured developer.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={pradeepImage} alt="no internet connection" />

                    <h5>
                      Pradeep Pandey{<span>&nbsp;&nbsp;&nbsp;</span>}
                      <span>
                        <a
                          href="https://www.linkedin.com/in/pradeep-pandey-103030a/"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            className="font-awesome-icon"
                            icon={faLinkedin}
                          />
                        </a>
                      </span>
                    </h5>

                    <p>Vice President, Greenleaf</p>
                  </div>
                </div>
              </div>
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

export default Testimonial;
