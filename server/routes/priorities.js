const express = require('express')
const router = express.Router();

const Priorities = require('../db/Models/Priorities')

router.get('/', (req, res) => {
  return Priorities.fetchAll()
  .then((priority) => {
    return res.json(priority)
  })
  .catch((err) => {
    return res.status(400).send(`Priority not found`)
  })
})

module.exports = router;