import React, { Component } from 'react';
import blockstack from './blockstack.png';
import wapo from './wapo.png';
import wired from './wired.png';
import lifehacker from './lifehacker.png';
import cheddar from './cheddar.png';
import document from './images/docsshot.png'
import Features from './Features';


class Main extends Component {
  componentDidMount() {
    window.$('.modal').modal();
  }
  render() {

    return(
      <div>
      <div className="hero-image-section row">
        <div className="col s12 m6">

        </div>
        <div id="more" className="col s12 m6 hero-image-content">
          <h1 className="center-align">Work anywhere without worrying about your data.</h1>
          <div className="center-align"><i className="material-icons">lock_outline</i><i className="material-icons">share</i><i className="material-icons">all_inclusive</i></div>
          <h5 className="center-align">All your work, files, and messages—encrypted, shareable, decentralized</h5>
        </div>
      </div>
      <div>

      <div className="row container social-proof">
        <p className="center-align">As seen in:</p>
        <div className="col s3">
          <div>
            <a href="https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches" rel="noopener noreferrer" target="_blank">
              <img className="social-proof-img wired responsive-img" src={wired} alt="Wired article about Graphite" />
            </a>
          </div>
        </div>
        <div className="col s3">
          <div>
            <a href="https://www.washingtonpost.com/news/the-switch/wp/2018/03/23/the-new-technology-that-aspires-to-deletefacebook-for-good/?utm_term=.25e014058822" rel="noopener noreferrer" target="_blank">
              <img className="social-proof-img wapo responsive-img" src={wapo} alt="Washington Post article about Graphite" />
            </a>
          </div>
        </div>
        <div className="col s3">
          <div>
            <a href="https://lifehacker.com/check-out-this-google-docs-competitor-1823520656" target="_blank" rel="noopener noreferrer">
              <img className="social-proof-img lifehacker responsive-img" src={lifehacker} alt="Lifehacker article about Graphite" />
            </a>
          </div>
        </div>
        <div className="col s3">
          <div>
            <a href="https://cheddar.com/videos/graphite-the-blockchain-backed-competitor-to-google-docs" target="_blank" rel="noopener noreferrer">
              <img className="social-proof-img cheddar responsive-img" src={cheddar} alt="Cheddar interview with Graphite" />
            </a>
          </div>
        </div>
      </div>

      <div className="white-section app-banner">
      <div className="container row">
          {/*<div className="col s6 m3 center-align">
            <img className="responsive-img" src={docs} alt="document-icon" />
            <h4 className="flow-text">Documents</h4>
          </div>
          <div className="col s6 m3 center-align">
            <img className="responsive-img" src={sheetsLarge} alt="sheets-icon" />
            <h4 className="flow-text">Sheets</h4>
          </div>
          <div className="col s6 m3 center-align">
            <img className="responsive-img" src={contacts} alt="contacts-icon" />
            <h4 className="flow-text">Contacts</h4>
          </div>
          <div className="col s6 m3 center-align">
            <img className="vault-icon" src={vault} alt="conversations-icon" />
            <h4 className="flow-text">Vault</h4>
          </div>*/}

          <div className="col s12 center-align">
            <h3>All your files in one place, secure and totally owned by you.</h3>
            <img className="responsive-img" src={document} alt="Graphite dashboard" />
            <button data-target="videoModal" className="btn btn-margin black modal-trigger">Watch Video</button>
          </div>

          {/* Video Modal */}
          <div id="videoModal" className="modal">
            <div className="modal-content">
              <div className="video-container">
                <iframe title="Graphite video" src="https://player.vimeo.com/video/288013669" width="640" height="400"></iframe>
              </div>
            </div>
            <div className="modal-footer">
              <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
          </div>
          {/* Video Modal */}

        </div>
      </div>
        <Features />

        <div className="dark-section">
          <div className="container center-align">
            <h5>Graphite is powered by <a className="underline" href="http://blockstack.org" target="_blank" rel="noopener noreferrer">Blockstack'{/*'*/}s</a> open source software and is the first truly decentralized and encrypted replacement for Google G-Suite and Microsoft Office.</h5>
            <div className="row benefits center-align">
              <div className="col s12 m4">
                <i className="material-icons medium">computer</i>
                <p className="benefits-p">Work and play with the same convenience you expect from cloud computing.</p>
              </div>
              <div className="col s12 m4">
                <i className="material-icons medium">content_copy</i>
                <p className="benefits-p">Share files, make edits, and collaborate while never losing ownership of your data.</p>
              </div>
              <div className="col s12 m4">
                <i className="material-icons medium">chat_bubble_outline</i>
                <p className="benefits-p">Chat with friends, colleagues, or classmates with full end-to-end encryption and privacy.</p>
              </div>
            </div>
            <a href="http://app.graphitedocs.com" target="_blank" rel="noopener noreferrer"><button
              className="btn btn-primary btn-margin btn-lg"
              id="signup-button"
            >
              Sign Up For Free
            </button></a>

          </div>
        </div>
      </div>
      <div className="section-four center-align">
        <h1>How it Works</h1>
        <h4>Graphite never stores your identity or data</h4>
        <img className="responsive-img" src={blockstack} alt="Blockstack architecture diagram" />
        <div>
        <a href="http://blockstack.org" target="_blank" rel="noopener noreferrer"><button
          className="btn btn-primary btn-lg"
          id="signin-button"
        >
          Learn More About Blockstack
        </button></a>
        </div>
      </div>
      </div>
    );
  }
}

export default Main;
