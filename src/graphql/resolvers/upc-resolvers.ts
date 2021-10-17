import { IResolvers } from '@graphql-tools/utils';
import { Food, QueryFoodArgs } from '../generated';
import fetch from 'cross-fetch';

export const FoodResolvers: IResolvers = {
  Query: {
    async food(_: void, args: QueryFoodArgs): Promise<Food> {
      const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?pageSize=2&query='
      const api_key = '2OZQjK5uKNNJzmdbeK4U2hcz6bPMde4ZNO7SmW4A'

      const response = await fetch(url + args.upc + '&api_key=' + api_key);

      return {
        response: await response.text(),
      };
    },
  },
};
