import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { HelloResolvers } from './resolvers/hello-resolvers';

const resolverMap: IResolvers = merge(HelloResolvers);

export default resolverMap;
