import { toast } from 'react-toastify';
import { CartItem } from '../components';
import { useAppContext } from '../context';
import s from './Cart.module.css';

export const Cart = (): JSX.Element => {
  const { cartItems, setCartItems, setLamps, lamps, setTotalItems, isAuth } =
    useAppContext();

  const checkIsAuth = isAuth === true;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckOut = () => {
    if (checkIsAuth) {
      const updetedLamps = lamps.map((lamp) => {
        const item = cartItems.find((cartItem) => cartItem.id === lamp.id);
        return {
          ...lamp,
          total: item ? lamp.total - item.quantity : lamp.total,
        };
      });

      setLamps(updetedLamps);
      setCartItems([]);
      setTotalItems(0);

      toast.success('Purchase completed successfully', {
        autoClose: 2000,
      });
      return;
    }

    toast.error('To make a purchase you must be logged in', {
      autoClose: 2000,
    });
  };

  if (cartItems.length === 0) {
    return <div className={s.cartItems}>Корзина пуста</div>;
  }

  return (
    <div className={s.cartItems}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
      <div className={s.subTotal}>
        <div className={s.count}>
          <b>Sub total:</b> {`$${totalPrice}`}
        </div>
        <button
          className={checkIsAuth ? `${s.btnActive}` : ''}
          onClick={handleCheckOut}>
          Check out
        </button>
      </div>
    </div>
  );
};
