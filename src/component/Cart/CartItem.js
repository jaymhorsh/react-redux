import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";
// import { useSelector } from "react-redux";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItemToCart(item));
    console.log(item);
  };
  const removeFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };
  console.log(item)

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
