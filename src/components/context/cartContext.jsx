import { createContext, useContext, useReducer } from "react";
import { initialState, useReducerCart } from "../reudcer/cartReducer";



const CartListContext = createContext();
const CartChangesContext = createContext();

export const CartDataProvider = ({children}) =>{
    
    const [cart,dispatch] = useReducer(useReducerCart,initialState)
    return(
        <CartListContext.Provider value={cart}>
            <CartChangesContext.Provider value={dispatch}>
                {children}
            </CartChangesContext.Provider>
        </CartListContext.Provider>
    )
}

export const useCartList =() =>{
    return useContext(CartListContext);
}

export const useCartChange =() =>{
    return useContext(CartChangesContext);
}