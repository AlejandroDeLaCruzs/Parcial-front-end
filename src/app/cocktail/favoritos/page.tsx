"use client";

import Cocktail from "@/app/components/cocktail";
import { useIds } from "@/app/Context/contextos";
import { getCocktailById } from "@/lib/api/cocktails";
import { Drink } from "@/types";
import { useEffect, useState } from "react";
import "./favoritos.css";

export const Favoritos = () => {
  const { ids } = useIds();
  const [cocktails, setCocktails] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const results = await Promise.all(
        ids.map((id) => getCocktailById(id))
      );

      setCocktails(results); 
    };

    fetchCocktails();
  }, []);

  return (
    <div className="favoritos">
      {cocktails.map((e) => (
        <Cocktail key={e.idDrink} cocktail={e} />
      ))}
    </div>
  );
};

export default Favoritos;