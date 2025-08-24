import React, { useState } from "react";
import { useCartChange, useCartList } from "../../context/cartContext";
import { useNavigate } from "react-router";

function CartPage() {
  const cart = useCartList();
  const dispatch = useCartChange();
  console.log(cart);

  // const [quatity,setQuantity] = useState(0);

  const navigate = useNavigate();

  const cartList = [
    { name: "product1", price: "24" },
    { name: "product1", price: "24" },
  ];

  const deleteHandler = (id) => {
    console.log("id -delete", id);
    dispatch({ type: "Delete", id: id });
  };

  return (
    <>
      <div className="">
        <div>
          <div className="" style={{ fontSize: "24px", fontWeight: "600" }}>
            Cart List
          </div>
          <div className="" style={{ fontSize: "14px", fontWeight: "600" }} onClick={()=>navigate('/products')}>
            Product List
          </div>
        </div>

        <div>
          {cart.cartList?.map((data, index) => {
            let { title, price, id,quantity } = data;
            console.log("id value", id);
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
                <span
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "150px",
                  }}
                >
                  {index + 1 + "."} {title}
                </span>
                <span>
                  {"Rs."}
                  {price}
                </span>
                <span>
                  {"Nos."}
                  <input
                  type="number"
                  value={quantity}
                  onChange={(e)=>(e.target.value)}
                  />
                </span>
                <span>
                  {"Rs."}
                  {price * quantity}
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    border: "1px solid black",
                    borderRadius: "12px",
                    fontSize: "12px",
                    padding: "1px",
                    color: "red",
                    boxShadow: "inset 0.5px 0.5px 8px rgba(211, 196, 204, 0.8)",
                  }}
                  onClick={() => deleteHandler(id)}
                >
                  Remove
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CartPage;
