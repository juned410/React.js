import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.productReducer.cart);
  console.log("cart---->", cartItems);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Product Cart</h1>
      <div className="Cards-Parent">
        {cartItems.map((item) => {
          return (
            <div className="Card">
              <img className="image" src={item.image} alt="" />
              <h3>{item.title.substr(0, 20) + "..."}</h3>
              <h4>Price: ${item.price}</h4>
              <button
                onClick={() => dispatch({ type: "Remove-Product", data: item })}
              >
                Remove Item
              </button>
              <Link to= "/details">
              <button onClick={()=> dispatch({type: "Selected-Product" , data:item})}>View Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
