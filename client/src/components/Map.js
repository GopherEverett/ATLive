import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY

const style = {
    width: '100vw',
    height: '350px',
    position: 'absolute',
    left: '0'
}

class MapContainer extends Component {

    state = {
        currentLocation: {
            lat: 0,
            lng: 0
        }
    }

    onMarkerClick = () => {
        console.log(this.state.currentLocation)
    }

    componentWillMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords)
                this.setState({
                    currentLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            })

        } else {
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
        console.log(this.state.currentLocation)
        return (
            <Map google={this.props.google}
            style={style}
            center={this.state.currentLocation}
            zoom={15}>
                <Marker onClick={this.onMarkerClick}
                    postion={this.props.mapCenter}
                    name={'Current location'} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAP_API_KEY)
})(MapContainer)