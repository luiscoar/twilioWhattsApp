var messageModel = require('../../models/message/message-model');
var config = require("../../config/config");
const { SetResponse } = require('../../models/common/response');

async function list(options) {
    try {
        if (options.headers.mn == undefined) throw "Se debe enviar el negocio";
        const messages = await messageModel.find({ state: true, mn: options.headers.mn }).exec();
        return SetResponse(messages, config.http_codes.SUCCESS, "");
    } catch (err) {
        return SetResponse(null, config.http_codes.SERVER_ERROR, err);
    }
}

module.exports = { list }