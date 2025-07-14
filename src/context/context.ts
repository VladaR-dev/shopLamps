import { IContext } from '@/types';
import { createContext, useContext } from 'react';

export const Context = createContext<IContext | null>(null);

export const useAppContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};