import React, { Component } from 'react';
import './App.css';
import Documents from './features/Documents';
import Vault from './features/Vault';
import Contacts from './features/Contacts';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: true,
      vault: false,
      contacts: false,
      pro: false
    };
  }

  render() {
    return (
      <div className="white">
        <div className="container intro">
          <h3>Features</h3>
        </div>
        <div className="row container center-align">
          <div className="col s4">
            <h5><a className={this.state.docs ? "underline feature-selection" : "feature-selection"} onClick={() => this.setState({ docs: true, vault: false, contacts: false, pro: false})}>Documents</a></h5>
          </div>
          <div className="col s4">
            <h5><a className={this.state.vault ? "underline feature-selection" : "feature-selection"} onClick={() => this.setState({ docs: false, vault: true, contacts: false, pro: false})}>Vault</a></h5>
          </div>
          <div className="col s4">
            <h5><a className={this.state.contacts ? "underline feature-selection" : "feature-selection"} onClick={() => this.setState({ docs: false, vault: false, contacts: true, pro: false})}>Contacts</a></h5>
          </div>
        </div>

        <div className="container features">
          {
            this.state.docs ?
            <Documents /> :
            this.state.vault ?
            <Vault /> :
            this.state.contacts ?
            <Contacts /> :
            null
          }

        </div>
        <div className="getStarted center-align">
          <h3>Ready to get started?</h3>
          <a href="https://app.graphitedocs.com"><button className="btn-large btn black">Sign up for free</button></a>
        </div>
        <div className="container learnMore">
          <h2>Learn more.</h2>
          <h5>Pick a use case.</h5>
          <div className="row">
            <div className="col s12 m3">
              <a href="/personal">
              <div className="card-panel small hoverable">
                <h3 className="flow-text uses center-align">Personal</h3>
              </div>
              </a>
            </div>
            <div className="col s12 m3">
              <a href="/journalism">
              <div className="card-panel small hoverable">
                <h3 className="flow-text uses center-align">Journalism</h3>
              </div>
              </a>
            </div>
            <div className="col s12 m3">
              <a href="/non-governmental">
              <div className="card-panel small hoverable">
                <h3 className="flow-text uses center-align">NGO</h3>
              </div>
              </a>
            </div>
            <div className="col s12 m3">
              <a href="/business">
              <div className="card-panel small hoverable">
                <h3 className="flow-text uses center-align">Business</h3>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
