import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';
import personal from './personal.jpg';
import connect from './connect.jpg';
import march from './march.jpg';
import layout from './layout.jpg';

class Journalism extends Component {

  render() {
    return (
      <div className="white personal">
        <div className="container">
          <h1>Journalism</h1>
          <h5>Digital newsroom management and distributed, encrypted tools for journalists.</h5>
          <img className="march responsive-img" src={march} alt="protests" />
          <div className="row">
            <h3>Journalism doesn't stop when it meets resistance. Graphite enables protection against censorship and snooping.</h3>
            <div className="col s12 m6">
              <i className="material-icons large">enhanced_encryption</i><h5>Contact sources, write drafts, and receive edits over a 100% encrypted protocol.</h5>
            </div>
            <div className="col s12 m6">
              <i className="material-icons large">location_disabled</i><h5>Nothing is tracked. Graphite never touches nor has access to your data, including articles, contacts, conversations, and files.</h5>
            </div>
          </div>
          <div>
            <h3>Design your articles in Graphite Documents. Gather data in Graphite Sheets.</h3>
            <h5>Easily populate your stories with words and data in a rich editor designed specifically for journalists and editors.</h5>
            <div className="row">
              <div className="col s12 m6">
                <img src={layout} className="responsive-img" alt="example article layout" />
              </div>
              <div className="col journo-benefits s12 m6">
                <p><i className="material-icons">brush</i>It's more than just writing. Design around the story.</p>
                <p><i className="material-icons">cloud_upload</i>Share drafts back and forth without worrying about privacy.</p>
                <p><i className="material-icons">format_clear</i>Complete formatting tools to make it easy to get from first draft to final draft.</p>
                <p><i className="material-icons">show_chart</i>From data to visualization in a snap thanks to the built-in Sheets to Documents connection for journalists and editors.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="journo-background">

          <div className="center-align">

          </div>

        </div>
        <div className="container">
          <h3>Security policy controls for journalists and their newsrooms.</h3>
          <h5>Individual control over the deletion of data.</h5>
          <h5>Broad, newsroom control over data access and desctruction.</h5>
          <h5>Security for editors, journalists, and their sources.</h5>
          <h5>Unidentifiable bylines for those times when anonymity matters.</h5>
          <div className="center-align">
            <h3>Contact Us to Learn More</h3>
            <a href="mailto:contact@graphitedocs.com"><button className="btn black">Get in touch</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Journalism;
