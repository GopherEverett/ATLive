import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY
// console.log("Google Key: ", GOOGLE_MAP_API_KEY)

const style = {
    width: '100vw',
    height: '300px',
    position: 'absolute',
    left: '0'
}

class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} 
            style={style} 
            initialCenter={{
                lat: 33.766358,
                lng: -84.383998
            }}
            zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
                </InfoWindow>
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAP_API_KEY)
})(MapContainer)