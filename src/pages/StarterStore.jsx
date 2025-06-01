import { useContext } from 'react';
import { Items } from '../components';
import logo from '../static/assets/logo.svg';
import s from './StarterStore.module.css';
import { Context } from '../context';

export const StarterStore = () => {
  const { loading } = useContext(Context);
  return (
    <>
      {loading ? (
        <div className={s.loading}>Loading...</div>
      ) : (
        <div className={s.starterStoreContainer}>
          <img
            src={logo}
            alt="logo"
          />
          <Items />
        </div>
      )}
    </>
  );
};
