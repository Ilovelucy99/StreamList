import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StreamList from './StreamList';
import Movies from './Movies';
import Cart from './Cart';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">StreamList</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
