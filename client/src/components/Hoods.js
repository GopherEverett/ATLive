import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'


export default class Hoods extends Component {

    state = {
        hoods: [],
        newHood: {
            name: '',
            venues: []
        },
        isAddFormDisp: false,
    }

    componentDidMount = () => {
        axios.get('/api/ATLive/hoods')
            .then(res => {
                this.setState({ hoods: res.data })
            })
    }
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
                    <h2><Link to={`/hoods/${hood._id}`}>{hood.name}</Link></h2>
                </div>
            )
        })

        return (
            <div>
                <h1>Neighborhoods</h1>
                <ButtonStyle onClick={this.toggleAddForm}>Add New Neighborhood</ButtonStyle>
                {hoods}
                {this.state.isAddFormDisp
                    ? <form onSubmit={this.createHood}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newHood.name}
                            />
                        </div>
                        <ButtonStyle>Create</ButtonStyle>
                    </form>
                    : null
                }
            </div>
        )
    }
}


