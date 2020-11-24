import React from 'react';
import './eventpage.css'

const Event = () => {
    return (
        <div className="event">
            <div className="event-img">
                <img src="./assets/b2b1.png" alt="" />
            </div>
            <div className="info">
                <h1 className="title">Intro to Git & GitHub</h1>
                <p className="about-event">Throughout this event, you'll learn about Git's core functionality so you can understand how and why
                it’s used in organizations. We’ll look into some basic features, like Pull Request, branches and
                merging. We'll demonstrate how we can use git's command line tool to use Github's power very
                    efficiently.</p>
                <button>
                    <p>Register</p>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Event;