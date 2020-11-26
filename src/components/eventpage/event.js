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


                <a href="https://youtu.be/Gzo7yE-JcT0" className="event-button" target="_blank" rel="noreferrer">
                    <button>
                        <p>Watch</p>
                        <i className="fas fa-eye"></i>
                    </button>
                </a>

            </div>
        </div>
    );
}

export default Event;