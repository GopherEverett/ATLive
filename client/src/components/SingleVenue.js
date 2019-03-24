import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'
import Form from './styledComponents/Form'
import styled from 'styled-components'

const VenueContent = styled.div`
text-align: center;
text-shadow: 2px 2px 2px gray;
padding: 10px;
p {
    color: orange;
    font-size: 3rem;
    font-family: 'Crushed', cursive;
}
@media (max-width: 50em) {
    p{
    font-size: 2rem;
    }
}
`

export default class SingleVenue extends Component {
    state = {
        venue: {
            name: '',
            address: '',
            website: '',
            phone: '',
            imgLink: ''
        },
        reDirHome: false,
        isEditFormDisp: false,
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
                this.setState({ reDirHome: true })
            })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return ({ isEditFormDisp: !state.isEditFormDisp })
        })
    }


    handleChange = (evt) => {
        const copyVenue = { ...this.state.venue }
        copyVenue[evt.target.name] = evt.target.value
        this.setState({ venue: copyVenue })
    }

    updateVenue = (evt) => {
        evt.preventDefault()
        axios
            .put(`/api/ATLive/hoods/${this.props.match.params.hoodId}/venues/${this.props.match.params.venueId}`, {
                name: this.state.venue.name,
                address: this.state.venue.address,
                website: this.state.venue.website,
                phone: this.state.venue.phone
            })
            .then(res => {
                this.setState({ venue: res.data, isEditFormDisp: false })
            })
    }

    render() {
        if (this.state.reDirHome) {
            return (<Redirect to={`/hoods/${this.props.match.params.hoodId}`} />)
        }
        return (
            <VenueContent>
                <p>{this.state.venue.name}</p>
                <p>{this.state.venue.address}</p>
                <a href={this.state.venue.website}><p>{this.state.venue.website}</p></a>
                <p>{this.state.venue.phone}</p>
                {this.state.isEditFormDisp
                    ?
                        <Form onSubmit={this.updateVenue}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.venue.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <input
                                    id='address'
                                    name='address'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.venue.address}
                                />
                            </div>
                            <div>
                                <label htmlFor="website">Website</label>
                                <input
                                    id='website'
                                    name='website'
                                    type='url'
                                    onChange={this.handleChange}
                                    value={this.state.venue.website}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    id='phone'
                                    name='phone'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.venue.phone}
                                />
                            </div>
                            <ButtonStyle>UPDATE</ButtonStyle>
                        </Form>
                    :
                    <div>
                        <ButtonStyle onClick={this.handleDelete}>DELETE</ButtonStyle>
                        <ButtonStyle onClick={this.toggleEditForm}>EDIT</ButtonStyle>
                    </div>
                }
            </VenueContent>

        )
    }
}
