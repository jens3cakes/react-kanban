const express= require('express')
const bodyParser = require('body-parser');
const cardsRouter = require('./routes/cards')
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/cards', cardsRouter);

app.get('/api/smoke', (req, res) => {
  res.json({message: 'smoke test'});
});

module.exports = app;
