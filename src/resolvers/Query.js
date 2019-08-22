const axios = require('axios');

exports.Query = {
  hello(parent, args, context, info) {
    return "Hello World :)"
  },

  hello_you(parent, args, context, info) {
    return "Hello " + args.name;
  },

  async pizzas(parent, args, context, info) {
    // in the resolver you can execute a get request
    const response = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/pizzas')
    const pizzas = response.data;
    return pizzas;
  },

  async pizzas(parent, args, context, info) {
    const {data} = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/pizzas')
    return data;
  },

  async sauces(parent, args, context, info) {
    const {data} = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/sauces')
    return data;
  },

  async toppings(parent, args, context, info) {
    const {data} = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/toppings')
    return data
  },

  async crusts(parent, args, context, info) {
    const {data} = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/crusts')
    return data;

  }
};
