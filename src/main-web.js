import React, { Component } from "react";

import HomePage from "./components/homepage/HomePage";
import EventPage from "./components/eventpage/eventpage";
import VisionPage from "./components/visionpage/visionpage";
import OppertunityPage from "./components/oppertunitypage/oppertunitypage";
import TechPage from "./components/techpage/techpage";
import TeamPage from "./components/teampage/teampage";
import ContactPage from "./components/contactpage/contactpage";
import NavBar from "./components/navbar/Navbar";

export default class MainWeb extends Component {
  render() {
    return (
      <div className="web-content">
        <NavBar
          navBarItems={[
            { title: "Home", link: "#home" ,key:1},
            { title: "Events", link: "#events" ,key:2},
            { title: "Vision", link: "#vision" ,key:3},
            { title: "Team", link: "#team" ,key:4},
            { title: "Join us", link: "#contact",key:5 },
          ]}
        />
        <HomePage />
        <EventPage />
        <VisionPage />
        <OppertunityPage />
        <TechPage />
        <TeamPage />
        <ContactPage />
      </div>
    );
  }
}
