"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import { getCocktailByName, getRandomCocktail } from "@/lib/api/cocktails";
import Cocktail from "@/components/cocktail";
import { Drink } from "@/types";
import Link from "next/link";

export const Home = () => {
  const [cocktails, setCocktails] = useState<Drink[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [idRandom, setIdRandom] = useState<string | null>(null);

  const fetchDrinks = async () => {
    setLoading(true);
    await getCocktailByName()
      .then((res) => {
        setCocktails(res.drinks);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const fetchRandomDrink = async () => {
    await getRandomCocktail().then((res) => {
      setIdRandom(res.drinks.at(0).idDrink);
    });
  };

  useEffect(() => {
    fetchDrinks();
    fetchRandomDrink();
  }, []);

  return (
    <div className="main">
      <Link href={`/cocktail/${idRandom}`}>
        <button>Dime algo bonito</button>
      </Link>
      <div className="mainCointer">
        {error && <h3>Error: {error}</h3>}
        {!loading && cocktails &&
          cocktails.map((e) => <Cocktail key={e.idDrink} cocktail={e} />)}
      </div>
    </div>
  );
};

export default Home;
