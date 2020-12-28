import React from "react";
import { NavLink } from "react-router-dom";
import "./eventpage.css";

const Event = () => {
  return (
    <div className="event">
      <div className="event-img">
        <img src="./assets/events/react.svg" alt="reactjs" />
      </div>
      <div className="info">
        <h1 className="title">React JS Webinar</h1>
        <p className="about-event">
          React is an open-source, front end, JavaScript library for building
          user interfaces or UI components. It is maintained by Facebook and a
          community of individual developers and companies. React can be used as
          a base in the development of single-page or mobile applications
        </p>

        {/* <a
          href="https://miten3377.typeform.com/to/IIxoLbTv"
          className="event-button"
          target="_blank"
          rel="noreferrer"
        > */}
        <NavLink to="/registration">
          <button>
            <p>Register</p>
            <i className="fas fa-arrow-right"></i>
          </button>
        </NavLink>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Event;
