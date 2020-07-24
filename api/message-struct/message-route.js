/*core*/
var express = require('express');
var router = express.Router();

/*services*/
const add_service = require('../../services/message/add');
const list_service = require('../../services/message/list');

router.post('/add', async function(req, res) {
    try {
        const body = req;
        const message = await add_service.add(body);
        res.send(message);
    } catch (err) {
        res.send(err);
    }
});

router.get('/list', async function(req, res) {
    try {
        const body = req;
        const messages = await list_service.list(body);
        return res.send(messages);
    } catch (err) {
        return res.send(err);
    }
});


module.exports = router;