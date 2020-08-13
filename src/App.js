import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/GithubState';
import About from './Components/pages/About';
import Navbar from './Components/layout/Navbar';
import User from './Components/users/User';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import AlertState from './context/alert/AlertState';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
