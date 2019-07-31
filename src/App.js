import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Basket from './Components/Basket/Basket';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>      
          <Route exact path="/" component={Home} />
          <Route exact path="/basket" component={Basket} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
