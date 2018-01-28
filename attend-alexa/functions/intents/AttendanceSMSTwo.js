const lib = require('lib');

/**
* @returns {string}
*/
module.exports = (name = '', callback) => {

  lib.utils.sms['@1.0.4']({
		to: '6479096437',
		body: 'Team meeting is in session 2:00pm. Budget meeting in progress/20 minutes overdue'
	}, (err, result) => {
		callback(null, 'SMS reminder sent');
	});
  };
