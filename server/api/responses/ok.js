/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok(data);
 *
 * @param  {Object} data
 *          - pass string to render specified view
 */

module.exports = function sendOK (data) {

  // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var sails = req._sails;

  sails.log.silly('res.ok() :: Sending 200 ("OK") response');

  // Set status code
  res.status(200);

  return res.json(data);
};
