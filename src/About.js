import React, { Component } from 'react';
import dan from './dan.jpeg';
import './App.css';

class About extends Component {

  render() {
    return (
      <div className="white about-section">
        <div className="container">
          <h3>About Graphite</h3>
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
            <p className="flow-text">Graphite is 100% distributed just like the technology its built on. But if you'd like to contact us, we'd love to hear from you. You can reach out <a className="underline" href="mailto:contact@graphitedocs.com">here.</a></p>
          </div>
          <div>
            <div className="row">
              <div className="center-align team col s12 m6">
                <img className="profile-img circle" alt="founder profile" src="https://preview.ibb.co/fObix6/justin.jpg"/>
                <h5 className="center-align">Justin Hunter - Founder</h5>
                <p>Justin has been in the technology industry for the last decade. He began building Graphite to support his other passion—writing. Graphite grew into something larger than just writing, and Justin hopes to help support journalists, activists, businesses, schools, and more.</p>
              </div>

              <div className="center-align left team col s12 m6">
                <img className="profile-img circle" alt="advisor profile" src={dan}/>
                <h5 className="center-align">Dan Hughes - Advisor</h5>
                <p>Dan is the president and COO of <a className="underline" href="http://learningmachine.com">Learning Machine Technologies, Inc.</a> He has launched multiple companies and is deeply involved in blockchain technology. He helped start the open source project <a className="underline" target="_blank" rel="noopener noreferrer" href="http://blockcerts.org">Blockcerts</a> to create an open standard for digital certificates.</p>
              </div>

            </div>
          </div>
          <div className="button-div center-align">
            <a href="https://medium.com/the-lead" rel="noopener noreferrer" target="_blank"><button className="btn black">Read the blog</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
