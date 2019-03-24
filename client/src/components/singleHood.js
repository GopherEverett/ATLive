import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonStyle from './styledComponents/ButtonStyle'
import Form from './styledComponents/Form'

const HoodContent = styled.div`
text-align: center;
text-shadow: 2px 2px 2px gray;
padding: 10px;
p {
    color: orange;
    font-size: 3rem;
    font-family: 'Maven Pro', cursive;
}
.hoodLink {
    font-size: 2rem;
    text-shadow: 2px 2px 8px #FF0000;
}
`

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
        axios.post(`/api/ATLive/hoods/${this.props.match.params.hoodId}/venues/`, payload)
            .then(() => {
                this.setState({
                    isAddFormDisp: false
                    })
                })
                .then(res => {
                    this.componentDidMount()
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
                    <p className='hoodLink'><Link
                        to={`/hoods/${this.props.match.params.hoodId}/venues/${venue._id}`}
                        style={{ textDecoration: 'none', color: 'white' }}>
                        {venue.name}
                    </Link></p>
                </div>
            )
        })
        return (
            <HoodContent>
                <p>Venues in {this.state.hood.name}</p>
                {venues}
                <ButtonStyle onClick={this.toggleAddForm}>Add New Venue</ButtonStyle>
                {this.state.isAddFormDisp
                    ?
                    <Form onSubmit={this.createVenue}>
                        <label htmlFor="name">Name</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.newVenue.name}
                        />
                        <label htmlFor="address">Address</label>
                        <input
                            id='address'
                            name='address'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.newVenue.address}
                        />
                        <label htmlFor="website">Website</label>
                        <input
                            id='website'
                            name='website'
                            type='url'
                            onChange={this.handleChange}
                            value={this.state.newVenue.website}
                        />
                        <label htmlFor="phone">Phone</label>
                        <input
                            id='phone'
                            name='phone'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.newVenue.phone}
                        />
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
                    </Form>
                    : null
                }
            </HoodContent>
        )
    }
}

