import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'
import Form from './styledComponents/Form'
import styled from 'styled-components'


const HoodContent = styled.div`
text-align: center;
padding: 10px;
p {
color: #f97a02;
font-size: 3.5rem;
font-family: 'Crushed', cursive;
text-shadow: 2px 2px 2px gray;
}
.hoodLink {
    margin: 15px 15px;
    font-size: 2.5rem;
    text-shadow: 2px 2px 8px #FF0000;
}
`

export default class Hoods extends Component {

    state = {
        hoods: [],
        newHood: {
            name: '',
            venues: []
        },
        isAddFormDisp: false,
    }
    //retrieve neighborhood data
    componentDidMount = () => {
        axios.get('/api/ATLive/hoods')
            .then(res => {
                this.setState({ hoods: res.data })
            })
    }
    //toggles form to add a neighborhood
    toggleAddForm = () => {
        this.setState((state, props) => {
            return ({ isAddFormDisp: !state.isAddFormDisp })
        })
    }
    handleChange = (evt) => {
        const copyNewHood = { ...this.state.newHood }
        copyNewHood[evt.target.name] = evt.target.value
        this.setState({ newHood: copyNewHood })
    }
    //creates new neighborhood in database
    createHood = (evt) => {
        evt.preventDefault()
        axios.post('/api/ATLive/hoods', {
            name: this.state.newHood.name,
        }).then(res => {
            const hoodList = [...this.state.hoods]
            hoodList.unshift(res.data)
            this.setState({
                newHood: {
                    name: ''
                },
                isAddFormDisp: false,
                hoods: hoodList
            })
        })
    }

    render() {
        const hoods = this.state.hoods.map(hood => {
            return (
                <div key={hood._id}>
                    <p className='hoodLink'><Link to={`/hoods/${hood._id}`} style={{ textDecoration: 'none', color: 'white' }}>{hood.name}</Link></p>
                </div>
            )
        })

        return (
            <HoodContent>
                <p>Neighborhoods</p>
                {hoods}
                <ButtonStyle onClick={this.toggleAddForm}>Add New Neighborhood</ButtonStyle>
                {this.state.isAddFormDisp
                    ?
                    <Form onSubmit={this.createHood}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name' name='name' type='text'
                                onChange={this.handleChange}
                                value={this.state.newHood.name}
                            />
                        </div>
                        <ButtonStyle>Create</ButtonStyle>
                    </Form>
                    : null
                }
            </HoodContent>
        )
    }
}


