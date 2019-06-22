import React, { Component } from 'react';
import hero from '../assets/hero-img.svg';
import { handleIdCheck } from '../helpers.js';
let content;
let type;

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "ngo"
        }
    }
    setType(type) {
        this.setState({ type });
    }

    async handleEmail() {
        const modal = await handleIdCheck();
        if(modal === true) {
            document.getElementById('email-addy').value = "";
            document.getElementById('thanksModal').style.display = "block";
        }
    }

    renderContent() {
        const { type } = this.state;
        if (type==="ngo") {
            return(
            <div className="margin-top-10">
                <h3>Helping those most in need</h3>
                <h1 className="margin-top-10">Collaborate on documents, share files, collect information. All private. All encrypted. All with Graphite.</h1>
            </div>
            );
          } else if(type==="journo") {
            return(
                <div className="margin-top-10">
                    <h3>Protecting freedom of press globally</h3>
                    <h1 className="margin-top-10">Protect sources, share documents, get edits, and publish stories that matter. Graphite protects your work.</h1>
                </div>
            );
          } else {
              return (
                <div className="margin-top-10">
                    <h3>Your organization, your data</h3>
                    <h1 className="margin-top-10">Work with clients, share files and documents internally or externally. Graphite protects your business.</h1>
                </div>
              )
          }
    }


    render() {
        return (
            <div id="uses" className="margin-top-60 hero-main">
                <div id="wave">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <nav className="navbar hero-nav" role="navigation" aria-label="main navigation">
                                    <div className="navbar-brand">
                                        <a className="navbar-item" onClick={() => this.setType('ngo')}>
                                            NGOs
                                        </a>
                                        <a onClick={() => this.setType('journo')} className="navbar-item" >
                                            Journalists
                                        </a>
                                        <a onClick={() => this.setType('business')} className="navbar-item">
                                            Businesses
                                        </a>
                                    </div>
                                </nav>
                                <div className="hero-content">
                                    {this.renderContent()}
                                    <div className="margin-top-20">
                                        <input id="email-addy" type="text" placeholder="Enter your email to learn more" /><button onClick={this.handleEmail} className="hero-get-started">Learn More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <img className="hero-img" src={hero} alt="computer and phone with example" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "none"}} id="thanksModal" className="custom-modal">
                    <div>
                        <span onClick={() => document.getElementById('thanksModal').style.display = "none"}>X</span>
                        <h1>Thanks for your interest!</h1>
                        <h3>Someone will reach out soon. In the meantime, download this case study on how Graphite supports NGOs.</h3>
                        <button className="download-btn">Download</button>
                    </div>
                </div>
            </div>
          );
    }
}
