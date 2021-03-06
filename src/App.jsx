import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home';
import ErrorPage from './pages/error';
import Mix from './components/Mix';
import Parking from './pages/parking'

const FullWidth = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
    }
`

export default class App extends Component {
  render() {
    return (
      <div>
        <FullWidth>
          <Router>
            <Switch>
              <Route exact path="/" component={Parking} />
              <Route path="/:id" component={Mix} />
              <Route
                path="/admin"
                component={() =>
                  (window.location =
                    'https://www.youtube.com/watch?time_continue=116&v=dJRsWJqDjFE')
                }
              />
              <Route
                path="/wp-admin"
                component={() =>
                  (window.location = 'https://youtu.be/djV11Xbc914?t=1m27s')
                }
              />
              <Route component={ErrorPage} />
            </Switch>
          </Router>
        </FullWidth>
      </div>
    )
  }
}
