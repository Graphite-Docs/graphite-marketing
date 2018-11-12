import React, { Component } from 'react';
import pencil from './pencil-256.png';
import './App.css';

class Header extends Component {

  componentDidMount() {
    window.$(".button-collapse").sideNav();
    window.$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  }


  render() {

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">Graphite.<img className="pencil" src={pencil} alt="pencil" /></a>
          <a data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a className="dropdown-button" data-activates="dropdown2">Uses<i className="material-icons drop right">arrow_drop_down</i></a></li>
            {/*<li><a href="/faq">FAQ</a></li>*/}
            {/*<li><a href="/pricing">Pricing</a></li>*/}
            <li><a href="/demo">Request Demo</a></li>
            <li><a href="http://app.graphitedocs.com" rel="noopener noreferrer" target="_blank">Sign in</a></li>
          </ul>
          <ul id="dropdown2" className="dropdown-content">
            {/*<li><a href="/personal">Personal</a></li>*/}
            <li><a href="/journalism">Journalism</a></li>
            <li><a href="/business">Business</a></li>
            <li><a href="/non-governmental">NGO</a></li>
          </ul>
          <ul id="dropdown1" className="dropdown-content">
            {/*<li><a href="/personal">Personal</a></li>*/}
            <li><a href="/journalism">Journalism</a></li>
            <li><a href="/business">Business</a></li>
            <li><a href="/non-governmental">NGO</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a className="dropdown-button" data-activates="dropdown1">Uses<i className="material-icons drop right">arrow_drop_down</i></a></li>
            {/*<li><a href="/faq">FAQ</a></li>*/}
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/demo">Request Demo</a></li>
            <li><a href="http://app.graphitedocs.com" rel="noopener noreferrer" target="_blank">Sign in</a></li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default Header;

//
// <nav>
// <div className="container">
//     <div className={show}>
//       <ul id="dropdown1" className="dropdown-content">
//         {/*<li><a href="/personal">Personal</a></li>*/}
//         <li><a href="/journalism">Journalism</a></li>
//         <li><a href="/business">Business</a></li>
//         <li><a href="/non-governmental">NGO</a></li>
//       </ul>
//     </div>
//     <div className={hide}>
//       <ul id="dropdown1" className="dropdown-content">
//         <li><a href="/about">About</a></li>
//         <li><a href="/features">Features</a></li>
//         {/*<li><a href="/faq">FAQ</a></li>*/}
//         <li><a href="/pricing">Pricing</a></li>
//         <li><a href="/demo">Request Demo</a></li>
//         <li><a href="https://app.graphitedocs.com" rel="noopener noreferrer" target="_blank">Sign In</a></li>
//       </ul>
//     </div>
//     <div className="nav-wrapper">
//       <a href="/" className="brand-logo left">Graphite.<img className="pencil" src={pencil} alt="pencil" /></a>
//       <div className="hide-on-med-and-down">
//         <ul id="nav-mobile" className="right">
//           <li><a href="/about">About</a></li>
//           <li><a href="/features">Features</a></li>
//           <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Uses<i className="material-icons drop right">arrow_drop_down</i></a></li>
//           {/*<li><a href="/faq">FAQ</a></li>*/}
//           <li><a href="/pricing">Pricing</a></li>
//           <li><a href="/demo">Request Demo</a></li>
//           <li><a href="http://app.graphitedocs.com" rel="noopener noreferrer" target="_blank">Sign in</a></li>
//         </ul>
//       </div>
//       <div className="hide-on-med-and-up">
//         <ul id="nav-mobile" className="right">
//           <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Menu<i className="material-icons drop right">arrow_drop_down</i></a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </nav>
