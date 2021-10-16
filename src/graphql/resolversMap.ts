import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { HelloResolvers } from './resolvers/hello-resolvers';
import { UpcResolvers } from './resolvers/upc-resolvers';

const resolverMap: IResolvers = merge(UpcResolvers, HelloResolvers);

export default resolverMap;
