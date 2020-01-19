import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home'
import Credits from '../views/Credits'
import About from '../views/About'
import '../styles/App.scss';
import Navbar from './Navbar';
import Footer from '../views/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/credits' component={Credits} />
            <Route path='*' render={() => <h3>404: Not found</h3>} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
