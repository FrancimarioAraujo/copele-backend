require('dotenv').config();
const express2 = require('express');
const cors = require('cors');
const connectDB2 = require('./config/db');

const app = express2();
connectDB2();

app.use(cors());
app.use(express2.json());

app.use('/api/reunioes', require('./routes/reuniaoRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));