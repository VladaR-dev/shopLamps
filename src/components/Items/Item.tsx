import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useAppContext } from '../../context';
import { ILamp } from '@/types';
import s from './Item.module.css';

interface Props {
  lamp: ILamp;
}

export const Item = ({ lamp }: Props) => {
  const { setCartItems, setTotalItems, cartItems } = useAppContext();

  const existenceItem = cartItems.find((cartItem) => cartItem.id === lamp.id);

  const disablePlusBtn = existenceItem
    ? existenceItem.quantity === lamp.total
    : false;

  const disabledMinusBtn = !existenceItem;

  const handleAdd = () => {
    if (lamp.total === 0) return;

    setCartItems((prevCartItem) => {
      // когда товар есть в корзине, но он не закончился
      if (existenceItem && existenceItem.quantity < lamp.total) {
        setTotalItems((prevTotal) => prevTotal + 1);
        return prevCartItem.map((item) =>
          item.id === lamp.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // когда товара нет
      if (!existenceItem) {
        setTotalItems((prevTotal) => prevTotal + 1);
        return [
          ...prevCartItem,
          {
           ...lamp,
            quantity: 1,
          },
        ];
      }

      // когда товар есть в корзине, но он закончился
      return prevCartItem;
    });
  };

  const handleDelete = () => {
    setCartItems((prevCartItem) => {
      if (existenceItem) {
        if (existenceItem?.quantity > 1) {
          setTotalItems((prevTotal) => prevTotal - 1);
          return prevCartItem.map((item) =>
            item.id === lamp.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          setTotalItems((prevTotal) => prevTotal - 1);
          return prevCartItem.filter((item) => item.id !== lamp.id);
        }
      }
      return prevCartItem;
    });
  };

  return (
    <div className={s.item}>
      <div className={s.itemImg}>
        <Link to={`/${lamp.id}`}>
          <img
            src={`${lamp.image}`}
            alt={lamp.name}
          />
        </Link>
      </div>

      <div className={s.itemText}>
        <div className={s.itemLeftSide}>
          <p className={s.itemName}>{lamp.name}</p>
          <p className={s.itemPrice}>{`$${lamp.price}`}</p>
        </div>
        <div className={s.itemRightSide}>
          <p>
            <b>Total:</b> {lamp.total}
          </p>
          <div className={s.icons}>
            <FaPlus
              onClick={handleAdd}
              className={`${
                disablePlusBtn || lamp.total === 0 ? s.disabled : ''
              }`}
            />
            <FaMinus
              onClick={handleDelete}
              className={disabledMinusBtn ? `${s.disabled}` : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
