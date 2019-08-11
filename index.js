const {Mutation} = require("./src/resolvers/Mutation");
const {Topping} = require("./src/resolvers/Topping");
const {Pizza} = require("./src/resolvers/Pizza");
const {Query} = require("./src/resolvers/Query");
const {Subscription} = require("./src/resolvers/Subscription");
const {GraphQLServer} = require('graphql-yoga');
const {PubSub} = require('graphql-subscriptions');

const pubsub = new PubSub();

const resolvers = {
  Query,
  Pizza,
  Topping,
  Mutation,
  Subscription
};

const context = {
  pubsub
};

const server = new GraphQLServer({typeDefs: './src/schema.graphql', resolvers, context});
server.start(() => console.log('Server is running on localhost:4000'));
