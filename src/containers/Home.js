import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Product from '../components/Product';
import DetailedProduct from '../components/DetailedProduct';
import EnterpriseProduct from '../components/Enterprise';
import DemoModal from '../components/DemoModal';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <DemoModal />
                <Hero />
                <SocialProof />
                <Product />
                <DetailedProduct />
                <EnterpriseProduct />
                <Testimonials />
                <Footer />
            </div>
        )
    }
}