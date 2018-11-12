import React, { Component } from 'react';
import '../App.css';
import upload from '../images/upload.png'
import vaultshare from '../images/sharing.png';
import video from '../images/video.png';

class Vault extends Component {

  render() {
    return (
      <div className="center-align">
        <div className="row">
          <div className="col s12">
            <h3>Upload all your important files</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={upload} alt="upload files example" />
          </div>
          <div className="col s12">
            <h3>Simple file sharing</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={vaultshare} alt="share with contacts" />
            <h5>Allow without losing security</h5>
          </div>
          <div className="col s12">
            <h3>Wide ranging file support</h3>
          </div>
          <div className="col s12">
            <img className="responsive-img z-depth-4" src={video} alt="video example" />
            <h5>View your images or play your videos right from Vault</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Vault;
