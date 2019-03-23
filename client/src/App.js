import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Hoods from './components/Hoods'
import Banner from './components/styledComponents/Banner'
import SingleHood from './components/SingleHood'
import SingleVenue from './components/SingleVenue'
import logo from './images/apple-icon-76x76.png'
import img from './images/audio-band-black-and-white-9137.jpg'

const Box = styled.div`
background: rgba(24, 27, 25, 0.5);
max-width: 600px;
margin: 20px auto;
border: 1px solid rgba(24, 27, 25, 0.9);
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
height: 100vh;
display; flex;
align-content: center;
`
class App extends Component {
  render() {
    return (
      <Body>
        <Banner>
          <p>ATLive</p>
          <p>Atlanta's live music scene</p>
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
