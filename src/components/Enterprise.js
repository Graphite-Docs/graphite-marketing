import React from 'react';
import intersect from '../assets/intersect.svg';
import teams from '../assets/team-page.svg';
import key from '../assets/key.svg';
import uses from '../assets/use-case.svg';
import storage from '../assets/storage.svg';

class Enterprise extends React.Component {

    loadDemoModal = () => {

        document.getElementById('demoModal').style.display = "block";
    }

  render() {
    return (
        <div id="enterprise" className="enterprise-product">
            <div className="github-box">
                <div>
                    <div className="columns is-mobile">
                        <div className="column is-two-thirds">
                            <p>Ready to get to work? <a href="https://app.graphitedocs.com">Start using Graphite for free now</a>. Or, contact us to learn about how Graphite can help your organization protect its privacy and increase its security.</p>
                        </div>
                        <div className="column is-one-third">
                            <div className="github-stars"><div><a onClick={this.loadDemoModal} style={{color: "#121212", position: "relative", top: "3px"}}>Request Demo</a></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center enterprise-summary">
                <img src={intersect} />
                <h1>Graphite Is For Enterprises That Are Serious About Privacy</h1>
                <p>At the intersection of convenience and privacy is Graphite. If you need to get work done while protecting the people you work with—both from bad actors and nation states—Graphite provides the tools to help you keep your work private and secure. Don't compromise just because it's what everyone else is doing.</p>
            </div>
            <div className="teams-image-section">
                <img src={teams} />
            </div>
            <div className="orange-bar"></div>
            <div className="columns is-desktop enterprise-features">
                <div className="column">
                    <img className="icon-img" src={key} />
                    <h3>User Management & Encryption</h3>
                    <p>Invite users even if they haven't created an account yet. Every invite is encrypted, and users automatically have access to team encryption keys until they are removed from the team.</p>
                </div>
                <div className="column">
                    <img className="icon-img" src={uses} />
                    <h3>Team Collaboration</h3>
                    <p>Everyone will always be on the same page. Edits are synced and encrypted so that each member of the team is always up to date. Content is never stored on Graphite's server or databases.</p>
                </div>
                <div className="column">
                    <img src={storage} />
                    <h3>Custom Storage Deployment</h3>
                    <p>Truly own your data by running a storage hub on your own cloud provider or on premise. Graphite can help you configure and deploy your storage hubs. </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Enterprise;
