import React from 'react'
import './homepage.css'


const HomePage = () => {
    return (
        <div className="home-page">
            <div className="content">
                <img src="./assets/logo.png" alt="" className="logo"/>
                <h1 className="title">Bits To Bytes</h1>
                <h2 className="sub-title">GEC Bhavnagar</h2>
                <p className="info">Being a programming club of the institution, we assure pretty much everything you ask for!
                We conduct events and workshops, hold lectures and talks, and even host coding competitions and
                hackathons.</p>
                <button type="button">
                    <i className="fas fa-user-circle "></i>
                    <p>Become a member</p>
                </button>
            </div>
            <div className="image">
                <img src="./assets/b2b1.png" alt="" />
            </div>
        </div>
    );
}


export default HomePage;