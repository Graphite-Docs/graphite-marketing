import React from 'react';
import lite from '../assets/lite.png';
import allowcation from '../assets/allowcation.png';

export default class LabsHero extends React.Component {
    render() {
        return (
            <div style={{marginBottom: "150px"}} id="labs-section">
                <div className="center product-info">
                    <h1>Graphite Labs is for Experimentation</h1>
                    <p>Building decentralized, secure, and privacy-focused applications requires experimentation. Not every experiment will warrant a full commitment to long-term maintenance and support, but some will become core parts of Graphite's product.</p>
                    <p>Below, you will find some of Graphite's current experiments.</p>
                </div>
                <div className="labs-rect"></div>
                <div id="labs-examples">
                    <div className="columns">
                        <div className="column">
                            <a href="https://publishuing.graphitedocs.com">
                                <div>
                                    <img src="https://publishing.graphitedocs.com/static/media/publishing.96f659e8.png" alt="graphite publishing" />
                                    <h3>Graphite Publishing</h3>
                                    <p>A simple publishing platform that gives you super powers. Own your posts, design your site, and write.</p>
                                </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://lite.graphitedocs.com">
                                <div>
                                    <img src={lite} alt="graphite lite" />
                                    <h3>Graphite Lite</h3>
                                    <p>A lightweight version of Graphite's document editor built using IPFS and uPort.</p>
                                </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://allowcation.com">
                                <div>
                                    <img src={allowcation} alt="Allowcation" />
                                    <h3>Allowcation</h3>
                                    <p>An educational tool for children, teaching them about saving and Bitcoin all at once.</p>
                                </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://getwritesprint.com">
                                <div>
                                    <img src="https://www.getwritesprint.com/images/starting.gif" alt="Write/Sprint" />
                                    <h3>Write/Sprint</h3>
                                    <p>A desktop app for timing your writing sprints and tracking your progress across sprints.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}