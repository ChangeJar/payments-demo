const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const debug = require('debug')('server:api');
const config = require('../config/env');

router.post('/:token', function (req, res, next) {
    try {
        const token = jwt.verify(req.params.token, config.jwtSecret);

        // Do something with the token contents
        debug("Webhook called with: ", token)

        res.send('OK');
    } catch (err) {
        res.statusCode = 422;
        res.send(err);
    }
});

module.exports = router;