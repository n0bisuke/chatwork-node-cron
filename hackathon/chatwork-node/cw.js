var request = require('request');
var config = require('./config.js').cw;

var options = {
    url: 'https://api.chatwork.com/v1/rooms/'+config.room_id+'/messages',
    headers: {
        'X-ChatWorkToken': config.API_KEY
    },
    form: { body: config.message },
    json: true
};

function cw(){
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           console.log(body);
        }else{
            console.log('error: '+ response.statusCode);
        }
    });
}

module.exports = cw;