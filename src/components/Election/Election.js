import React, { useEffect, useState } from 'react';
import './Election.css'
import Profile from './../Profile/Profile';
import Cart from '../Cart/Cart';

const Election = () => {
const [profile, setProfile] = useState([]);
const [cart, setcart] = useState([])

useEffect(() => {
    fetch('./profile.JSON')
    .then(res => res.json())
    .then(data => setProfile(data))
}, [])

const handleAddProfile = (profile) =>{   
    const newCart = [...cart,profile];
        setcart(newCart)
}
    return (
        <div className="election-container">
            <div className="profile">
                
                <div className="profile-container">
                {
                    profile.map(profile =>
                    <Profile profile={profile}
                    handleAddProfile={handleAddProfile}
                    ></Profile>)
                    
                }
                </div>
                
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Election;