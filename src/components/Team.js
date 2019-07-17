import React from 'react';
import circles from '../assets/circles.svg';
import justin from '../assets/justin.jpg';
import dan from '../assets/dan.jpeg';
import adam from '../assets/adam.jpg';

export default class Team extends React.Component {
    render() {
        return (
            <div className="detailed-product">
                <div className="github-box">
                    <div>
                        <div className="columns is-tablet">
                            <div className="column is-two-thirds">
                                
                            </div>
                            <div className="column is-one-third">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div id="team"  className="details-one">
                    <img src={circles} />
                    <h1>The Team</h1>
                    <div className="columns">
                        <div className="column">
                            <img className="team-images" src={justin} alt="Justin" />
                        </div>
                        <div className="column">
                            <h3>Justin Hunter - Founder</h3>
                            <p>Justin did not come from a development background. But he has always been a problem solver. He was finishing his MFA in Creative Writing when he got tired of Google have control of all his documents. He wanted a better alternative but couldn't find one. So, he learned to code and built Graphite.</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <img className="team-images" src={dan} alt="Dan" />
                        </div>
                        <div className="column">
                            <h3>Dan Hughes - Strategy</h3>
                            <p>Dan has founded and helped lead multiple companies. In addition to helping the strategy development and growth of Graphite, he is the COO of Learning Machine, Inc. His macro view on the world provides Graphite a competitive advantage through seeing what will happen before it happens.</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <img className="team-images" src={adam} alt="Adam" />
                        </div>
                        <div className="column">
                            <h3>Adam Gutierrez - Product</h3>
                            <p>Adam and Justin worked together previously at an education technology software company. There, Adam honed his product chops by working directly with customers, working with the engineering team, and making sure the entire app had test coverage.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}