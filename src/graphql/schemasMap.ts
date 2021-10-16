import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as helloTypeDefs from './schemas/hello.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import * as upcTypeDefs from './schemas/upc.graphql';
import resolvers from './resolversMap';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, helloTypeDefs, upcTypeDefs],
  resolvers,
});

export default schema;
