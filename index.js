const {Query} = require("./src/resolvers/Query");
const {GraphQLServer} = require('graphql-yoga');


const resolvers = {
  Query
};

const server = new GraphQLServer({typeDefs: './src/schema.graphql', resolvers});
server.start(() => console.log('Server is running on localhost:4000'));
