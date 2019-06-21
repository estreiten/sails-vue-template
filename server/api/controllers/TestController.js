/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  dummy: (req, res) => {
    return res.ok('Hello man!');
  },
  getProduct: async (req, res) => {
    const product = await Product.findOne({name: 'Pete'});
    return res.ok(product.price);
  }
};
