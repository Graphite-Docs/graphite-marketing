import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';
import addContact from './AddNewContact.gif';
import docsPage from './Docs.png';
import sheet from './SingleSheet.png';
import document from './SingleDoc.png';
import sharing from './Shared.png';
import Conversation from './ConversationsExample.png';

class Features extends Component {

  render() {
    return (
      <div className="white features">
        <div className="container intro">
          <h1 className="">Create, store, share, discuss.</h1>
        </div>
        <div className="row container">
          <div className="col s12 m6">
            <img className="responsive-img" src={addContact} alt="add a new contact" />
          </div>
          <div className="col s12 m6">
            <h2>Create a curated list of contacts.</h2>
            <h5>Your list of contacts is encrypted by default.</h5>
          </div>
        </div>
        <div className="container">
          <h2>Create as many documents as you want and access them across devices.</h2>
          <h5>Owning your data doesn't mean being locked in a silo. Access your files anywhere, anytime.</h5>
          <img src={docsPage} className="doc-img hoverable responsive-img" alt="document collection" />
          <div className="row docs-features">
            <div className="col s12 m6">
              <h5>The features you've come to expect from Google and Microsoft. 100% secure and decentralized.</h5>
              <div className="">
              <h5>Auto-Save</h5>
              <h5>Formatting</h5>
              <h5>Exporting</h5>
              <h5>Word Counter</h5>
              <h5>A whole lot more</h5>
              </div>
            </div>
            <div className="col s12 m6">
              <img src={document} className="responsive-img" alt="signle document" />
            </div>
          </div>
          <div className="">
            <h2>Get work done.</h2>
            <h5>Graphite Sheets allows you to build your budgets, plan, calculate, and more. All without worrying about your privacy.</h5>
            <img src={sheet} className="sheet responsive-img" alt="spreadsheet" />
            <div className="row share">
              <h2 className="center-align">Share and collaborate</h2>
              <div className="col s12 m6">
                <img src={sharing} className="responsive-img" alt="Example of sharing docs" />
              </div>
              <div className="col s12 m6">
                <h3>Share sheets and docs in an instant.</h3>
                <h5>Never worry about your files being read by anyone but your intended recipient. All files are encypted for you and for the contact you share with.</h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="center-align container">
            <h1>Introducing Conversations</h1>
            <h5>A new way to communicate, connect, and share.</h5>
            <h5>End-to-end encryption that Graphite never touches. Your messages, your data, your connection.</h5>
          </div>
          <img src={Conversation} className="responsive-img"/>
        </div>
        <div className="container">
          <h2>Learn more.</h2>
          <h5>Pick a use case.</h5>
          <div className="row">
            <div className="col s12 m3">
              <a href="/personal">
              <div className="card hoverable small">
                <h3 className="center-align">Personal</h3>
              </div>
              </a>
            </div>
            <div className="col s12 m3">
              <a href="/journalism">
              <div className="card hoverable small">
                <h3 className="center-align">Journalism</h3>
              </div>
              </a>
            </div>
            <div className="col s12 m3">
              <a href="/non-governmental">
              <div className="card hoverable small">
                <h3 className="center-align">NGO</h3>
              </div>
              </a>
            </div>
            <div className="col s12 m3">
              <a href="/business">
              <div className="card hoverable small">
                <h3 className="center-align">Business</h3>
              </div>
              </a>
            </div>
          </div>
          <div className="center-align">
            <a href="https://app.graphitedocs.com" target="_blank"><button className="btn black">Get started now</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
