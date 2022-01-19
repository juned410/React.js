import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector((state)=> state.productReducer.selectedProduct [0]);
    return (
        <div className="Card-Parent">
            <h1>Product Details</h1>
            <div className="Card">
            <img className="image" src={selectedItem.image} alt="" />
            <h3>{selectedItem.title.substr(0,20)+"..."}</h3>
            <h4>Price: ${selectedItem.price}</h4>
            <button onClick={()=> dispatch({type: "Add-Cart" , data:selectedItem})}>
            Add To Cart
            </button>
            </div>
        </div>
    );
};

export default ProductDetails;