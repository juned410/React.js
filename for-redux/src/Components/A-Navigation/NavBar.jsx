import React from 'react';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
const NavBar = ({setSearch}) => {
    const cartItems = useSelector((state)=> state.productReducer.cart)
    return (
        
           <div className="Nav">
           <Link className="link" to="/"><button className="TL">Class redux</button></Link>
            
            <input className="input" onChange={(e)=> setSearch(e.target.value) }
             type="search" placeholder="    Search Here...." />
        
            <Link to="/cart">Cart: {cartItems.length} </Link>
           </div>
        
    );
};

export default NavBar;