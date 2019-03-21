import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Hoods from './components/Hoods'
import SingleHood from './components/singleHood'

class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <div>
            <h1>ATLive</h1>
            <Switch>
              <Route exact path='/hoods' component={Hoods}/>
              {/* <Route path='/hoods/:hoodId' component={SingleHood}/> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;