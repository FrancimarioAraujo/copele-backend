const express = require('express');
const router = express.Router();
const controller = require('../controllers/reuniaoController');

router.post('/', controller.criarReuniao);
router.get('/', controller.listarReunioes);
router.get('/:id', controller.buscarReuniao);
router.put('/:id', controller.atualizarReuniao);
router.delete('/:id', controller.deletarReuniao);

module.exports = router;