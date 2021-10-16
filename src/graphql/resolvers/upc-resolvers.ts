import { IResolvers } from '@graphql-tools/utils';
import { Upc, QueryUpcArgs } from '../generated';
import fetch from 'cross-fetch';

export const UpcResolvers: IResolvers = {
  Query: {
    async upc(_: void, args: QueryUpcArgs): Promise<Upc> {
      const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?pageSize=2&query='
      const api_key = '2OZQjK5uKNNJzmdbeK4U2hcz6bPMde4ZNO7SmW4A'

      const response = await fetch(url + args.upc + '&api_key=' + api_key);

      return {
        response: await response.text(),
      };
    },
  },
};