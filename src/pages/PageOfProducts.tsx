import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context';
import s from './PageOfProducts.module.css';

export const PageOfProducts = () => {
  const { goodId } = useParams<{ goodId: string }>();

  const [valueInp, setValueInp] = useState('');

  const { lamps, setTotalItems, setCartItems, cartItems, loading } =
    useAppContext();

  const lamp = lamps.find((lamp) => lamp.id === goodId);

  if (!lamp) {
    return <div>Товар не найден</div>;
  }

  const isInpValid = (input: string) => {
    const numberInput = Number(input);
    return !isNaN(numberInput) && numberInput > 0 && numberInput <= lamp.total;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (isInpValid(inputValue) || inputValue === '') {
      setValueInp(inputValue);
    }
  };

  const existenceItem = cartItems.find((cartItem) => cartItem.id === goodId);

  const handleChangeButton = () => {
    if (existenceItem && existenceItem.quantity === lamp.total) return;
    const quantity = Number(valueInp);

    setCartItems((prevCartItem) => {
      if (existenceItem && existenceItem.quantity < lamp.total) {
        setTotalItems((prevTotal) => prevTotal + quantity);
        return prevCartItem.map((item) =>
          item.id === goodId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      if (!existenceItem) {
        setTotalItems((prevTotal) => prevTotal + quantity);
        return [
          ...prevCartItem,
          {
            ...lamp,
            quantity,
          },
        ];
      }
      return prevCartItem;
    });
    setValueInp('');
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className={s.pageOfGoodContainer}>
      <div className={s.fieldAdd}>
        <img
          src={lamp.image}
          alt={lamp.name}
        />
        <div className={s.filedAddRightSide}>
          <div className={s.fieldAddName}>{lamp.name}</div>
          <div className={s.fieldAddPrice}>{`$${lamp.price}`}</div>
          <div className={s.fieldAddTotal}>{`Balance: ${lamp.total}`}</div>
          <div className={s.inputField}>
            <input
              type="text"
              value={valueInp}
              placeholder="0"
              onChange={handleChange}
            />
            <div
              className={
                existenceItem && existenceItem.quantity === lamp.total
                  ? `${s.button} ${s.disabled}`
                  : `${s.button}`
              }
              onClick={handleChangeButton}>
              Add to cart
            </div>
          </div>
        </div>
      </div>
      <div className={s.fieldInfo}>
        <p>About this product</p>
        <p>{lamp.productDescription}</p>
      </div>
    </div>
  );
};
