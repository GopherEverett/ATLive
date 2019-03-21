import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleVenue extends Component {
    state = {

        venue: {
            name: '',
            address: '',
            website: '',
            phone: '',
            imgLink: ''
        }
    }

    componentDidMount = () => {
        axios.get(`/api/ATLive/hoods/${this.props.match.params.hoodId}/venues/${this.props.match.params.venueId}`)
            .then(res => {
                console.log(res.data)
                this.setState({ venue: res.data })
            })
    }

    render() {
        return (
            <div>
                <h1>Venue</h1>
            </div>
        )
    }
}
