import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as helloTypeDefs from './schemas/hello.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import resolvers from './resolversMap';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, helloTypeDefs],
  resolvers,
});

export default schema;
