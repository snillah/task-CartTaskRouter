import React, { useReducer } from "react";
import { initialState, useReducerCart } from "../../reudcer/cartReducer";

function CartPage({cartData}) {
  const [state,dispatch] = useReducer(useReducerCart,initialState);

  console.log(state)

  const cartList = [
    { name: "product1", price: "24" },
    { name: "product1", price: "24" },
  ];

  
  const deleteHandler = (id) => {
      console.log("id -delete",id)
      setCartList(cart => {
        const afterDeletedData = cart.filter((cartProduct)=>cartProduct.id !== id)
        if(afterDeletedData){
          return [...afterDeletedData]
        }
        return cart;
      })
  }

  return (
    <>
      <div className="">
        <div className="" style={{fontSize:"24px", fontWeight:"600"}}>Cart List</div>
        <div>
          {state["cartList"]?.map((data, index) => {
            let { title,price,id} = data;
            console.log("id value",id)
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "14px",
                  backgroundColor: "whitesmoke",
                  borderRadius: "8px",
                  padding: "3px",
                  cursor: "pointer",
                }}
                className="list-view"
              >
                <span style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis", width:"150px"}}>
                  {index + 1 + "."} {title}
                </span>
                <span>{"Rs."}{price}</span>
                <span style={{ cursor:"pointer",border:"1px solid black",borderRadius:"12px",fontSize:"12px",padding:"1px", color:"red", boxShadow:"inset 0.5px 0.5px 8px rgba(211, 196, 204, 0.8)"}} onClick={()=>deleteHandler(id)}>close</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CartPage;
