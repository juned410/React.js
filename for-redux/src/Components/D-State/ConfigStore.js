import { createStore,combineReducers } from "redux";
import {productReducer} from  "../C-Reducer/productReducer";


export const configStore = () =>{
    const myStore = createStore(
        combineReducers({productReducer}),
        window.__REUDX_DEVTOOLS_EXTENSION__ && window.__REUDX_DEVTOOLS_EXTENSION__()
    );
    return myStore;
}