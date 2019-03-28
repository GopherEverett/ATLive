import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY

Geocode.setApiKey(GOOGLE_MAP_API_KEY)
//styling for map container
const style = {
    width: '100vw',
    height: '450px',
    position: 'absolute',
    left: '0'
}

class MapContainer extends Component {
    
    state = {
        markerGo: false,
        currentLocation: {
            lat: 33.757053,
            lng: -84.410121
        }
    }
    //keeps market from rendering until click on map
    toggleMarkerGo = () => {
        this.setState(({ markerGo: true }))
    }
    //on map click get address lat and long to state
    onMapClick = () => {
        Geocode.fromAddress(this.props.venue)
        .then(response => { this.setState({
                    markerGo: false,
                    currentLocation: {
                        lat: response.results[0].geometry.location.lat,
                        lng: response.results[0].geometry.location.lng
                    }
                })
                this.toggleMarkerGo()
            },
            error => {
                console.error(error);
            })
    }
    
    componentDidMount = () => {
        //get location of user if browser allows
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    currentLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            })
        }
        else {
            //browser doesn't support geolocation, set as Atlanta
            this.setState({
                currentLocation: {
                    lat: 33.766358,
                    lng: -84.380000
                }
            }
            );
        }
    }

render() {
    return (
        <Map google={this.props.google}
        style={style}
        center={this.state.currentLocation}
        onClick={this.onMapClick}
        zoom={15}>
        {console.log(this.state.currentLocation)}
            {this.state.markerGo ?
                <Marker onClick={this.onMarkerClick}
                    postion={this.state.currentLocation}
                    name={'Current location'}>
                </Marker>
                : null
            }
        </Map>
    );
}
}
export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAP_API_KEY)
})(MapContainer)