import { Items } from '../components';
import { useAppContext } from '../context';
import logo from '../static/assets/logo.svg';
import s from './StarterStore.module.css';

export const StarterStore = () => {
  const { loading } = useAppContext();
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
