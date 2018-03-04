import React, { Component } from 'react';
import pencil from './pencil.png';
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
            journalists and newsrooms who are looking to avoid censorship, activists trying to organize without fear, and businesses looking for real security.</p>
            <p className="flow-text">Graphite is 100% distributed just like the technology its built on. But if you'd like to contact us, we'd love to hear from you. You can reach out <a href="mailto:contact@graphitedocs.com">here.</a></p>
          </div>
          <div>

            <div className="center-align team">
              <img className="profile-img circle" alt="founder profile" src="https://preview.ibb.co/fObix6/justin.jpg"/>
              <h5 className="center-align">Justin Hunter - Founder</h5>
              <p>Justin has been in the technology industry for the last decade. He began building Graphite to support his other passion—writing. Justin's fiction and non-fiction has been published in numerous literary journals, magazines,
              and other publications. He hopes Graphite will enable writing, creativity, activistism, and security for generations to come.</p>
            </div>
            <div className="center-align team">
              <img className="profile-img circle" alt="empty profile" src="https://s3.amazonaws.com/onename/avatar-placeholder.png"/>
              <p>Are you the next member of the Graphite team? Send an <a href="mailto:contact@graphitedocs.com">email</a> if you are interested.</p>
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
