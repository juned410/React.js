import React from 'react';
import "./Redux.css"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductChild = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className="Card">
            <img className="image" src={item.image} alt="" />
            <h3>{item.title.substr(0,20)+"..."}</h3>
            <h4>Price: ${item.price}</h4>
            <button className="Add" onClick=
            {()=> dispatch({type: "Add-Cart" , data:item})}>Add To Cart</button>
            <Link to= "/details">
            <button className="Remove"  onClick=
            {()=> dispatch({type: "Selected-Product" , data:item})} >View Details
            </button> {" "}
            </Link>           
        </div>
    );
};

export default ProductChild;