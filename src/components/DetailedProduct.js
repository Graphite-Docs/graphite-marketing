import React from 'react';
import github from '../assets/github.svg';
import circles from '../assets/circles.svg';
import detailsOne from '../assets/details-icon-one.svg';
import hero from '../assets/hero-img.svg';
import docs from '../assets/docsdemo.gif';
import encryptedCollab from '../assets/encryptedCollab.svg'


class DetailedProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0
        }
      }
      componentDidMount() {
        return fetch('https://api.github.com/repos/graphite-docs/graphite')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ stars: myJson.stargazers_count })
            });
      }
    render() {
        const { stars } = this.state;
        return (
            <div className="detailed-product">
                <div className="github-box">
                    <div>
                        <div className="columns is-tablet">
                            <div className="column is-two-thirds">
                                <p>Graphite is open source and available for contributions. You can also run Graphite locally on your computer without visiting the hosted site. <a href="https://github.com/graphite-docs/graphite">Clone it from Github</a>.</p>
                            </div>
                            <div className="column is-one-third">
                                <div className="github-stars"><div><img style={{float: "left"}} src={github} /><a href="https://github.com/graphite-docs/graphite"><strong style={{paddingTop: "2px"}}>{stars} Stars</strong></a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="features"  className="details-one">
                    <img src={circles} />
                    <h1>Cloud Convenience With None Of The Privacy Tradeoff</h1>
                    <p>Cloud computing brought us the convenience of being able to access our data from anywhere. From any device. It also brought with it the risk of exposing our most personal information. Graphite continues the convenience of cloud computing but plugs the security and privacy gaps left by large tech companies.</p>
                </div>
                <div className="details-two">
                    <div className="columns is-desktop">
                        <div className="column">
                            <div style={{maxWidth: "65%", margin: "auto"}}>
                                <img src={detailsOne} />
                                <h2>Access Your Content Anywhere, Anytime</h2>
                                <p>Your identity plus your encryption keys are all you need to access your content from any device. Log into your account on a new device, and the encryption keys are automatically derived for you, meaning you're ready to go in about the same time it takes to log into a regular application.</p>
                            </div>
                        </div>
                        <div className="column orange-column">
                            <div className="orange-circle">
                            </div>
                            <img style={{position: "relative"}} src={hero} />
                        </div>
                    </div>
                </div>
                <div className="details-three">
                <div className="columns is-desktop">
                        <div className="column black-column">
                            <div className="black-circle"></div>
                            <img className="docs-gif" style={{position: "relative"}} src={docs} />
                        </div>
                        <div className="column">
                            <div style={{maxWidth: "65%", margin: "auto"}}>
                                    <img src={encryptedCollab} />
                                    <h2>Your Edits, Their Edits—All Synced, All Encrypted</h2>
                                    <p>You don't have to sacrifice what is perhaps the most productive feature of traditional cloud productivity software. You can have security, encryption, and privacy AND collaborate in real-time. Graphite makes it happen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default DetailedProduct;
