import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'

export default class SingleHood extends Component {

    state = {
        hood: {
            name: '',
            venues: []
        },
        newVenue: {
            name: '',
            address: '',
            website: '',
            phone: '',
            imgLink: ''
        },
        isAddFormDisp: false,

    }

    componentDidMount = () => {
        this.getAllVenues()
    }

    getAllVenues = () => {
        axios.get(`/api/ATLive/hoods/${this.props.match.params.hoodId}`)
            .then(res => {
                this.setState({ hood: res.data })
            })
    }

    handleChange = (evt) => {
        const copyNewVenue = { ...this.state.newVenue }
        copyNewVenue[evt.target.name] = evt.target.value
        this.setState({ newVenue: copyNewVenue })
    }

    createVenue = (evt) => {
        evt.preventDefault()
        const payload = {
            name: this.state.newVenue.name,
            address: this.state.newVenue.address,
            website: this.state.newVenue.website,
            phone: this.state.newVenue.phone,
        }
        axios.post(`/api/ATLive/hoods/${this.props.match.params.hoodId}/venues/`, payload).then(res => {
            const venueList = [...this.state.hood.venues]
            venueList.push(payload)
            this.setState({
                isAddFormDisp: false,
                hood: { venues: venueList },
                newVenue: { name: '', address: '', website: '', phone: '' }
            })
        })
    }

    toggleAddForm = () => {
        this.setState((state, props) => {
            return ({ isAddFormDisp: !state.isAddFormDisp })
        })
    }

    render() {

        const venues = this.state.hood.venues.map(venue => {
            return (
                <div key={venue._id}>
                    <h2><Link 
                    to={`/hoods/${this.props.match.params.hoodId}/venues/${venue._id}`}
                    style={{ textDecoration: 'none' }}>
                    {venue.name}
                    </Link></h2>
                </div>
            )
        })
        return (
            <div>
                <h1>Venues in {this.state.hood.name}</h1>
                <ButtonStyle onClick={this.toggleAddForm}>Add New Venue</ButtonStyle>
                {venues}
                {this.state.isAddFormDisp
                    ? <form onSubmit={this.createVenue}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newVenue.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                id='address'
                                name='address'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newVenue.address}
                            />
                        </div>
                        <div>
                            <label htmlFor="website">Website</label>
                            <input
                                id='website'
                                name='website'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newVenue.website}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input
                                id='phone'
                                name='phone'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newVenue.phone}
                            />
                        </div>
                        {/* <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newVenue.name}
                            />
                        </div> */}
                        <ButtonStyle>Create</ButtonStyle>
                    </form>
                    : null
                }
            </div>
        )
    }
}

