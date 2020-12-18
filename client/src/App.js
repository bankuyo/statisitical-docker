import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './LandingPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to ="/">Home</Link>
          <Link to ="/landingpage">LandingPage</Link>
        </header>
        <div>
            <Route exact path="/" component = {Fib} />
            <Route path="/landingpage" component={LandingPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
