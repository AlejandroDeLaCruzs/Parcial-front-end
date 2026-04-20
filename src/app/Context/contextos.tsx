"use client"


import { createContext, useContext, useState } from "react";

type Contexto = {
  ids: string[];
  addFavorito: (item: string) => void;
};

export const context = createContext<Contexto | null>(null);

type Params = {
  children: React.ReactNode;
};

export const FavoriteProvider = ({ children }: Params) => {
  const [ids, setIds] = useState<string[]>([]);

  const addFavorito = (item: string) => {
    setIds([...ids, item]);
  };

  return (
    <context.Provider value={{ ids, addFavorito }}>{children}</context.Provider>
  );
};

export const useIds = () => {
  const contex = useContext(context);
  if (!contex) throw error("No estas dentro del provedor");
  return contex;
};
