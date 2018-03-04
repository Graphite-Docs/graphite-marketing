import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';
import personal from './personal.jpg';
import connect from './connect.jpg';
import march from './march.jpg';
import layout from './layout.jpg';
import man from './man.jpg';
import arch from './diagram.png'

class Business extends Component {

  render() {
    return (
      <div className="white personal">
        <div className="container">
          <h1>Business</h1>
          <h5>Productivity, storage, and sharing tools for when true security matters.</h5>
          <img src={man} className="march responsive-img" alt="man in a suit" />
          <div>
            <h3 className="flow-text">Cloud storage, no matter the security offered, has never been secure enough. Powered by the Bitcoin Blockchain and built on Blockstack, Graphite offers a level of security never available before.</h3>
            <div className="row">
              <div className="col s12 m6">
                <img src={arch} className="responsive-img" alt="blockstack architecture" />
                <figcaption>Courtesy of <a href="http://blockstack.org" target="_blank">Blockstack.</a></figcaption>
              </div>
              <div className="col s12 m6 arch-para">
                <h5>Graphite, built on Blockstack, enables you to choose where you store your encrypted data.</h5>
                <p>While traditional cloud storage and encryption has meant the storage provider has access to your private keys for decryption, Graphite never has access to your private key. If you choose to replicate your data storage across multiple traditional cloud storage providers, those providers only store the encrypted file with no decryption key.</p>
                <p>All of this secured via blockchain protocols and, though the Bitcoin blockchain is currently used, is agnostic to any one blockchain.</p>
              </div>
            </div>
            <div>
              <div className="center-align">
                <h2 className="center-align">Keep your work in-house.</h2>
                <h5>Communicate with employees and colleagues. Share ideas. Send files.</h5>
                <h5>But when it's time, delete everything you don't need to keep and never worry about copies of that data lying around on a central database.</h5>
              </div>
              <div className="row">
                <div className="col s12 m3 center-align">
                  <h5><i className="material-icons medium">verified_user</i></h5>
                  <h5>Complete access control through verified user identities, secured on the blockchain.</h5>
                </div>
                <div className="col s12 m3 center-align">
                  <h5><i className="material-icons medium">settings</i></h5>
                  <h5>Organization-controlled settings.</h5>
                </div>
                <div className="col s12 m3 center-align">
                  <h5><i className="material-icons medium">storage</i></h5>
                  <h5>Unlimited storage that you own and control.</h5>
                </div>
                <div className="col s12 m3 center-align">
                  <h5><i className="material-icons medium">timer</i></h5>
                  <h5>Time-based policy controls to remove data from your account.</h5>
                </div>
              </div>
              <div className="center-align">
                <h3>Ready to learn more?</h3>
                <a href="mailto:contact@graphitedocs.com"><button className="btn black">Contact us</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
