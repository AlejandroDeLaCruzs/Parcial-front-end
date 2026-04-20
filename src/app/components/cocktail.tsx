import { Drink } from "@/types/cocktail";
import Link from "next/link";
import { useIds } from "../Context/contextos";

export const Cocktail = ({ cocktail }: { cocktail: Drink }) => {
  const { addFavorito } = useIds();

  return (
    <div>
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
      <button onClick={() => addFavorito(cocktail.idDrink)}>
        Añadir a favorito
      </button>
    </div>
  );
};

export default Cocktail;
