const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

app.get('/', function(req, res){
    res.setHeader('Content-type', 'text/plain');
    res.send('Accueil');
});

app.get('/status', (req, res)=>{
    res.send({
        message: 'Hello World'
    });
});

app.listen(process.env.PORT || 8000, function () {
    console.log('App listening on port 8000!');
  });
