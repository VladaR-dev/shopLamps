import { Dispatch, SetStateAction } from 'react';

export interface ILamp {
  id: string;
  total: number;
  productDescription: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IContext {
  loading: boolean;
  lamps: ILamp[];
  totalItems: number;
  cartItems: ILamp[];
  isAuth: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setLamps: Dispatch<SetStateAction<ILamp[]>>;
  setTotalItems: Dispatch<SetStateAction<number>>;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setCartItems: Dispatch<SetStateAction<ILamp[]>>
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  users: IUser[];
}
