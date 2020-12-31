import React from "react";
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
      </div>
     
    </div>
  );
};

export default Event;
