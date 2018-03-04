import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';

class Footer extends Component {

  render() {
    var date = new Date();
    var year = date.getFullYear();
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Graphite</h5>
              <p className="grey-text text-lighten-4">Own your data.</p>
            </div>
            <div className="col l4 offset-l2 s12">

              <ul className="right">
                <li><a className="grey-text text-lighten-3" href="http://app.graphitedocs.com">Sign In</a></li>
                <li><a className="grey-text text-lighten-3" href="/features">Features</a></li>
                <li><a className="grey-text text-lighten-3" href="http://blockstack.org">Blockstack</a></li>
                <li><a className="grey-text text-lighten-3" href="mailto:contact@graphitedocs.com">Contact</a></li>
                <li><a className="grey-text text-lighten-3" href="https://twitter.com/graphitedocs">Twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="https://github.com/Graphite-Docs/graphite">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      <div className="footer-copyright">
        <div className="container">
        © {year} Graphite
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
