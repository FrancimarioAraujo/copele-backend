const Reuniao = require('../models/Reuniao');

exports.criarReuniao = async (req, res) => {
  try {
    const reuniao = new Reuniao(req.body); // agora recebe { reuniao: {...} }
    await reuniao.save();
    res.status(201).json(reuniao);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.listarReunioes = async (req, res) => {
  const reunioes = await Reuniao.find().sort({ data: -1 });
  res.json(reunioes);
};

exports.buscarReuniao = async (req, res) => {
  const reuniao = await Reuniao.findById(req.params.id);
  res.json(reuniao);
};

exports.atualizarReuniao = async (req, res) => {
  const reuniao = await Reuniao.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(reuniao);
};

exports.deletarReuniao = async (req, res) => {
  await Reuniao.findByIdAndDelete(req.params.id);
  res.json({ mensagem: 'Reunião removida' });
};
