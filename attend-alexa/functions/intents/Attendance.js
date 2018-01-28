const lib = require('lib');

/**
* Basic intent, can receive a `name` parameter
* @param {string} name Your name
* @returns {string}
*/
module.exports = (name = 'Trevor', callback) => {

  return callback(null, `Hello ${name}, currently there are 49 in attendance of an expected 65 attendees`);

};
