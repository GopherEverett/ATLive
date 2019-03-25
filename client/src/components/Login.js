import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import ButtonStyle from './styledComponents/ButtonStyle'
import Form from './styledComponents/Form'
import styled from 'styled-components'

const LoginBox = styled.div`
text-align: center;
margin 100px 0;
`

export default class Login extends Component {

    state = {
        email: "",
        password: "",
        reDirectHoods: false,
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
            <LoginBox>
                <Form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email' name='email' type='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        id='password' name='password' type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <ButtonStyle>Login</ButtonStyle>
                </Form>
            </LoginBox>
        );
    }
}