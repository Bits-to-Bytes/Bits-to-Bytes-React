import React from "react";
import "./eventpage.css";

const Event = () => {
  return (
    <div className="event">
      <div className="event-img">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_ZmsQVB.json"
          mode="bounce"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="info">
        <h1 className="title">Data Structures and Algorithms</h1>
        <p className="about-event">
          Data structure and algorithms help in understanding the nature of the
          problem at a deeper level and thereby a better understanding of the
          world. Data structures and algorithms (DSA) goes through solutions to
          standard problems in detail and gives you an insight into how
          efficient it is to use each one of them. It also teaches you the
          science of evaluating the efficiency of an algorithm. This enables you
          to choose the best of various choices.
        </p>
        <a
          href="https://join.slack.com/t/bits-to-bytesstudents/shared_invite/zt-mhkyjgpx-iuC4iuXsQdJ1Ekxz20yoDA"
          className="event-button"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <p>Join Slack</p>
            <i className="fas fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Event;
