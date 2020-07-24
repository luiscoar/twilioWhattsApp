//EJemplo SMS message
var accountSid = 'ACd271826cd7af9e434c40fedf09fdea6b'; // Your Account SID from www.twilio.com/console
var authToken = 'f24d66317b002848d7d6899e63e5a436'; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

function sendMessage(_body, _to, _from) {
    client.messages.create({
            body: _body,
            to: _to,
            from: _from
        })
        .then((message) => {
            console.log("retornoF" + JSON.stringify(message));
        });
}

// let __body = "Hola mundo 2";
let __body = "Hola ¿Como estas?";
let __to = "+525621237181";
// let __to = "+525588040807";
let __from = "+12199612366";

sendMessage(__body, __to, __from);