import express from 'express';
import http from 'http';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import schema from './graphql/schemasMap';
import { ApolloServerPluginDrainHttpServer, Config } from 'apollo-server-core';

const PORT = 3000;

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve as () => void));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();
