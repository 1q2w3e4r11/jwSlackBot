require('dotenv').config();

const {RTMClient} = require('@slack/rtm-api');

var token = 'xoxb-4240877487553-4229303761031-dLp4NOE5JGqxDYhbIt17a7pr';

var rtm = new RTMClient(token);
rtm.start();

var greeting = require('./greeting');
var square = require('./square');



rtm.on('message', function (message) {
	var channel = message.channel;
	var text = message.text;

	if (!isNaN(text)){
		square(rtm, text, channel);
	} else {
		switch (text){	
			case 'hi':
				greeting(rtm,channel);
				break;
			default:
				rtm.sendMessage('I`m alive',channel);
		}	
	
	
	}

});

