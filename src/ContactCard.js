import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactCard.css';

export default class ContactCard extends Component {
    render() {
        const {
            firstname,
            lastname,
            age,
            email
        } = this.props;

        const alttext = `image of ${firstname} ${lastname}"`;

        return (
            <div className="contact-card">
                <h3>{lastname}, {firstname}</h3>
                {this.props.img && 
                    <img src={this.props.img} className="profile-pic" alt={alttext}/>}
                <p>Email: {email}</p>
                <p>Age: {age}</p>
                <br/>
                <br/>
                <span className="socials">
                    {this.props.twitter &&
                        <a href={this.props.twitter}>
                            <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png" alt="twitter"/>
                        </a>}
                    {this.props.instagram &&
                        <a href={this.props.instagram}>
                            <img className="social" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="instagram"/>
                            </a>}
                    {this.props.facebook &&
                        <a href={this.props.facebook}>
                            <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt="facebook"/>
                            </a>}
                    {this.props.linkedin &&
                        <a href={this.props.linkedin}>
                            <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt="linkedin"/>
                            </a>}
                </span>
            </div>
        );
    }


}

ContactCard.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    img: PropTypes.string,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string
};