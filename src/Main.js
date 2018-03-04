import React, { Component } from 'react';
import tweets from './tweets.png';
import newdoc from './newdoc.png';
import editdoc from './editdoc.png';
import sheets from './sheets.png';
import stats from './stats.png';
import share from './Shared.png';
import retrieve from './retrieve.png';
import shareddoc from './shareddoc.png';
import blockstack from './blockstack.png';
import docs from './Documents_Large.png';
import sheetsLarge from './Sheets_Large.png';
import contacts from './Contacts_Large.png';
import convos from './Conversations_Large.png';


class Main extends Component {
  render() {
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

    return(
      <div>
      <div className="center-align main-hero">
        <div className="container">
        <div className="card hero-card">
        <h1>Own your
        <span
           className="txt-rotate"
           data-period="2000"
           data-rotate='[ " documents.", " spreadsheets.", " data." ]'></span>
        </h1>
          <h5>Graphite is powered by <a href="http://blockstack.org" target="_blank">Blockstack</a> and is the first truly decentralized and encrypted replacement for Google G-Suite and Microsoft Office.</h5>
          <a href="http://app.graphitedocs.com" target="_blank"><button
            className="btn btn-primary btn-lg"
            id="signin-button"
          >
            Get Started
          </button></a>
          <a href="#more"><button
            className="btn btn-primary btn-lg grey"
          >
            Learn More
          </button></a>
        </div>
        </div>
      </div>
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

      <div className="white-section app-banner">
        <div className="container row">
          <div className="col s6 m3 center-align">
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
            <img className="responsive-img" src={convos} alt="conversations-icon" />
            <h4 className="flow-text">Conversations</h4>
          </div>
        </div>
      </div>
        <div className="grey-section">
          <div className="container center-align">
            <p className="caps white-text">Encrypted and decentralized</p>
            <h5 className="white-text">Graphite enables convenient, secure, decentralized, and user-owned file creation, file storage, communication, and sharing.</h5>
            <div className="row benefits center-align">
              <div className="col s12 m4">
                <i className="material-icons medium white-text">computer</i>
                <p className="benefits-p white-text">Work and play with the same convenience you expect from cloud computing.</p>
              </div>
              <div className="col s12 m4">
                <i className="material-icons medium white-text">content_copy</i>
                <p className="benefits-p white-text">Share files, make edits, and collaborate while never losing ownership of your data.</p>
              </div>
              <div className="col s12 m4">
                <i className="material-icons medium white-text">chat_bubble_outline</i>
                <p className="benefits-p white-text">Chat with friends, colleagues, or classmates with full end-to-end encryption and privacy.</p>
              </div>
              <div className="center-align">
                <a href="/features"><button className="btn features-btn waves-effect waves-light white black-text">Features</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-four center-align">
        <h1>How it Works</h1>
        <h4>Graphite never stores your identity or data</h4>
        <img className="responsive-img" src={blockstack} alt="Blockstack architecture diagram" />
        <div>
        <a href="http://blockstack.org" target="_blank"><button
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
