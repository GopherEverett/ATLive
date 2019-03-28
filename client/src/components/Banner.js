import React, { Component } from 'react'
import BannerStyle from './styledComponents/BannerStyle'
import { Link } from 'react-router-dom'
import logo from '../images/apple-icon-76x76.png'

export default class Banner extends Component {
    render() {
        return (
            <BannerStyle>
                <p>ATLive</p>
                <p className='atlInfo'>Atlanta's live music scene</p>
                <Link to={'../'}><img src={logo} alt="Logo" /></Link>
            </BannerStyle>
        )
    }
}
