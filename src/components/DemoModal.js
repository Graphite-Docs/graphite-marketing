import React from 'react';
import axios from 'axios';

class DemoModal extends React.Component {

  handleDemoSubmit = (e) => {
    e.preventDefault()
    const demo = {
      name: document.getElementById('name-text').value,
      orgName: document.getElementById('org-name-text').value,
      email: document.getElementById('email-text').value,
      message: document.getElementById('message-text').value
    }
    axios.post('https://hooks.zapier.com/hooks/catch/2565501/oy9yuoo/', JSON.stringify(demo))
      .then((res) => {
        if(res) {
          console.log(res);
          document.getElementById('demo-form').style.display = "none";
          document.getElementById('thanks').style.display = "block";
          document.getElementById('name-text').value = "";
          document.getElementById('org-name-text').value = "";
          document.getElementById('email-text').value = "";
          document.getElementById('message-text').value = "";
        } else {
          console.log("error");
        }
      }).catch((err) => {
        if(err) {
          console.log(err);
          document.getElementById('submit-button').style.background = "red"
        }
      })
  }

  handleCloseModal = () => {
    document.getElementById('name-text').value = "";
    document.getElementById('org-name-text').value = "";
    document.getElementById('email-text').value = "";
    document.getElementById('message-text').value = "";
    document.getElementById('demoModal').style.display = "none";

    document.getElementById('thanks').style.display = "none";
    document.getElementById('demo-form').style.display = "block";
  }

  render() {
    return (
      <div style={{display: "none"}} id="demoModal" className="custom-modal">
          <div className="center" style={{marginTop: "-300px"}}>
                <h3 onClick={this.handleCloseModal} className="closeIcon">X</h3>
                <div id="demo-form">
                  <h3>Request Demo</h3>
                  <form className="demo-form">
                      
                          <label id="name">Name</label> <br/>
                          <input id="name-text" type="text" htmlFor="name" placeholder="Enter your name"/><br/>
                      
                      
                          <label id="org-name">Organization Name</label><br/>
                          <input id="org-name-text" type="text" htmlFor="org-name" placeholder="Enter your organization's name"/><br/>
                      
                      
                          <label id="email">Email</label><br/>
                          <input id="email-text" type="text" htmlFor="email" placeholder="Enter your email address"/><br/>
                      
                      
                          <label id="message">Message</label><br/>
                          <textarea id="message-text" htmlFor="message" placeholder="Type out a message"></textarea>
                      
                  </form>
                  <button id="submit-button" onClick={this.handleDemoSubmit} className="submit-demo" type="submit">Submit</button>
                </div>
                <div id="thanks" style={{display: "none"}}>
                    <h1>Thanks for your interest!</h1>
                    <h3>Someone will reach out soon.</h3>
                  <button onClick={this.handleCloseModal} className="submit-demo">Back to the site</button>
                </div>
          </div>
      </div>
    );
  }
}

export default DemoModal;
