import { FaTrashAlt } from 'react-icons/fa';
import {  useAppContext } from '../../context';
import s from './CartItem.module.css';
import { ICartItem } from '@/types';

interface Props {
  item: ICartItem;
}

export const CartItem = ({ item }: Props) => {
  const { cartItems, setCartItems, setTotalItems } = useAppContext();

  const handleDelete = () => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setTotalItems((prevTotal) => prevTotal - item.quantity);
  };

  return (
    <div className={s.cartItem}>
      <img
        src={item.image}
        alt={item.name}
      />
      <div className={s.rightSideCartItem}>
        <div className={s.infoCart}>
          <div className={s.nameCart}>{item.name}</div>
          <div
            className={
              s.quntityPriceCart
            }>{`${item.quantity} x $${item.price}`}</div>
          <div className={s.someMoreInfo}>Some more information goes here</div>
        </div>
        <FaTrashAlt onClick={handleDelete} />
      </div>
    </div>
  );
};
