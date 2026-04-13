const mongoose = require('mongoose');

const PautaSchema = new mongoose.Schema({
  id: String,
  descricao: String,
  status: String
});

const ReuniaoSchema = new mongoose.Schema({
  reuniao: {
    data: Date,
    hora_inicio: String,
    secretario: String,
    participantes: [String],
    pautas: [PautaSchema]
  }
}, { timestamps: true });

module.exports = mongoose.model('Reuniao', ReuniaoSchema);