const axios = require('axios');

exports.Pizza = {
  async sauce(parent, args, context, info) {
    const response = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/sauces');
    const sauces = response.data;
    return sauces.find((sauce) => parent.sauce === sauce.id)
  },

  async toppings(parent, args, context, info) {
    const response = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/toppings');
    const toppings = response.data;
    return toppings.filter((topping) => parent.toppings.includes(topping.id))
  }
};
