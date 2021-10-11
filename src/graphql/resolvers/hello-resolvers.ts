import { IResolvers } from '@graphql-tools/utils';
import { Greeting, QueryHelloWorldArgs } from '../generated';

export const HelloResolvers: IResolvers = {
  Query: {
    async helloWorld(_: void, args: QueryHelloWorldArgs): Promise<Greeting> {
      return {
        response: `Hello ${args.name}`,
      };
    },
  },
};
