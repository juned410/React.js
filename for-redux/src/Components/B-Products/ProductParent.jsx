import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductChild from './ProductChild';
import "./Redux.css"

const ProductParent = ({ search }) => {
    const [products, setProducts] = useState([]);
    const stateProduct = useSelector((state)=> state.productReducer.product);
    const dispatch = useDispatch();
    const getApiData = async ()=>{
        const allProducts = await axios.get("https://fakestoreapi.com/products");
        setProducts(allProducts.data);
        stateProduct.length <= 0 &&
        dispatch({type:"Add-Product", data: allProducts.data})
        console.log("---->",allProducts.data);
    };
    useEffect(()=>{
        getApiData();
    }, []);
    useEffect(()=>{
        const filteredProducts = stateProduct.filter((item)=>
         item.title.toUpperCase().includes(search.toUpperCase())
        );
        setProducts(filteredProducts)
    },[search])
    return (
        <div className="Parent">
            <h1>Product Parent</h1>
            <div className="Cards-Parent">
                {products.map((item)=>{
                    return <ProductChild item={item}/>
                })}
            </div>
        </div>
    );
};

export default ProductParent;