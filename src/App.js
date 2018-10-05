import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NotesPage from 'pages/NotesPage';
import LoginPage from 'pages/LoginPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        {/* <NotesPage /> */}
        <LoginPage />
      </Fragment>
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
