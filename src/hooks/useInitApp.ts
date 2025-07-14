import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import * as lampsApi from '../api';
import { ILamp, IUser } from '@/types';

export const useInitApp = () => {
  const [loading, setLoading] = useLocalStorage<boolean>('loading', true);
  const [lamps, setLamps] = useLocalStorage<ILamp[]>('lamps', []);
  const [totalItems, setTotalItems] = useLocalStorage<number>('totalItems', 0);
  const [cartItems, setCartItems] = useLocalStorage<ILamp[]>('cartItems', []);
  const [isAuth, setIsAuth] = useLocalStorage<boolean>('isAuth', false);
  const [users, setUsers] = useLocalStorage<IUser[]>('users', []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (lamps.length === 0) {
          const products = await lampsApi.fetchAll();
          setLamps(products);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return {
    loading,
    lamps,
    totalItems,
    cartItems,
    isAuth,
    setLoading,
    setLamps,
    setTotalItems,
    setIsAuth,
    setCartItems,
    setUsers,
    users,
  };
};
