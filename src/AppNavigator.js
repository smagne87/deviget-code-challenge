import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault';
import NotFound from './views/errors/not-found';
import ScrollToTop from './components/ScrollToTop';

const AppNavigator = () => (
  <Router>
    <ScrollToTop>
      <div className="App">
        <Switch>
          <Route path="/home" component={LayoutDefault} />
          <Route path="/post/:id" component={LayoutDefault} />
          <Redirect from="/" exact to="/home" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </ScrollToTop>
  </Router>
);
export default AppNavigator;
