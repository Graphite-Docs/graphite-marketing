import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';
import personal from './personal.jpg';
import connect from './connect.jpg';

class Personal extends Component {

  render() {
    return (
      <div className="white personal">
        <div className="container">
          <h1>Personal</h1>
          <h5 className="flow-text">Decentralized and encrypted to help you get things done in privacy.</h5>
          <div className="personal-image">
            <img src={personal} className="responsive-img" alt="person typing on computer" />
          </div>
          <div className="personal-features row">
            <div className="col s12 m4">
              <div className="center-align">
                <i className="material-icons large">account_circle</i>
                <h5>Your identity, owned and controlled by you, is the key to logging in, storing files, connecting with others, and sharing.</h5>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="center-align">
                <i className="material-icons large">collections_bookmark</i>
                <h5>Your documents, spreadsheets, and files are securely stored and accessible anywhere, anytime.</h5>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="center-align">
                <i className="material-icons large">edit</i>
                <h5>Format your writing the way you want. Write book, write a story, write a presentation. Write anything you want.</h5>
              </div>
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Real connections with friends, family, and colleagues—even when you're far apart</h2>
          <img src={connect} className="responsive-img" alt="group of people" />
          <div className="row">
            <div className="col s12 m6">
              <h5>Make a connection but never give away your privacy. Your conversations are yours, and yours alone. Encrypted by default, destroyed when you want.</h5>
            </div>
            <div className="col s12 m6">
              <h5>More than email, more than chat. Have a conversation online for the first time without anyone but the person you're connecting with having access. No corporate middlemen. No databases and servers. Just you and your contacts.</h5>
            </div>
          </div>
        </div>
        <div className="center-align">
          <a href="https://app.graphitedocs.com" target="_blank"><button className="btn black">Ready to Begin?</button></a>
        </div>
      </div>
    );
  }
}

export default Personal;
