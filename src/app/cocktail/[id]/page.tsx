"use client";
import { getCocktailById } from "@/lib/api/cocktails";
import { Drink } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const CocktailInfo = () => {
  const [cocktail, setCocktail] = useState<Drink | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    getCocktailById(id)
      .then((res) => {
        setCocktail(res.drinks.at(0));
        setLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
    {loading && <h1>Loading...</h1>}
      {!loading && cocktail && (
        <div className="mainInfo">
          <div className="contiener">
            <div className="dataCointener">
              <div>
                <h2>{cocktail.strDrink}</h2>
                <p>Category: {cocktail?.strCategory}</p>
                <p>Glass: {cocktail?.strGlass}</p>
                <p>Alcohólico: {cocktail.strAlcoholic}</p>
                <p>Vaso necesario: {cocktail.strGlass}</p>
                <p>Instrucciones: {cocktail.strInstructions}</p>
                <p>
                  Ingredientes: {cocktail.strIngredient1} ,{" "}
                  {cocktail.strIngredient2
                    ? cocktail.strIngredient2 + ", "
                    : ""}
                  {cocktail.strIngredient3
                    ? cocktail.strIngredient3 + ", "
                    : " "}
                  {cocktail.strIngredient4
                    ? cocktail.strIngredient4 + ", "
                    : " "}
                  {cocktail.strIngredient5
                    ? cocktail.strIngredient5 + ", "
                    : " "}
                  {cocktail.strIngredient6
                    ? cocktail.strIngredient6 + ", "
                    : " "}
                  {cocktail.strIngredient7
                    ? cocktail.strIngredient7 + ", "
                    : " "}
                  {cocktail.strIngredient8
                    ? cocktail.strIngredient8 + ", "
                    : " "}
                  {cocktail.strIngredient9
                    ? cocktail.strIngredient9 + ", "
                    : " "}
                  {cocktail.strIngredient10
                    ? cocktail.strIngredient10 + ", "
                    : " "}
                  {cocktail.strIngredient11
                    ? cocktail.strIngredient11 + ", "
                    : " "}
                  {}
                </p>
              </div>
            </div>
            {cocktail?.strDrinkThumb && <img src={cocktail?.strDrinkThumb} />}
          </div>
        </div>
      )}
    </>
  );
};

export default CocktailInfo;
