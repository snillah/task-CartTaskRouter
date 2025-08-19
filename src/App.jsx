import "./App.css";
import Home from "./components/pages/home";
import { Route, Routes } from "react-router-dom";
import CartPage from "./components/pages/home/sideBar";
import { Navigate } from "react-router";
import Listpage from "./components/pages/llist-page";
import { CartDataProvider } from "./components/context/cartContext";

let url = "https://api.escuelajs.co/api/v1/products";
function App() {
  // const {data,isLoading} = useCustomHook(url);
  return (
    <>
      <CartDataProvider>
        <Routes>
          <Route
            path={"/"}
            element={<Navigate to="/products" replace />}
          ></Route>
          <Route path={"/products"} element={<Home />}></Route>
          <Route path={"/cart"} element={<CartPage />}></Route>
          <Route path={"/listpage"} element={<Listpage />}></Route>
        </Routes>
      </CartDataProvider>
    </>
  );
}

export default App;
