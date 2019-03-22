import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'

export default class SingleVenue extends Component {
    state = {

        venue: {
            name: '',
            address: '',
            website: '',
            phone: '',
            imgLink: ''
        },
        reDirHome: false
    }

    componentDidMount = () => {
        axios.get(`/api/ATLive/hoods/${this.props.match.params.hoodId}/venues/${this.props.match.params.venueId}`)
            .then(res => {
                this.setState({ venue: res.data })
            })
    }

    handleDelete = () => {
        axios.delete(`/api/ATLive/hoods/${this.props.match.params.hoodId}/venues/${this.props.match.params.venueId}`)
        .then(res => {
            this.setState({reDirHome: true})
        })
    }

    render() {
        if(this.state.reDirHome) {
            return (<Redirect to={`/hoods/${this.props.match.params.hoodId}`} />)
        }
        return (
            <div>
                <div><h2>{this.state.venue.name}</h2></div>
                <div><h2>{this.state.venue.address}</h2></div>
                <div><h2>{this.state.venue.website}</h2></div>
                <div><h2>{this.state.venue.phone}</h2></div>
                <ButtonStyle onClick={this.handleDelete}>DELETE</ButtonStyle>
                <ButtonStyle>EDIT</ButtonStyle>
            </div>
        )
    }
}
