import fetch from "cross-fetch";
import { API_KEY, URL } from "../utils/constants";

export default class FoodRepository {
  async fetchMetaInfo() {
    const response = await fetch(URL + 'pizza' + '&api_key=' + API_KEY);
    return await response.json().then((data) => {
      return [{
        description: data.foods[0].description,
        category: data.foods[0].foodCategory,
        brand: data.foods[0].brandOwner,
        upc: data.foods[0].gtinUpc
      }]
    });
  }

  async fetchIngredientInfo() {
    const response = await fetch(URL + 'pizza' + '&api_key=' + API_KEY);
    return await response.json().then((data) => {
      return [{
        ingredients: data.foods[0].ingredients,
      }]
    });
  }
}