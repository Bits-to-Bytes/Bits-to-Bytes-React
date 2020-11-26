import React, { Component } from 'react';


import HomePage from './components/homepage/HomePage';
import EventPage from './components/eventpage/eventpage';
import VisionPage from './components/visionpage/visionpage';
import OppertunityPage from './components/oppertunitypage/oppertunitypage';
import TechPage from './components/techpage/techpage';
import TeamPage from './components/teampage/teampage';
import ContactPage from './components/contactpage/contactpage';


export default class MainWeb extends Component {
    render() {
        return (
            <div className="web-content">
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