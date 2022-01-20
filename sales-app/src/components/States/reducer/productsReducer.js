export const porductsReducer = (state = {product: [] },action)=>{
    if(action.type=== "ADD_PRODUCTS"){
        return {...state, product:[...action.data] };
    } 
    return state;
};