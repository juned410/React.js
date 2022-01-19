import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../A-Navigation/NavBar';
import Cart from '../B-Products/Cart';
import ProductDetails from '../B-Products/ProductDetails';
import ProductParent from '../B-Products/ProductParent';

const Landing = () => {
    const [search, setSearch] = useState("");
    return (
        <div>
            <BrowserRouter>
            <NavBar setSearch={setSearch} />
            <Routes>
                <Route path="/" element={<ProductParent search={search} />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/details" element={<ProductDetails/>} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;