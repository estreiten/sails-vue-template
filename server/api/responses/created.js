/**
 * 201 (CREATED) Response
 *
 * Usage:
 * return res.created();
 * return res.created(data);
 *
 * @param  {Object} data
 *          - pass string to render specified view
 */

module.exports = function created (data) {

  // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var sails = req._sails;

  sails.log.silly('res.created() :: Sending 201 ("CREATED") response');

  // Set status code
  res.status(201);

  return res.json(data);
};
