
import { Drink } from "@/types";
import { api } from "./api"


export const getCocktailByName = async (name: string) => {
    if(!name)  name = "margarita";
    const response = await api.get(`/search.php?s=${name}`);
    console.log(response);
    return response.data;
};

export const getCocktailById = async (id: string) => {
    const response = await api.get(`/lookup.php?i=${id}`);
    console.log(response);
    return response.data;
}

export const getRandomCocktail = async () => {
    const response = await api.get(`/random.php`);
    return response.data;
}