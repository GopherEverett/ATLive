import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Hoods from './components/Hoods'
import logo from './images/apple-icon-76x76.png'
import BannerStyle from './components/styledComponents/BannerStyle'
import SingleVenue from './components/SingleVenue.js'
import SingleHood from './components/SingleHood.js'
import Login from './components/Login.js'
import img from './images/acoustic-acoustic-guitar-blur-808353.jpg'

const Box = styled.div`
background: rgba(24, 27, 25, 0.5);
max-width: 100vw;
margin: 70px 0;
// border-top: 1px solid #f2833a;
// border-bottom: 1px solid #f2833a;
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
width: 100vw;
display; flex;
align-content: center;
`
class App extends Component {

  state = {
    isUser: false
  }

  handleIsUser = () => {
    this.setState(({ isUser: true }))
  }

  render() {
    return (
      <Body>
        <BannerStyle>
          <p>ATLive</p>
          <p className='atlInfo'>Atlanta's live music scene</p>
          {this.state.isUser ? <Link to={'/hoods'}><img src={logo} alt="Logo" /></Link> :
          <img src={logo} alt="Logo" />
          }
        </BannerStyle>
        <Box>
          <Switch>
            <Route exact path='/' render={props => <Login handleIsUser={this.handleIsUser} />} />
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
