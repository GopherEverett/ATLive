import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY
// console.log(GOOGLE_MAP_API_KEY)

const style = {
    width: '100vw',
    height: '400px',
    position: 'absolute',
    left: '0'
}

class MapContainer extends Component {

    state = {
        markerGo: false,
        currentLocation: {
            // lat: 0,
            // lng: 0
        }
    }

    componentDidMount = () => {
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
            this.setState({
                markerGo: true
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
        console.log(this.state.currentLocation)
        return (

            <Map google={this.props.google}
                style={style}
                center={this.state.currentLocation}
                zoom={15}>
                {this.state.markerGo ?
                    <Marker onClick={this.onMarkerClick}
                        postion={this.state.currentLocation}
                        name={'Current location'}>
                        {console.log(this.state.currentLocation)}
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