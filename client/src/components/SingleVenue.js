import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'

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
                <div>
                    <h2>{this.state.venue.name}</h2>
                </div>
                <div>
                    <h2>{this.state.venue.address}</h2>
                </div>
                <div>
                    <h2>{this.state.venue.website}</h2>
                </div>
                <div>
                    <h2>{this.state.venue.phone}</h2>
                </div>
                <ButtonStyle>DELETE</ButtonStyle>
                <ButtonStyle>EDIT</ButtonStyle>
            </div>
        )
    }
}
