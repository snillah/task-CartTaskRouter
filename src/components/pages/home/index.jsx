import React, {useCallback, useEffect, useReducer, useState } from "react";
import ProductList from "./product-list.component";
import SideBar from "./sideBar";
import HeaderPage from "./header";
import { useReducerCart,initialState } from "../../reudcer/cartReducer";
import { useNavigate } from "react-router";



function Home() {

const [isCartOpen, setIsCartOpen] = useState(false)
const [cartList,setCartList] = useState([])
const [state,dispatch] =useReducer(useReducerCart,initialState)
const naviate = useNavigate();
console.log("state",state)

function getCartList (product) {
  setCartList(cart =>{
    const existData = cart.find((data)=> data?.id === product.id)
    if(existData){
      alert("Its already exist")
    }
    if(!existData){
      dispatch({type:"add",payload:product})
      return [...cart,product]
    }
    return cart;
  })
};
  console.log("cart",cartList)


  return (
    <>
        <div className="main" style={{position:"relative"}}>
          
            <HeaderPage cartCount = {cartList.length} toggleEvent={()=>naviate({pathname:"/cart"})}/>
            <ProductList  cartSetter={getCartList}/>
            {/* {
              isCartOpen &&
            <SideBar cartData={cartList} onDelete={deleteHandler}/>
            } */}
        </div>
    </>
  );
}

export default Home;
