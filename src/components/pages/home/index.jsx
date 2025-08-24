import React, { useCallback, useEffect, useReducer, useState } from "react";
import ProductList from "./product-list.component";
import SideBar from "./sideBar";
import HeaderPage from "./header";
import { useReducerCart, initialState } from "../../reudcer/cartReducer";
import { useNavigate } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useCartChange, useCartList } from "../../context/cartContext";

function Home() {
  // const [cartList, setCartList] = useState([]);
  const cart = useCartList();
  const dispatch = useCartChange();
  // const [state, dispatch] = useReducer(useReducerCart, initialState);
  const naviate = useNavigate();
  // console.log("cart", cart);

  function checkData (id) {
    console.log("cartList",id,cart)
  }
function getCartList(product) {
  const existData = cart.cartList.find(item => item.id === product.id);
  console.log("handler",existData,cart);
  if (existData) {
    dispatch({ type: "Quantity", id: product.id });
  } else {
    console.log("oldState",cart);
    dispatch({ type: "ADD", payload: product });
    console.log("NewState",cart);
  }
}
useEffect(() => {
  console.log("Updated Cart:", cart.cartList);
}, [cart.cartList]);
  return (
    <>
      <div className="main" style={{ position: "relative" }}>
        <HeaderPage
          cartCount={cart.cartList.length}
          toggleEvent={() => naviate({ pathname: "/cart" })}
        />
        <Container>
          <Grid container spacing={4}>
            <ProductList cartSetter={(product)=>getCartList(product)} />
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Home;
