const axios = require('axios');

exports.Mutation = {
  async createPizza(parent, {pizza}, {pubsub}, info) {
    const response  = await axios.post('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/pizzas', pizza);
    const createdPizza = response.data;
    pubsub.publish('PizzaAdded', {pizzaAddedEvent: `Pizza: ${createdPizza.name} created`});
    return createdPizza;
  }
};
