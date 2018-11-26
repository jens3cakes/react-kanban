const express = require('express')
const router = express.Router();

const Card = require('../db/Models/Card')

router.route('/')
  .get((req, res) => {
    return Card.fetchAll({
      withRelated: ['status', 'priority', 'creator', 'assignee']
    })
      .then(cards => {
        return res.json(cards);
      })
      .catch(err => {
        return res.status(400).send(`Task cards not found`)
      })

  })
  .post((req, res) => {
    // console.log('this is the post req', req.body)

    const { assigned_to, task, status_id, created_by, body, priority_id } = req.body;
       return new Card({
      assigned_to: assigned_to,
      title: task,
      status_id: status_id,
      created_by: created_by,
      body: body,
      priority_id: priority_id,
    })
    .save()
      .then(card => {
        console.log('add new card fetch',card)
        return card.refresh({ withRelated: ['priority', 'status', 'assignee', 'creator'] })
      })
      .then(card => {
        return res.json(card);
      })
      .catch(err => {
        return res.status(400).send(`Not able to update`);
      })
  })

  .put((req, res) => {
    // console.log('this is the put req', req.body)
    const { id, assigned_to, title, status_id, created_by, body, priority_id } = req.body;
    let parsePId = parseInt(priority_id);//
    let parseStatId = parseInt(status_id);
    let parseCId = parseInt(created_by);//
    let parseAId = parseInt(assigned_to);
    let parseId = parseInt(id);
    // console.log('fartbody',body, title)
    return new Card()
      .where({ id: parseId })
      .fetch()
      .then(card => {
        // console.log('farts', parseId,id)
        card.save({
          id: parseId,
          assigned_to: parseAId,
          title: title,
          status_id: parseStatId,
          created_by: parseCId,
          body: body,
          priority_id: parsePId
        })
          .then(card => {
            console.log('put', card);
            return card.refresh({ withRelated: ['priority', 'status', 'assignee', 'creator'] })
          })
          .then(card => {
            return res.json(card);
          })
          .catch(err => {
            return res.status(400).json({ message: err.message, code: err.code })
          })
      })
  })



module.exports = router;