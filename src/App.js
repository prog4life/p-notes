import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CheckAuthRoute from './CheckAuthRoute';
import NotesPage from 'pages/NotesPage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <>
          {/* Reset for body css */}
          <CssBaseline />
          <Router>
            <>
              <CheckAuthRoute />
              <Switch>
                <Route path="/" exact component={NotesPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </>
          </Router>
        </>
      </Provider>
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
