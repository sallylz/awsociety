import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component{
  render() {
    return (
      // creates a wrapper, rather than a div
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>       
          <Router>
            <Switch>
              <Route exact path="/awsociety" component={Home} />
              <Route path="/awsociety/about" component={About} />
              <Route path="/awsociety/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
