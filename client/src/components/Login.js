import React, { Component } from "react";
import ButtonStyle from './styledComponents/ButtonStyle'
import { Redirect } from 'react-router-dom'
import Form from './styledComponents/Form'

export default class Login extends Component {

    state = {
        email: "",
        password: "",
        reDirectHoods: false
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ reDirectHoods: true })
    }

    render() {
        if (this.state.reDirectHoods) {
            return (<Redirect to="/hoods" />)
        }
        return (
            <div className="Login">
                    <Form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id='email' name='email' type='email'
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id='password' name='password' type='password'
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>
                        <ButtonStyle>Login</ButtonStyle>
                    </Form>
            </div>
        );
    }
}