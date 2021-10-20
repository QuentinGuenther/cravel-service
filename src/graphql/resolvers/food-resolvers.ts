import { IResolvers } from '@graphql-tools/utils';
import { Food, QueryFoodArgs } from '../generated';
import FoodRepository from '../../repositories/FoodRepository';

const foodRepository = new FoodRepository();

export const FoodResolvers: IResolvers = {
  Query: {
    async food(_: void, args: QueryFoodArgs): Promise<Food> {
      return {
        metaInfo: await foodRepository.fetchMetaInfo(),
        ingredientInfo: await foodRepository.fetchIngredientInfo(),
        nutrientInfo: await foodRepository.fetchNutrientInfo()
      };
    },
  },
};
