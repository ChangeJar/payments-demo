var express = require('express');
var router = express.Router();
var payments = require('../changejar_api/payments');

/* POST payment users listing. */
router.post('/', function(req, res, next) {
    const request = req.body;

    const transactionRequest = {
        amount: request.amount,
        reference: request.reference,
        description: request.description,
        expiresIn: 600 // 10 minutes
    };

    return payments.createTransaction(transactionRequest)
        .then(transactionResponse => {
            res.statusCode = 201;

            res.json(transactionResponse)
        })
        .catch(next);
});

module.exports = router;
