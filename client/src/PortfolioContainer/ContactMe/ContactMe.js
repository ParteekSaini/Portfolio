import React, { useState, useRef } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./ContactMe.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function ContactMe(props) {
  const form = useRef();

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("please fill all the fileds");
      toast.error("please fill all the fileds");
      setBool(false);
    } else {
      emailjs
        .sendForm(
          "service_hs1j4va",
          "template_ahearl5",
          form.current,
          "JM6KKULQnht2tHFZm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setBanner(
        "Thank you for contacting me, I will get back to you as soon as possible"
      );
      toast.success("Thank you");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://www.facebook.com/parteek.saini.756/" target="_blank">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/parteek-saini-95a122158/"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/ParteekSaini" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          {/* <a href="#" target="_blank">
            <i className="fa fa-instagram"></i>
          </a> */}
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={handleName}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={handleEmail}
            />

            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} onChange={handleMessage} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
