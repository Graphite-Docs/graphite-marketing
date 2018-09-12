import React, { Component } from 'react';
import '../App.css';
import types from '../images/types.png';
import contactcard from '../images/contactcard.png';
import find from '../images/findcontact.png';

class Contacts extends Component {

  render() {
    return (
      <div className="center-align">
        <div className="row">
          <div className="col s12">
            <h3>Organize contacts however you want</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={types} alt="document grid" />
          </div>
          <div className="col s12">
            <h3>Automatic profile import for your contacts</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={contactcard} alt="Tagging" />
            <h5>Basic, useful info without manual entry</h5>
          </div>
          <div className="col s12">
            <h3>Plain text search</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={find} alt="Tagging" />
            <h5>No need to memorize Blockstack IDs</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
