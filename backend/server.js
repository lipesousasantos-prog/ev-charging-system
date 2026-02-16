require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = require('./src/app');
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/chargers', require('./src/routes/chargers'));
app.use('/api/sessions', require('./src/routes/sessions'));
app.use('/api/payments', require('./src/routes/payments'));
app.use('/api/vouchers', require('./src/routes/vouchers'));
app.use('/api/admin', require('./src/routes/admin'));

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});

module.exports = app;