export interface ILamp {
  id: string;
  total: number;
  productDescription: string;
  name: string;
  image: string;
  price: number;
}

export interface ICartItem extends ILamp {
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
    cartItems: ICartItem[];
    isAuth: boolean;
    setLoading: (value: boolean | ((prev: boolean) => boolean)) => void;
    setLamps: (value: ILamp[] | ((prev: ILamp[]) => ILamp[])) => void;
    setTotalItems: (value: number | ((prev: number) => number)) => void;
    setIsAuth: (value: boolean | ((prev: boolean) => boolean)) => void;
    setCartItems: (value: ICartItem[] | ((prev: ICartItem[]) => ICartItem[])) => void;
    setUsers: (value: IUser[] | ((prev: IUser[]) => IUser[])) => void;
    users: IUser[];
}