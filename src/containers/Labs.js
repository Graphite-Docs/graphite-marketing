import React from 'react';
import Nav from '../components/Nav';
import LabsHero from '../components/LabsHero';
import Footer from '../components/Footer';

export default class Labs extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <LabsHero />
                <Footer />
            </div>
        )
    }
}