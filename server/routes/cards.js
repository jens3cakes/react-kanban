const express = require('express')
const router = express.Router();

const Card = require('../db/Models/Card')

router.route('/')
  .get((req, res) => {
    console.log('routes',Card)
    return Card.fetchAll()
      .then(cards => {
        return res.json(cards);
      })
      .catch(err => {
        return res.status(400).send(`Task cards not found`)
      })

  })
  .post((req, res) => {
    console.log('this is the req',req.body)

    const { name, task, status, type } = req.body;
    return new Card({
      name,
      task,
      status,
      type
    })
.save()
.then(book => {
  return res.json(book);
})
.catch(err => {
  return res.status(400).send(`Not able to update`);
})
  });



module.exports = router;