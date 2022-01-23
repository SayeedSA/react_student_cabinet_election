import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;

    let totalIncome =0;
    for(const profile of cart){
        totalIncome = totalIncome + profile.income;
    }
    let name,image;
    for(const profile of cart){
        name = name+ profile.Name;
        image = profile.img;
    }

    return (
        <div className="cart">
            <h1>Total Candidate:{cart.length}</h1>
            <br/>
            <h1>Total Candidate Income:{totalIncome} </h1>
            <br/>
            <h1>Selected Candidate List:{name}</h1>
            <br/>

            
        </div>
    );
};

export default Cart;