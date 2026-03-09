"use client";
import { Drink } from "@/types/cocktail";
import Link from "next/link";

export const Cocktail = ({ cocktail }: { cocktail: Drink }) => {
  return (
    <Link
      href={`/cocktail/${cocktail.idDrink}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="CocktailCointener">
        <img src={cocktail.strDrinkThumb} />
        <p>
          <strong>Name:</strong> {cocktail.strDrink}
        </p>
      </div>
    </Link>
  );
};

export default Cocktail;
