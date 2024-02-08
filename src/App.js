import { useSelector } from 'react-redux';
import Cart from './component/Cart/Cart';
import Layout from './component/Layout/Layout';
import Products from './component/Shop/Products';

function App() {
  const toggleCart = useSelector((state) => state.ui.showCart);

  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products/>
    </Layout>
  );
}

export default App;