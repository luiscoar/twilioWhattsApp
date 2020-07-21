// //EJemplo SMS message
// var accountSid = 'ACd271826cd7af9e434c40fedf09fdea6b'; // Your Account SID from www.twilio.com/console
// var authToken = 'b027726ed3cf0567813e92aa5fce5648'; // Your Auth Token from www.twilio.com/console

// var twilio = require('twilio');
// var client = new twilio(accountSid, authToken);

// var retorno = [];

// function sendMessage(_body, _to, _from) {
//     client.messages.create({
//             body: _body,
//             to: _to,
//             from: _from
//         })
//         .then((message) => {
//             retorno = message;
//             console.log("retornoF" + JSON.stringify(retorno));
//         });
// }

// // let __body = "Hola mundo 2";
// let __body = "tienes algo en mente algun esquema ?";
// let __to = "+525621237181";
// // let __to = "+525588040807";
// let __from = "+12199612366";

// sendMessage(__body, __to, __from);