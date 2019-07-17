import React from 'react';

export default class FAQ extends React.Component {
    render() {
        return (
            <div className="margin-top-40" id="faq-section">
                <div className="center product-info">
                    <h1>Frequently Asked Questions</h1>
                    <div className="margin-top-20 faq-section">
                        <h3>Where is my data stored?</h3>
                        <p>When you sign up for an account, you will be given the option to use the partner-hosted storage provided for free by <a href="https://blockstack.org" targer="_blank" rel="noopener noreferer">Blockstack</a>, or you will be able to enter a 
                            custom storage hub URL. If you enter a valid custom storage hub URL, all of your data will be stored in your own storage hub.
                        </p>

                        <h3>How much does it cost?</h3>
                        <p>Graphite is entirely free for individuals. This may change in the future, but as of right now, there are no plans to charge free users for Graphite's core feature set. 
                            Graphite Pro users will pay a monthly fee depending on the plan they choose, and they will have access to additional features.
                        </p>

                        <h3>How can I run my own storage hub?</h3>
                        <p>In the future, this process will be much simpler. However, today, it is still possible. You'll need to follow the documentation laid out <a href="https://github.com/blockstack/gaia" target="_blank" rel="noopener noreferer">here in this Github repository</a>.</p>
                        
                        <h3>Can Graphite access my data?</h3>
                        <p>No, your data is encrypted before it ever leaves your computer. It is encrypted with encryption keys owned and controlled by you. Because Graphite can't access those encryption keys, Graphite can't ever access your data.</p>

                        <h3>How does encryption work in Graphite?</h3>
                        <p>Graphite uses ECDSA elliptic curve encryption. For a better understanding of key generation, encrypted storage, and encrypted sharing, please see Graphite's <a href="https://github.com/graphite-docs/graphite#technical-architecture" target="_blank" rel="noopener noreferrer">technical architecture</a>.</p>

                        <h3>Why do I have to create a Blockstack account?</h3>
                        <p>Graphite does not maintain usernames and passwords in a database like most other apps. Instead, each person creates a "username" in the form of a blockchain transaction. This transaction gives the person control over their username rather than Graphite (or any other app) controlling it. Blockstack makes 
                            this process simple, and Graphite makes use of their open source tehcnology.</p>

                        <h3>What is Blockstack</h3>
                        <p>Blockstack is a company that has built developer tools that make it easier to give people control over their data and privacy. Much like some applications use Amazon developer tools to build their applications, Graphite uses Blockstack's developer tools. Learn more about Blockstack <a href="blockstack.org" target="_blank" rel="noopener noreferrer">here</a>.</p>

                        <h3>Is Graphite Open Source</h3>
                        <p>Yes! Anyone can contribute to Graphite or create their own version. Additionally, Graphite can be run locally on a person's computer for maximum security. The Github repository is available <a href="https://github.com/graphite-docs/graphite" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}