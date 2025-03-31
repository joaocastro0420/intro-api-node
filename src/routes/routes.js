const express = require('express');
const router = express.Router();

const transacoesController = require('../controllers/transacoes');


router.get('/transacoes', transacoesController.listarTransacoes);


module.exports = router