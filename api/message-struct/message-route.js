/*core*/
var express = require('express');
var router = express.Router();

/*services*/
const add_service = require('../../services/message/add');

router.post('/add', async function(req, res) {
    try {
        const body = req;
        const message = await add_service.add(body);
        res.send(message);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;