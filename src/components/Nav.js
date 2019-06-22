import React from 'react';
import graphiteLogo from '../assets/graphite-logo.svg';
let open = false;

function toggleMenu () {
    let element = document.getElementById('navbarBasicExample');
    if(open === true) {
        element.className += ' fade-out';
        setTimeout(() => {
            element.classList.remove("is-active");
            open = false;
        }, 500)
    } else {
        element.classList.remove("fade-out");
        element.className += " is-active";
        open = true;
        console.log(open);
    }
}

function Nav() {
  return (
    <nav className="navbar main-nav is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src={graphiteLogo} className="logo" alt="graphite-logo" />
            </a>

            <a role="button" onClick={toggleMenu} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu fade-in">
            <div className="navbar-start">
                <a href="#uses" className="navbar-item">
                Use Cases
                </a>
                <a href="#why-graphite" className="navbar-item">
                Why Graphite
                </a>
                <a href="#features" className="navbar-item">
                Features
                </a>
                <a href="#enterprise" className="navbar-item">
                Enterprise
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                <div className="buttons">
                    <a className="demo-button">
                    <strong>Request Demo</strong>
                    </a>
                    <a className="g-button">
                    <strong>Get Graphite</strong>
                    </a>
                </div>
                </div>
            </div>
            </div>
      </nav>
  );
}

export default Nav;
