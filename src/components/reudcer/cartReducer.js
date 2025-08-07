


const initialState ={
    cartCount :1,
    cartList :[]
}

function useReducerCart(state,action){

 switch(action.type){
    case "add":
        return {...state,cartList:action?.payload}
    case "delete":
        const filteredData = state.cartList.filter((cart)=>cart.id !== action?.payload)
        return {cartList:filteredData}
    default:
        return state;
 }
}

export {
    initialState,
    useReducerCart
}