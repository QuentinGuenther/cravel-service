import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { HelloResolvers } from './resolvers/hello-resolvers';
import { FoodResolvers } from './resolvers/food-resolvers';

const resolverMap: IResolvers = merge(FoodResolvers, HelloResolvers);

export default resolverMap;
