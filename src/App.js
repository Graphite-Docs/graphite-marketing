import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
// import About from './containers/About';
// import Labs from './containers/Labs';
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
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/about' component={About} />
            <Route exact path='/labs' component={Labs} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
