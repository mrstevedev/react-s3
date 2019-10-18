import React, { Component, Fragment } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import UserForm from './components/UserForm';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container maxWidth="sm">
          <UserForm />
        </Container>
      </Fragment>
    );
  }
}

export default App;
