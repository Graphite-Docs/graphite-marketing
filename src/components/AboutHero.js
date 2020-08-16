import React from 'react';
import { handleIdCheck } from '../helpers.js';
import axios from 'axios';
var FileSaver = require('file-saver');

export default class AboutHero extends React.Component {
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

    render() {
        return (
            <div id="uses" className="margin-top-60 hero-main about-hero">
                <div id="wave">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <div className="hero-content about-content">
                                    <h3 style={{fontSize: "36px"}}>Graphite was all about changing the way you work</h3>
                                    <div className="margin-top-20">
                                        <p>Founded in March of 2018, Graphite grew out of a passion project designed to give writers control of their data. To be completely accurate, it grew out of a desire to give Graphite's founder control over his own writing. 
                                            Graphite was never meant to be a publicly available, commerical product. It was originally designed to be a tool used by Graphite's founder. But as with many projects that start like this, others heard about it and wanted to use it. 
                                            Those early adopters helped encourage and drive continued work and Graphite grew into a full productivity suite designed to protect your privacy. 
                                        </p>
                                        <p>
                                            Graphite's main goal was to give people control. This started with protecting privacy via encryption, but it extended into giving people the ability to choose where their content was stored. While Google is comfortable storing all of your 
                                            content in their own databases, unenecrypted and available for snooping, Graphite never wanted to be a part of that paradigm. 
                                        </p>
                                        <p>
                                            Graphite offered document editing and collaboration tools, file storage and sharing tools, form builders and analysis, contact management, and team management.
                                        </p>
                                    </div>
                                    {/* <div className="margin-top-40">
                                        <input id="email-addy" type="text" placeholder="Enter your email to learn more" /><button onClick={this.handleEmail} className="hero-get-started">Learn More</button>
                                        <div id="err-msg" style={{display: "none"}}>
                                            <p style={{color: "red"}}>Please enter a valid email address</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{display: "none"}} id="thanksModal" className="custom-modal">
                    <div>
                        <span onClick={() => document.getElementById('thanksModal').style.display = "none"}>X</span>
                        <h1>Thanks for your interest!</h1>
                        <h3>Someone will reach out soon. In the meantime, download this case study on how Graphite supports NGOs, journalists, and businesses.</h3>
                        <button onClick={this.fetchPDF} className="download-btn">Download</button>
                    </div>
                </div>

                <div style={{display: "none"}} id="thanksModal" className="custom-modal">
                    <div>
                        <span onClick={() => document.getElementById('thanksModal').style.display = "none"}>X</span>
                        <h1>Thanks for your interest!</h1>
                        <h3>Someone will reach out soon. In the meantime, download this case study on how Graphite supports NGOs, journalists, and businesses.</h3>
                        <button onClick={this.fetchPDF} className="download-btn">Download</button>
                    </div>
                </div>

            </div>
        )
    }
}