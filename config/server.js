// importar o módulo do express e iniciar o objeto
const express = require('express');
const server = express();

// importar o módulo do consign 
const consign = require('consign');

// Setar as variáveis 'view engine' e 'views' do express
server.set('view engine', 'ejs');
server.set('views', './app/views');

// Utilizando o middleware express.static
server.use(express.static('./app/public'));

consign()
        .include('app/routes')
        .then('app/controllers')
        .then('app/models')
        .into(server);

module.exports = server;