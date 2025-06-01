import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import * as lampsApi from '../api';

export const useInitApp = () => {
  const [loading, setLoading] = useLocalStorage('loading', true);
  const [lamps, setLamps] = useLocalStorage('lamps', []);
  const [totalItems, setTotalItems] = useLocalStorage('totalItems', 0);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [isAuth, setIsAuth] = useLocalStorage('isAuth', false);
  const [users, setUsers] = useLocalStorage('users', []);

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

  const handleSetCartItems = (value) => {
    setCartItems(value);
  };

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
    setCartItems: handleSetCartItems,
    setUsers,
    users,
  };
};
