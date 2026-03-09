
import { Drink } from "@/types";
import { api } from "./api"


export const getCocktailByName = async () => {
    const response = await api.get<Drink[]>(`/search.php?s=margarita`);
    return response.data;
};

export const getCocktailById = async (id: string) => {
    const response = await api.get<Drink[]>(`/lookup.php?i=${id}`);
    console.log(response);
    return response.data;
}

export const getRandomCocktail = async () => {
    const response = await api.get<Drink[]>(`/random.php`);
    return response.data;
}