const express = require('express')
const router = express.Router();

const Card = require('../db/Models/Card')

router.route('/')
  .get((req, res) => {
    return Card.fetchAll({
      withRelated:['status', 'priority', 'creator', 'assignee']
    })
      .then(cards => {
        return res.json(cards);
      })
      .catch(err => {
        return res.status(400).send(`Task cards not found`)
      })

  })
  .post((req, res) => {
    console.log('this is the req',req.body)

    const { assigned_to, task, status_id, created_by, body, priority_id } = req.body;
    return new Card({
      assigned_to:assigned_to,
      title:task,
      status_id:status_id,
      created_by:created_by,
      body:body,
      priority_id:priority_id

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