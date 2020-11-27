import './membership.css'

import React, { Component } from 'react';

class MembershipPage extends Component {
    render() {
        return (
            <div className="membership-page">
                <div className="program-info">
                    <h1 className="title">Program name</h1>
                    <h3 className="info">Association membership</h3>
                    <div className="img">
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_m6cuL6.json" mode="bounce" background="transparent" speed="1" style={{ width: '100%', height: '100%', }} loop autoplay></lottie-player>
                    </div>
                </div>

                <div className="details-card">
                    <div className="details">
                        <h3 className="title">Benefits of Program</h3>
                        <ol>
                            <li>Chance to become an Association member and ultimately core team.</li>
                            <li>You will be directly working with us, faculty and alumni to organize the event.</li>
                            <li>Access to discussion channels on various technologies and a big opportunity to develop your network.</li>
                            <li>Early access to all future events.</li>
                            <li>Physical ID card of club (post covid-19).</li>
                        </ol>

                    </div>
                    {/* <div class='pm-button'>
                        <a href='https://www.payumoney.com/paybypayumoney/#/6D0513F0D9ED6209F01B15C290D390FB'>
                            Join Us
                    </a>
                    </div> */}


                </div>
            </div>
        );
    };
}


export default MembershipPage;