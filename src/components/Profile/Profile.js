import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

const Profile = (props) => {

    const {Name, Id, Intake, Position, income,img} = props.profile;
    
    return (
        <div className='profile'>
            <img src={img} alt=""/>
            <h2>Name: {Name}</h2>
            <h2>Id: {Id}</h2>
            <h2>Intake: {Intake}</h2>
            <h2>Position: {Position}</h2>
            <h2>income: {income}</h2>
            <p><button className="main-button" onClick={() =>  props.handleAddProfile(props.profile)}><FontAwesomeIcon icon={faShoppingCart} />Add Candidate</button></p>
        </div>
    );
};

export default Profile;