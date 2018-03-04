import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import Features from './Features';
import Personal from './Personal';
import Journalism from './Journalism';
import Business from './Business';
import NGO from './NGO';
import FAQ from './FAQ';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/personal" component={Personal} />
          <Route exact path="/journalism" component={Journalism} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/non-governmental" component={NGO} />
          <Route exact path="/faq" component={FAQ} />
          <Footer />
        </div>
      </BrowserRouter>


      </div>
    );

  }
}

export default App;
