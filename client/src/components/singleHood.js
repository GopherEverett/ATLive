import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class singleHood extends Component {

    state = {
        hood: {
            name: '',
            venues: []
        }
    }

    componentDidMount = () => {
        axios.get(`/api/ATLive/hoods/${this.props.match.params.hoodId}`)
            .then(res => {
                console.log(res.data)
                this.setState({ hood: res.data })
            })
    }

    render() {
        const venues = this.state.hood.venues.map(venue => {
            return (
                <div key={venue._id}>
                    <Link to={`/hoods/${this.props.match.params.hoodId}/venues/${venue._id}`}>{venue.name}</Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Venues in {this.state.hood.name}</h1>
                
            { venues }
            </div>
        )
    }
}

