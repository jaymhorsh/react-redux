import { useSelector } from "react-redux";

import Cart from "./component/Cart/Cart";
import Layout from "./component/Layout/Layout";
import Products from "./component/Shop/Products";
import { useEffect } from "react";

function App() {
  const toggleCart = useSelector((state) => state.ui.showCart);
  const cart =  useSelector((state)=> state.cart.items)
  useEffect(()=>{

  });
  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
