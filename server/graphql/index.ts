import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server';
import { join } from 'path';
import { dataSources } from './data';
import { resolvers } from './resolvers';

const schema = loadSchemaSync(
  join(__dirname, '..', 'graphql', 'schema.graphql'),
  {
    loaders: [new GraphQLFileLoader()],
  },
);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: addResolversToSchema({ schema, resolvers }),
  resolvers,
  dataSources,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
