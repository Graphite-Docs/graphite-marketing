import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';
import personal from './personal.jpg';
import connect from './connect.jpg';
import march from './march.jpg';
import layout from './layout.jpg';
import man from './man.jpg';
import arch from './diagram.png'
import leaders from './leaders.jpg';

class NGO extends Component {

  render() {
    return (
      <div className="white personal">
        <div className="container">
          <h1>Non-Governmental Organizations</h1>
          <h5>Doing important work means keeping important data safe.</h5>
          <img src={leaders} className="march responsive-img" alt="protest" />
          <div className="row">
            <div className="col s12 m6">
              <h3 className="coordinate">Whether it's public policy, human rights, social movements, or something else, organizing and distributing information takes coordination.</h3>
            </div>
            <div className="col s12 m6 center-align">
              <p><i className="material-icons medium">person_add</i></p>
              <h5>Choose who you collaborate with.</h5>
              <p><i className="material-icons medium">collections</i></p>
              <h5>Manage your encrypted files and share them in-network.</h5>
              <p><i className="material-icons medium">equalizer</i></p>
              <h5>Create secure spreadsheets and use data to your advantage.</h5>
            </div>
          </div>
        </div>
        <div className="ngo-background center-align white-text">
        </div>
        <div className="container">
          <div>
          <h3>Spark the fire and effect change.</h3>
          <h5>Graphite provides the tools NGOs need to work smartly, safely, and securely.</h5>
          </div>
          <div className="row center-align">
            <div className="col s12 m4">
              <i className="material-icons medium">security</i>
              <h5>Security built-in. Privacy guaranteed.</h5>
            </div>
            <div className="col s12 m4">
              <i className="material-icons medium">share</i>
              <h5>Cloud convenience without the central authority accessing your files.</h5>
            </div>
            <div className="col s12 m4">
            <i className="material-icons medium">chat</i>
            <h5>Stay connected no matter where you are in the world.</h5>
            </div>
          </div>
          <div className="center-align">
            <h3>See how Graphite can help.</h3>
            <a href="mailto:contact@graphitedocs.com"><button className="btn black">Contact us</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default NGO;
