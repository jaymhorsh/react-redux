import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart-slice';

const ProductItem = ({meal}) => {

  const dispatch = useDispatch()
  const addToCart = ()=>{
    dispatch(addItemToCart(meal))
    console.log(meal)
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{meal.title}</h3>
          <div className={classes.price}>${meal.price.toFixed(2)}</div>
        </header>
        <p>{meal.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
