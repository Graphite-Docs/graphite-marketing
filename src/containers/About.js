import React from 'react';
import Nav from '../components/Nav';
import AboutHero from '../components/AboutHero';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';

export default class About extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <DemoModal />
                <AboutHero />
                <FAQ />
                <Team />
                <Footer />
            </div>
        )
    }
}