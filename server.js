require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

console.log('MONGO_URI:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
    console.error('Erro: MONGO_URI não está definida no arquivo .env');
    process.exit(1);
}

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection failed:', err.message);
});

app.post('/api/leads', (req, res) => {
    const { name, email, whatsapp } = req.body;

    console.log('Lead capturado:', { name, email, whatsapp });
    res.status(201).send('Lead capturado com sucesso');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
