const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* /hello
*
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  lib.utils.sms['@1.0.4']({
		to: '4168908120',
		body: 'Reminder: Team Building Seminar - 14:00 - Friday, January 28th, 2018'
	}, (err, result) => {
		callback(null, {
      text: `SMS sent to @Ian and 5 others.`,
      attachments: [
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
	});
};
