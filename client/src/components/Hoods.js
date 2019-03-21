import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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


    render() {
        const hoods = this.state.hoods.map(hood => {
            return (
                <div key={hood._id}>
                    <Link to={`/hoods/${hood._id}`}>{hood.name}</Link>
                </div>
            )
        })

        return (
            <div>
                <h1>Neighborhoods</h1>
                {hoods}
                <button onClick={this.toggleAddForm}>Add New Neighborhood</button>
                {this.state.isAddFormDisp
                    ? <form onSubmit={this.createHood}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.newHood.name}
                            />
                        </div>
                        <button>Create</button>
                    </form>
                    : null
                }
            </div>
        )
    }
}


