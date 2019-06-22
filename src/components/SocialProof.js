import React from 'react';
import wired from '../assets/wired-logo.svg';
import guardian from '../assets/the-guardian-logo.svg';
import wapo from '../assets/washingtonpost-logo.svg';
import lifehacker from '../assets/lifehacker-logo.svg';
import cheddar from '../assets/cheddar-logo@3x.png';

function SocialProof() {
  return (
    <div id="social-proof">
        <div className="container banner">
            <ul>
                <li>
                    <a href="https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches/">
                        <img className="social-proof-img" src={wired} alt="Wired Magazine" />
                    </a>
                </li>
                <li>
                    <a href="https://www.theguardian.com/technology/2018/sep/08/decentralisation-next-big-step-for-the-world-wide-web-dweb-data-internet-censorship-brewster-kahle?CMP=share_btn_tw">
                        <img className="social-proof-img" src={guardian} alt="Wired Magazine" />
                    </a>
                </li>
                <li>
                    <a href="https://www.wired.com/story/the-decentralized-internet-is-here-with-some-glitches/">
                        <img className="social-proof-img" src={wapo} alt="Wired Magazine" />
                    </a>
                </li>
                <li>
                    <a href="https://lifehacker.com/check-out-this-google-docs-competitor-1823520656"> 
                        <img className="social-proof-img" src={lifehacker} alt="Wired Magazine" />
                    </a>
                </li>
                <li>
                    <a href="https://cheddar.com/media/graphite-the-blockchain-backed-competitor-to-google-docs">
                        <img className="social-proof-img" src={cheddar} alt="Wired Magazine" />
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
  );
}

export default SocialProof;
