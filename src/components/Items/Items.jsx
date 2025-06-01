import { useContext } from 'react';
import { Context } from '../../context';
import { Item } from './Item';
import s from './Items.module.css';

export const Items = () => {
  const { lamps } = useContext(Context);

  return (
    <div className={s.items}>
      {lamps.map((lamp) => (
        <Item
          key={lamp.id}
          lamp={lamp}
        />
      ))}
    </div>
  );
};