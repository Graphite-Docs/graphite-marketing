import React, { Component } from 'react';
import hero from '../assets/hero-img.svg';
import { handleIdCheck } from '../helpers.js';
import axios from 'axios';
var FileSaver = require('file-saver');
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

    fetchPDF = () => {
        axios.get('https://gaia.blockstack.org/hub/1Q5G5kWwDikELELXc54tNdwTg8gbfnLKDU/public/files/e8b3769f-536d-4b07-95af-4d2995a01f0a.json')
            .then((res) => {
                console.log(res);
                var oReq = new XMLHttpRequest();
                var URLToPDF = res.data.link;
            
                // Configure XMLHttpRequest
                oReq.open("GET", URLToPDF, true);
            
                // Important to use the blob response type
                oReq.responseType = "blob";
            
                // When the file request finishes
                // Is up to you, the configuration for error events etc.
                oReq.onload = function() {
                    // Once the file is downloaded, open a new window with the PDF
                    // Remember to allow the POP-UPS in your browser
                    var file = new Blob([oReq.response], { 
                        type: 'application/pdf' 
                    });
                    
                    // Generate file download directly in the browser !
                    FileSaver.saveAs(file, "casestudy.pdf");
                };
            
                oReq.send();
            }).catch(err => console.log(err));
    }

    async handleEmail() {
        const email = document.getElementById('email-addy').value;
        const emailBody = {
            email
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())) {
            document.getElementById('err-msg').style.display = "none";
            axios.post('https://hooks.zapier.com/hooks/catch/2565501/oy9uofw/', JSON.stringify(emailBody))
                .then((res) => {
                    console.log(res);
                }).catch(err => console.log(err));
            const modal = await handleIdCheck();
            if(modal === true) {
                document.getElementById('email-addy').value = "";
                document.getElementById('thanksModal').style.display = "block";
            }
        } else {
            document.getElementById('err-msg').style.display = "block";
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
                    <div style={{maxWidth: "85%", margin: "auto"}}>
                        <div className="columns">
                            <div className="column">
                                {/* <nav className="navbar hero-nav" role="navigation" aria-label="main navigation">
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
                                        <div id="err-msg" style={{display: "none"}}>
                                            <p style={{color: "red"}}>Please enter a valid email address</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div style={{ color: "#fff"}}>
                                    <h1>Goodbye from Graphite</h1>
                                    <p style={{marginTop: 15, fontSize: 20}}>Graphite was a decentralized, privacy-centric alternative to Google Docs. It saw 
                                        quite a bit of press and had a loyal user-base. However, as with many great products, 
                                        it could not find product-market fit in time. 
                                    </p>
                                    <p style={{marginTop: 15, fontSize: 20}}>So, while Graphite is no longer a company or a hosted app, it's source code will live on and 
                                        forever be available to anyone who wants to use it or build off it. 
                                    </p>
                                    <p style={{marginTop: 15, fontSize: 20}}>Thank you to everyone who supported Graphite over the years. You mean the world to me!</p>
                                    <p style={{marginTop: 15, fontSize: 20}}>Sincerely,</p>
                                    <p style={{fontSize: 20}}>Justin Hunter</p>
                                </div>
                            </div>
                            {/* <div className="column">
                                <img className="hero-img" src={hero} alt="computer and phone with example" />
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div style={{display: "none"}} id="thanksModal" className="custom-modal">
                    <div>
                        <span onClick={() => document.getElementById('thanksModal').style.display = "none"}>X</span>
                        <h1>Thanks for your interest!</h1>
                        <h3>Someone will reach out soon. In the meantime, download this case study on how Graphite supports NGOs, journalists, and businesses.</h3>
                        <button onClick={this.fetchPDF} className="download-btn">Download</button>
                    </div>
                </div> */}
            </div>
          );
    }
}
