var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MessageModelSchema = new Schema({
    // mn: { type: Object, required: true }, //id del negocio
    mn: { type: String }, //id del negocio
    message: {
        from: { type: String }, //numero receptor
        to: { type: String }, //numero receptor
        body: { type: String }, //contenido del mensaje
    }
});

//Se exporta el modelo creado a mongoose.model
module.exports = mongoose.model('MessageModel', MessageModelSchema);