const express = require('express')
const bodyParser = require('body-parser');
const cardsRouter = require('./routes/cards')
const usersRouter = require('./routes/usersRoute')
const priorityRouter = require('./routes/priorities')
const statusRouter = require('./routes/statusesRoute')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/cards', cardsRouter);
app.use('/api/users', usersRouter);
app.use('/api/priorities', priorityRouter);
app.use('/api/statuses', statusRouter);


app.get('/api/smoke', (req, res) => {
  res.json({ message: 'smoke test' });
});

module.exports = app;
