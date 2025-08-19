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
  console.log("cart",cart)
  function getCartList(product) {
      const existData = cart.cartList.find((data) => data?.id === product.id);
      if (existData) {
        alert("Its already exist");
      }
      if (!existData) {
        dispatch({ type: "ADD", payload: product });
      }
  }

  return (
    <>
      <div className="main" style={{ position: "relative" }}>
        <HeaderPage
          cartCount={cart.cartList.length}
          toggleEvent={() => naviate({ pathname: "/cart" })}
        />
        <Container>
          <Grid container spacing={4}>
          <ProductList cartSetter={getCartList} />
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Home;
