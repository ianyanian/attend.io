const lib = require('lib');

/**
* @returns {string}
*/
module.exports = (name = '', callback) => {

  lib.utils.sms['@1.0.4']({
		to: '4168908120',
		body: 'Reminder: Project evaluation scheduled tomorrow at 2:00pm'
	}, (err, result) => {
		callback(null, 'Reminder set and sent');
	});
  };
