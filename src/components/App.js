import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

import '../styles/App.scss';

import Navbar from './Navbar';
import Home from '../views/Home'
import Credits from '../views/Credits'
import About from '../views/About'
import Auth from '../views/Auth'
import Footer from '../views/Footer';
import User from './User';


const App = () => {

  const [user, setUser] = useState(null);
  const value = { user, setUser };

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Router>
          <Navbar />
          <main className="main">
            <User />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/credits' component={Credits} />
              <Route path='/auth' component={Auth} />
              <Route path='*' render={() => <h3 className="mx-auto">404: Not found</h3>} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
