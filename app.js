const app = require('./config/server');

app.listen('8080', function(){
    console.log('Servidor ligado em: http://localhost:8080');
});