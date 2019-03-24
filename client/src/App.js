import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Hoods from './components/Hoods'
import Banner from './components/styledComponents/Banner'
import SingleVenue from './components/SingleVenue.js'
import SingleHood from './components/SingleHood.js'
import logo from './images/apple-icon-76x76.png'
import img from './images/acoustic-acoustic-guitar-blur-808353.jpg'

const Box = styled.div`
background: rgba(24, 27, 25, 0.5);
max-width: 100vw;
margin: 70px 0;
border-top: 1px solid #f2833a;
border-bottom: 1px solid #f2833a;
color: white;
display: flex;
justify-content: center;
align-content: center;

`
const Body = styled.div`
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
height: 150vh;
display; flex;
align-content: center;
`
class App extends Component {
  render() {
    return (
      <Body>
        <Banner>
          <p>ATLive</p>
          <p className='atlInfo'>Atlanta's live music scene</p>
          <Link to={'/hoods'}><img src={logo} alt="Logo" /></Link>
        </Banner>
        <Box>
          <Switch>
            <Route exact path='/hoods' component={Hoods} />
            <Route exact path='/hoods/:hoodId' component={SingleHood} />
            <Route exact path='/hoods/:hoodId/venues/:venueId' component={SingleVenue} />
          </Switch>
        </Box>
      </Body>
    );
  }
}

export default App;
