import React from 'react';
import graphiteLogo from '../assets/graphite-logo.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

class Footer extends React.Component {

  render() {
    return (
      <div className="foot">
        <div className="columns footer-cols is-mobile">
            <div className="column">
                <img className="footer-logo" src={graphiteLogo} />
                <p><a href="contact@graphitedocs.com">contact@graphitedocs.com</a></p>
                <p><a href="https://github.com/graphite-docs">https://github.com/graphite-docs</a></p>
                <ul>
                    <li><a href="https://twitter.com/graphitedocs"><img src={twitter} /></a></li>
                    <li><a href="https://www.linkedin.com/company/graphitedocs/"><img src={linkedin} /></a></li>
                </ul>
            </div>
            <div className="column">
                <h4>Company</h4>
                <p><a href="https://blog.graphitedocs.com">Blog</a></p>
                <p><a href="https://app.graphitedocs.com/shared/docs/graphite.id-1551220081697">Privacy Policy</a></p>
                <p><a href="mailto:contact@graphitedocs.com">Contact</a></p>
            </div>
            <div className="column">
                <h4>Development</h4>
                <p><a href="https://github.com/Graphite-Docs/graphite/projects/1">Roadmap</a></p>
                <p><a href="https://github.com/Graphite-Docs/graphite">Github</a></p>
                <p><a href="https://github.com/Graphite-Docs/graphite/blob/master/README.md">Contributions</a></p> 
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
