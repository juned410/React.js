import { createStore, combineReducers } from "redux";
import { porductsReducer } from "../reducer/productsReducer";

export const configStore = () =>{
    const myStore=createStore(
        combineReducers({ porductsReducer }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return myStore;

}