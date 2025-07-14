import { useAppContext } from '../../context';
import { Item } from './Item';
import s from './Items.module.css';

export const Items = () => {
  const { lamps } = useAppContext();
  console.log('lamps', lamps);

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
