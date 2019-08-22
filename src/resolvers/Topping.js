const axios = require('axios');

exports.Topping = {
  async allergen(parent, context, args, info) {
    if (parent.allergen) {
      const {data: allergens} = await axios.get('https://tfjmscrwcc.execute-api.eu-west-1.amazonaws.com/dev/allergens')
      return allergens.find(({id}) => {
        return id === parent.allergen
      });
    }
    return null;
  }
};
