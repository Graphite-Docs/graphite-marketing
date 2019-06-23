import React from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import testimonials from './testimonials.json';
import wired from '../assets/wired-logo.svg';
import guardian from '../assets/the-guardian-logo.svg';
import lifeHacker from '../assets/lifehacker-logo.svg';
var srcImg = wired;

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonial: 0
        }
    }
    loadDemoModal = () => {
        document.getElementById('demoModal').style.display = "block";
    }

    changeTestimonial = (dir) => {
        console.log(dir);
        if(dir === "right") {
            this.setState({ testimonial: this.state.testimonial + 1}, 
                () => {
                    console.log(this.state.testimonial);
                })
        } else {
            this.setState({ testimonial: this.state.testimonial - 1})
        }
        
    }

  render() {
      const { testimonial } = this.state;
    if(testimonial) {
        if(testimonials[testimonial].name === "Wired Magazine") {
            srcImg = wired;
        } else if(testimonials[testimonial].name === "The Guardian") {
            srcImg = guardian;
        } else if(testimonials[testimonial].name === "LifeHacker") {
            srcImg = lifeHacker;
        }
    } else {
        srcImg = wired;
    }
    return (
      <div className="testimonials-main">
            <div className="github-box">
                <div>
                    <div className="columns is-tablet">
                        <div className="column is-two-thirds">
                            <p>The features you need for a price you can afford. <a href="https://app.graphitedocs.com">Try Graphite for free now</a>, and when you're ready, let's talk about Graphite Pro.</p>
                        </div>
                        <div className="column is-one-third">
                            <div className="github-stars"><div><a onClick={this.loadDemoModal} style={{color: "#121212", position: "relative", top: "3px"}}>Request Demo</a></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-examples">
                <div className="columns is-mobile">
                    <div className="column arrow-col">
                        {
                            testimonial > 0 ? <img style={{cursor: "pointer"}} onClick={() => this.changeTestimonial("left")} src={arrowLeft} /> : <div className="hide" />
                        }
                    </div>
                    <div className="column testimonial">
                        <a style={{color: "#121212"}} href={testimonials[testimonial].url}>
                            <div>
                                <img src={srcImg} />
                                <p>"{testimonials[testimonial].test}"</p>
                                <div>
                                    <span>{testimonials[testimonial].author}, {testimonials[testimonial].name}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="column arrow-col">
                        {
                            testimonial +1 < testimonials.length ? <img style={{cursor: "pointer"}} onClick={() => this.changeTestimonial("right")} src={arrowRight} /> : <div className="hide" />
                        }
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Testimonials;
