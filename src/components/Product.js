import React from 'react';
import productIcon from '../assets/Section-Icon.svg';
import demo from '../assets/document.png';
import secure from '../assets/feature-icon-key.svg'
import edit from '../assets/feature-icon-doc.svg'
import rtc from '../assets/feature-icon-collaborate.svg'
import contact from '../assets/feature-icon-contact.svg'
import upload from '../assets/feature-icon-upload.svg'
import share from '../assets/feature-icon-share.svg'

function Product() {
  return (
    <div id="product-section">
        <div id="why-graphite" className="icon-div">
            <img src={productIcon} alt='icon' />
        </div>
        <div className="center product-info">
            <h1>Unbreakable security and privacy for all your documents and files</h1>
            <p>Graphite gives you the tools to get work done securely. Document creation and editing, team collaboration, file sharing, and more—all encrypted, all private.</p>
        </div>
        <div className="product-rect"></div>
        <div id="product-demo">
            <img className="doc-ex" src={demo} alt="computer with editor" />
            <div>
                <nav className="navbar product-nav" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <p className="navbar-item">
                            Document Editor
                        </p>
                        <p className="navbar-item">
                            File Storage
                        </p>
                        <p className="navbar-item">
                            Encryption
                        </p>
                    </div>
                </nav>
            </div>
        </div>
        <div className="product-features">
            <div className="columns is-desktop">
                <div className="column">
                    <img className="icon-img" src={secure} />
                    <h3 style={{fontSize: "25px", fontWeight: "900"}}>Own Your Encryption Keys</h3>
                    <p>You would never trust a company to keep a record of your password for use anytime they want. Why would you do that with your encryption keys? With Graphite, you don't have to. You own and manage your keys so only YOU can decrypt your content.</p>
                </div>
                <div className="column">
                    <img className="icon-img" src={edit} />
                    <h3 style={{fontSize: "25px", fontWeight: "900"}}>Create & Edit Documents</h3>
                    <p>Use Google Docs? Then you already know how to use Graphite Docs. Start creating, editing, and sharing, but do it all with complete control over your content and full encryption.</p>
                </div>
                <div className="column">
                    <img className="icon-img" src={rtc} />
                    <h3 style={{fontSize: "25px", fontWeight: "900"}}>Real-Time Collaboration</h3>
                    <p>Don't give up the convenience of collaboration in exchange for security and privacy. With Graphite, you can collaborate in real-time while your document and your collaborators' documents are encrypted protected.</p>
                </div>
            </div>
            <div className="columns is-desktop">
                <div className="column">
                    <img className="icon-img" src={contact} />
                    <h3 style={{fontSize: "25px", fontWeight: "900"}}>Manage Your Contacts</h3>
                    <p>Create a digital rolodex of contacts to share with. When you add a contact, their public key is made available automatically, which means when you share a file or document, it is encrypted and can only be decrypted by that person.</p>
                </div>
                <div className="column">
                    <img className="icon-img" src={upload} />
                    <h3 style={{fontSize: "25px", fontWeight: "900"}}>Unlimited File Uploads</h3>
                    <p>Store your files in Graphite Files and enjoy automatic encryption and remote access. There is no aggregate file storage limit, and you can set the per-file size-limit yourself.</p>
                </div>
                <div className="column">
                    <img className="icon-img" src={share} />
                    <h3 style={{fontSize: "25px", fontWeight: "900"}}>Public File Sharing</h3>
                    <p>Whether it's a document or a file, you can share it with anyone. They don't have to be part of your team or a contact you've added to your rolodex. Just generate a share link and send it.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Product;
