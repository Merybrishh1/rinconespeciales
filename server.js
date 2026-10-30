const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/health', (_req, res) => res.send('ok'));

app.listen(PORT, () => console.log('Menú Castañu escuchando en puerto ' + PORT));
