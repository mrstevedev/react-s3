import React, { Component, Fragment } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Index from './components/Index';
import Header from './components/Header';
import Success from './components/Success';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Router>
      <Header />
        <Container maxWidth="sm">
        <Route exact path="/" component={Index} />
        <Route exact path="/submit" component={Success} />
        </Container>
      </Router>
      </Fragment>
    );
  }
}

export default App;
