import React, { Component } from 'react';
import '../App.css';
import docsgrid from '../images/docsgrid.png';
import tags from '../images/Tags.png'
import share from '../images/share.png';

class Documents extends Component {

  render() {
    return (
      <div className="center-align">
        <div className="row">
          <div className="col s12">
            <h3>All your documents in one place</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={docsgrid} alt="document grid" />
          </div>
          <div className="col s12">
            <h3>Replace messy folder organization with streamlined and flexible tagging</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={tags} alt="Tagging" />
            <h5>Tag, filter, find</h5>
          </div>
          <div className="col s12">
            <h3>Encrypted sharing and collaboration to a user or your entire team</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={share} alt="Tagging" />
            <h5>One-click sharing, totally secure</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Documents;
