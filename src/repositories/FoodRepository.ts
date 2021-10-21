import fetch from "cross-fetch";
import { API_KEY, URL } from "../utils/constants";

export default class FoodRepository {
  private query: String = ''
  
  constructor(query: String) {
    this.query = query;
  }

  async fetchMetaInfo() {
    const response = await fetch(URL + this.query + '&api_key=' + process.env.API_KEY);
    return await response.json().then((data) => {
      return [{
        description: data.foods[0].description,
        category: data.foods[0].foodCategory,
        brand: data.foods[0].brandName,
        owner: data.foods[0].brandOwner,
        upc: data.foods[0].gtinUpc
      }]
    });
  }

  async fetchIngredientInfo() {
    const response = await fetch(URL + this.query + '&api_key=' + process.env.API_KEY);
    return await response.json().then((data) => {
      return [{
        ingredients: data.foods[0].ingredients,
      }]
    });
  }

  async fetchNutrientInfo() {
    const response = await fetch(URL + this.query + '&api_key=' + process.env.API_KEY);
    return await response.json().then((data) => {
      const nutrients = data.foods[0].foodNutrients;
      const validKeys = [
        'nutrientName',
        'unitName',
        'value'
      ]

      for(var i = 0; i < Object.keys(nutrients).length; ++i) {
        for(var key in nutrients[i]) {
          if(!validKeys.includes(key))
            delete nutrients[i][key];
        }  
      }

      return [{
        nutrients
      }];
    })
  }
}