var config = require("../../config/config");
const messageModel = require('../../models/message/message-model');
const { SetResponse } = require("../../models/common/response");

async function add(options) {
    try {
        const messageNew = new messageModel({
            mn: options.headers.mn,
            message: {
                from: options.body.message.from,
                to: options.body.message.to,
                body: options.body.message.body
            }
        })
        const message = await messageNew.save();

        return SetResponse(message, config.http_codes.SUCCESS, "Mensaje guardado correctamente.", "");
    } catch (err) {
        return SetResponse(null, config.http_codes.stringify, "", err);
    }
}

module.exports = { add }