import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Hoods extends Component {

    state = {
        hoods: [],
        // newHood: {
        //     name: '',
        //     venues: []
        // }
    }

    componentDidMount = () => {
        axios.get('/api/v1/')
        .then(res => {
            this.setState({ hoods: res.data })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <h1>Neighborhoods</h1>
                {/* {this.state.hoods.map(hood => {
                    return (
                        <div key={hood._id}>
                            <Link to={`/${hood._id}`}>{hood.name}</Link>
                        </div>
                    )
                })} */}
            </div>
        )
    }
}


