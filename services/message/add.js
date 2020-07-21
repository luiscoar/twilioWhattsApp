var config = require("../../config/config");
const messageModel = require('../../models/message/message-model');
const { SetResponse } = require("../../models/common/response");
const { messages } = require("../../config/config");

//EJemplo SMS message
var accountSid = 'ACd271826cd7af9e434c40fedf09fdea6b'; // Your Account SID from www.twilio.com/console
var authToken = 'b027726ed3cf0567813e92aa5fce5648'; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

async function sendMessage(_body, _to, _from) {
    await client.messages.create({
            body: _body,
            to: _to,
            from: _from
        })
        .then((message) => {
            return message;
            // console.log("retornoF", JSON.stringify(retorno));
        });
}

async function add(options) {
    try {
        let x = await sendMessage(options.body.message.body, options.body.message.from, options.body.message.to);
        console.log("x " + JSON.stringify(x));
        // console.log("r" + retorno);
        // console.log("retorno: " + JSON.stringify(retorno));

        // let messageNew = new messageModel({
        //     mn: options.body.name,
        //     message: {
        //         from: options.body.message.from,
        //         to: options.body.message.to,
        //         body: options.body.message.body
        //     }
        // })

        // let message = await messageNew.save();

        // sendMessage(messageNew.message.body, messageNew.message.from, messageNew.message.to);

        return SetResponse(message, config.http_codes.SUCCESS, "Mensaje enviado correctamente.", "");
    } catch (err) {
        return SetResponse(null, config.http_codes.stringify, "", err);
    }
}

module.exports = { add }