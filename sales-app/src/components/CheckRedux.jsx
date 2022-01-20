import React from 'react';
import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 

export const CheckRedux = () => {
    const selectData = useSelector((state)=> state.porductsReducer.product);
    console.log("===>", selectData)
    const dispatch=useDispatch();
    const AddMe=()=>{
        dispatch({
            type:"ADD_PRODUCTS",
            data: ["Cat", "Bat", "Fat"],
        })
    }
    const RemoveMe=()=>{
        dispatch({
            type:"REMOVE_PRODUCT",
            data: ["Cat", "Bat", "Fat"],
        })
    }
    return (
        <div>
            <Button variant='warning' onClick={AddMe} >Add Me</Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button variant='danger' onClick={RemoveMe} >Remove Me</Button>
            {selectData.map((item) => (
                <p>{ item }</p>
            ))}
        </div>
        );
};