import data from '../../json/json.json'
export const initialProduct =  () =>{
    return async function(dispatch, getState) {
        // const response = await fetch('https://fakestoreapi.com/products')
        // const json = await response.json();
        console.log('hhhhhhhhhhhhhhh1111',data);
        dispatch({
            type: 'ADDITEM',
            payload: data
        })
    }
    
}
export const addItem = (product) =>{
    return {
        type: "ADDITEM",
        payload: product
    }
}
export const deleteItem = (product) =>{
    return {
        type: "DELETEITEM",
        payload: product
    }
}
export const singleProduct = (product) =>{
    return {
        type: "ADDSINGLEPRODUCT",
        payload: product
    }
}