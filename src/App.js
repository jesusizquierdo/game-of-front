import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Houses from './pages/Houses/Houses';
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import itemDetails from './itemDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/houses" component={Houses} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/characters/:id" component={itemDetails} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
