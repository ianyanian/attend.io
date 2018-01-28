const lib = require('lib');

/**
* @returns {string}
*/
module.exports = (name = '', callback) => {

  lib.utils.sms['@1.0.4']({
		to: '4168908120',
		body: 'Homework assignment due date changed. Conference meeting completed slide 10. More details at bit.ly/atd012818'
	}, (err, result) => {
		callback(null, 'SMS update sent');
	});
  };
