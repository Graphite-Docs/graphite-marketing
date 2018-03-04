import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';

class FAQ extends Component {

  render() {
    return (
      <div className="white about-section">
        <div className="container faq">
          <h3>Frequently Asked Questions</h3>
          <h5>What is Graphite?</h5>
          <p>Graphite is the first truly decentralized and encrypted alternative to Google's G-Suite and Microsoft Office.</p>
          <h5>Why does decentralization matter?</h5>
          <p>Centralization can be a good thing. It helps computers process things faster, for example. But that's changing. Centralization often means companies and governments gaining access to your data without you knowing or approving. Decentralization makes that impossible. Graphite couldn't see your data if we wanted to.</p>
          <h5>Why is Graphite built on Blockstack?</h5>
          <p>Blockstack has many advantages over other platforms for building decentralized applications. The primary advantage is that Blockstack is the first to enable sharing of data while maintaining decentralization. Until now, decentralized apps were restricted to a single user maintaining decentralized data with no option to share.</p>
          <h5>What if Blockstack goes away?</h5>
          <p>Blockstack is an open source project, so even if the company goes away, the underlying technology still exists and will continue to operate.</p>
          <h5>What if Graphite goes away?</h5>
          <p>Graphite is also <a href="https://github.com/Graphite-Docs/graphite" target="_blank">open source</a> and in the unlikely event that Graphite shuts its doors, the software can be run locally from the source code. This means you do not need a web server to access, create, share, and connect.</p>
          <h5>What do I need to do to get started?</h5>
          <p>Just click the sign in button. If you have not previously installed the Blockstack browser, you'll be prompted to do so. That's it. Run the Blockstack browser in the background and sign into Graphite.</p>
          <h5>Where is my data actually being stored?</h5>
          <p>This depends on your choices. By default, your data is stored in a dedicated Microsoft Azure Blob. But you can and should connect your Blockstack Browser to your own cloud storage solutions (preferably multiple).</p>
          <h5>Isn't that centralized?</h5>
          <p>Azure is a centralized service, but by encrypting your data, and because your private key is never exposed, Azure cannot access your data. With data replication, there is no single-point of failure and no entity has access to the content of your files.</p>
          <h5>How is my data secured?</h5>
          <p>Unless explicitly allowed by you, every file and every message is encrypted. It can only be decrypted by your private key. When you share a file, that file is encrypted and can only be decrypted by the specific receiving user's private key.</p>
          <h5>Can I delete my data?</h5>
          <p>Yes, you can manually delete any data. If you are a newsroom, business, or NGO partner, you also have security policy controls that can allow for automatic deletion per your specifications.</p>
          <h5>Are there storage limits?</h5>
          <p>There are no storage limits for documents, spreadsheets, or messages.</p>
          <h5>How much does it cost?</h5>
          <p>Graphite for personal use is completely free. Registering an ID can be free or can cost a little depending on the ID you select—just like registering a domain name on the traditional web. If you're a newsroom, business, NGO, or any other entity interested in using Graphite, please <a href="mailto:contact@graphitedocs.com">contact us</a> to discuss pricing and options. </p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default FAQ;
