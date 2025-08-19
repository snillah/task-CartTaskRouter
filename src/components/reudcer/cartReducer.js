


const initialState ={
    cartCount :0,
    cartList :[]
}

function useReducerCart(state,action){

 switch(action.type){
    case "ADD":
        return {
            ...state,
            cartList:[...state.cartList,action.payload],
            cartCount:state.cartCount +1
        }
    case "delete":
        return{
            ...state,
            cartList:state.cartList.filter((cartItem)=>cartItem.id !== action.id),
            cartCount:state.cartCount-1,
        }
    default:
        return state;
 }
}

export {
    initialState,
    useReducerCart
}