import React, { Component } from 'react';
import pencil from './pencil.png';
import daniel from './daniel.jpg';
import dan from './dan.jpeg';
import './App.css';

class About extends Component {

  render() {
    return (
      <div className="white about-section">
        <div className="container">
          <h1 className="flow-text">About Graphite</h1>
          <p className="flow-text">Graphite provides a decentralized and encrypted alternative to G-Suite and Microsoft Office. As the first blockchain-based software to enable
          truly private and user-owned personal and business applications for creating, sharing, and communicating, Graphite empowers people to own their own data.</p>
          <div className="background-image-about">
          </div>
          <div className="row">
            <div className="col s12 m4 center-align">
              <p>Connect anywhere.</p>
            </div>
            <div className="col s12 m4 center-align">
              <p>Share anytime.</p>
            </div>
            <div className="col s12 m4 center-align">
              <p>Privacy always.</p>
            </div>
          </div>
          <div>
            <h1 className="flow-text">Purpose</h1>
            <p className="flow-text">Graphite serves consumers who want to take back their data,
            journalists and newsrooms who are looking to avoid censorship, activists trying to organize without fear, businesses looking for real security, and more.</p>
            <p className="flow-text">Graphite is 100% distributed just like the technology its built on. But if you'd like to contact us, we'd love to hear from you. You can reach out <a href="mailto:contact@graphitedocs.com">here.</a></p>
          </div>
          <div>
            <div className="row">
              <div className="center-align team col s12 m4">
                <img className="profile-img circle" alt="founder profile" src="https://preview.ibb.co/fObix6/justin.jpg"/>
                <h5 className="center-align">Justin Hunter - Founder</h5>
                <p>Justin has been in the technology industry for the last decade. He began building Graphite to support his other passion—writing. Graphite grew into something larger than just writing, and Justin hopes to help support journalists, activists, businesses, schools, and more.</p>
              </div>
              <div className="center-align team col s12 m4">
                <img className="profile-img circle" alt="employee profile" src={daniel}/>
                <h5 className="center-align">Daniel Wang - Mobile Developer</h5>
                <p>Daniel is an expert in developing mobile applications and has built major features in applications which have had 10s of millions of users. He is studying CS at the University of Waterloo. He is building out Graphite's native mobile applications.</p>
              </div>
              <div className="center-align team col s12 m4">
                <img className="profile-img circle" alt="advisor profile" src={dan}/>
                <h5 className="center-align">Dan Hughes - Advisor</h5>
                <p>Dan is the president and COO of <a href="http://learningmachine.com">Learning Machine Technologies, Inc.</a> He is also an advisor for Graphite.</p>
              </div>
            </div>
          </div>
          <div className="button-div center-align">
            <a href="https://medium.com/the-lead" target="_blank"><button className="btn black">Read the blog</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
