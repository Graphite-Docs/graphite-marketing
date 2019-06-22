import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Product from './components/Product';
import DetailedProduct from './components/DetailedProduct';
import EnterpriseProduct from './components/Enterprise';
import DemoModal from './components/DemoModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import 'bulma/css/bulma.min.css';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
