exports.Subscription = {
  pizzaAddedEvent: {
    subscribe: (parent, args, {pubsub}, info) => {
      return pubsub.asyncIterator("PizzaAdded")
    },
  }
};
