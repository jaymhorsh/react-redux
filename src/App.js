import { useSelector, useDispatch } from "react-redux";

import Cart from "./component/Cart/Cart";
import Layout from "./component/Layout/Layout";
import Products from "./component/Shop/Products";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  const toggleCart = useSelector((state) => state.ui.showCart);
  const cart =  useSelector((state)=> state.cart.items)
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
       uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
          message: 'Sending cart data!',
        })
       );
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
       uiActions.showNotification({
         status: 'success',
          title: 'Success!',
       
      message: 'Sent cart data successfully!',
         })
      );
    };

    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

    sendCartData().catch((error) => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: 'error',
      //     title: 'Error!',
      //     message: 'Sending cart data failed!',
      //   })
      // );
    });
  }, [cart, dispatch]);
  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
