import React, { Component } from 'react';
// import pencil from './pencil.png';
// import daniel from './daniel.jpg';
// import dan from './dan.jpeg';
// import ethan from './ethan.jpg';
import './App.css';
import axios from 'axios';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      orgName: "",
      orgType: "",
      email: "",
      phone: "",
      message: "",
      demoRequest: {}
    }
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName =this.setLastName.bind(this);
    this.setOrgName = this.setOrgName.bind(this);
    this.setOrgType = this.setOrgType.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhone = this.setPhone.bind(this);
    this.saveRequest = this.saveRequest.bind(this);
    this.submit = this.submit.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  setFirstName(e) {
    this.setState({ firstName: e.target.value});
  }

  setLastName(e) {
    this.setState({ lastName: e.target.value});
  }

  setOrgName(e) {
    this.setState({ orgName: e.target.value});
  }

  setOrgType(e) {
    this.setState({ orgType: e.target.value});
  }

  setEmail(e) {
    this.setState({ email: e.target.value});
  }

  setPhone(e) {
    this.setState({ phone: e.target.value});
  }

  setMessage(event) {
    this.setState({ message: event.target.value});
  }

  saveRequest() {
    const object = {};
    object.firstName = this.state.firstName;
    object.lastName = this.state.lastName;
    object.email = this.state.email;
    object.phone = this.state.phone;
    object.orgName = this.state.orgName;
    object.orgType = this.state.orgType;
    object.message = this.state.message;
    this.setState({demoRequest: object});
    setTimeout(this.submit, 300);
  }

  submit() {
    console.log(this.state.demoRequest);
    axios.post("https://hooks.zapier.com/hooks/catch/2565501/as8r0w/", JSON.stringify(this.state.demoRequest))
    .then(function (response) {
      console.log(response);
      window.Materialize.toast("Demo Request Sent!", 1500);
      setTimeout(window.location.replace('/'), 1500)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    return (
      <div className="white about-section">
        <div className="container">
          <h1 className="flow-text">Request a Demo</h1>
          <p className="flow-text">Graphite is free and open source, but Graphite also provides paid, enterprise level tools. If you are a newsroom, a business, an NGO, or any institution interested in learning more about the advanced features available through Graphite, we should connect.</p>
          <p className="flow-text">Schedule a demo below.</p>
          <div className="demo-form row">
            <div className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="First Name" onChange={this.setFirstName} value={this.state.firstName} id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="Last Name" onChange={this.setLastName} value={this.state.lastName} id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="Phone Number" onChange={this.setPhone} value={this.state.phone} id="phone_number" type="text" className="validate" />
                <label htmlFor="phone_number">Phone Number</label>
                </div>

                <div className="col s6">
                  <div className="row">
                    <div className="input-field col s12">
                      <input placeholder="Email" onChange={this.setEmail} value={this.state.email} id="email" type="email" className="validate" />
                      <label htmlFor="email" data-error="Please enter a valid email" data-success="">Email</label>
                    </div>
                  </div>
                </div>

              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Organization Name" onChange={this.setOrgName} value={this.state.orgName} id="org_name" type="text" className="validate" />
                  <label htmlFor="org_name">Organization Name</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                <label>Organization Type</label>
                <select onChange={this.setOrgType} value={this.state.orgType}>
                  <option value="" disabled selected>Select organization type</option>
                  <option value="publications">Journalism/Publications</option>
                  <option value="ngo">NGO/Activism</option>
                  <option value="medical">Medical</option>
                  <option value="legal">Legal Services</option>
                  <option value="business">Business</option>
                  <option value="other">Other</option>
                </select>
                </div>
              </div>

              <div className="text-message row">
                <div className="input-field col s12">

                <label htmlFor="textarea1">Message</label>
                <textarea placeholder="Your message here" id="textarea1" value={this.state.message} onChange={this.setMessage} className="materialize-textarea"></textarea>
                </div>
              </div>
              <button className="btn" onClick={this.saveRequest}>Request Demo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
