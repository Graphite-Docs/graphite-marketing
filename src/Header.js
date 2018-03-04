import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
      hide: "hide"
    }
    this.toggleHide = this.toggleHide.bind(this);
  }

  toggleHide() {
    if(this.state.hide == "hide"){
      this.setState({show: "hide", hide: ""});
    } else {
      this.setState({show: "", hide: "hide"});
    }

  }

  render() {
    let show = this.state.show;
    let hide = this.state.hide;

    return (
      <nav>
      <div className="container">
          <div className={show}>
            <ul id="dropdown1" className="dropdown-content">
              <li><a href="/personal">Personal</a></li>
              <li><a href="/journalism">Journalism</a></li>
              <li><a href="/business">Business</a></li>
              <li><a href="/non-governmental">NGO</a></li>
            </ul>
          </div>
          <div className={hide}>
            <ul id="dropdown1" className="dropdown-content">
              <li><a href="/about">About</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="https://app.graphitedocs.com" target="_blank">Sign In</a></li>
            </ul>
          </div>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left">Graphite.<img className="pencil" src="http://www.iconsplace.com/icons/preview/black/pencil-256.png" alt="pencil" /></a>
            <div className="hide-on-med-and-down">
              <ul id="nav-mobile" className="right">
                <li><a href="/about">About</a></li>
                <li><a href="/features">Features</a></li>
                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Uses<i className="material-icons drop right">arrow_drop_down</i></a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="http://app.graphitedocs.com" target="_blank">Sign in</a></li>
              </ul>
            </div>
            <div className="hide-on-med-and-up">
              <ul id="nav-mobile" className="right">
                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Menu<i className="material-icons drop right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
