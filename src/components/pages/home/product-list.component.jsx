import React, { useCallback, useEffect, useReducer, useState } from "react";
import ProductCard from "./product-card.component";
import "./product-list.style.css";
import { CustomSearch, useDebounce } from "../../sharedUI/customComponents";
import { initialState, useReducerCart } from "../../reudcer/cartReducer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useCartList } from "../../context/cartContext";

function ProductList({ cartSetter }) {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const cart = useCartList();

  const [searchTerm, setSerachTerm] = useState("");

  const debounced = useDebounce(searchTerm.toLowerCase(), 300);

  console.log("debounced", debounced);

  const fetchProductList = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      console.log("ListData", data);
      if (data > !0) {
        throw new Error(setIsError("NO DATA FOUND"));
      }
      setProductList(data);
    } catch (err) {
      console.log(err);
      setIsError("Error in fetch data");
    } finally {
      setIsLoading(false);
    }
  }, [productList]);

  // Only Once run sideEffect
  useEffect(() => {
    fetchProductList();
  }, []);

  const filteredData =
    productList?.filter((product) =>
      product?.title.toLowerCase().includes(debounced)
    ) ||
    productList.filter((product) =>
      product?.brand.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    productList.filter((product) =>
      product?.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // console.log("filter re-render", filteredData);

  const handlerGetData = useCallback(
    (product, type) => {
      const payload ={
        id:product?.id,
        title:product?.title,
        price:product?.price,
        quantity:1,
      }
      if ("a" === type) {

        cartSetter(payload);
      } else if ("d" === type) {
        if (confirm("Do you want to Delete the card")) {
          setProductList(
            productList.filter(
              (value) =>
                value.title.toLowerCase() !== product.title.toLowerCase()
            )
          );
        }
      }
    },
    [productList]
  );

  if (isLoading) {
    return <div className="is-loading">Loading....</div>;
  }

  if (isError) {
    return <div className="product-container">Error: {isError}</div>;
  }

  return (
    <>
      <div className="product-container">
        <h2>Product List :</h2>
        <div style={{marginBottom:"10px"}}>
          <CustomSearch
            classes={"product-seacrch"}
            placeholder={"Product Search..."}
            searchTerm={searchTerm}
            setSerachTerm={setSerachTerm}
          />
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredData?.length > 0 ? (
            filteredData.map((product, _) => (
              <Grid key={product?.id} size={{ xs: 2, sm: 4, md: 4 }}>
                <ProductCard
                  key={product.id}
                  product={product}
                  getProduct={handlerGetData}
                />
              </Grid>
            ))
          ) : (
            <div>{"No data Found"}</div>
          )}
        </Grid>
      </div>
    </>
  );
}
export default ProductList;
