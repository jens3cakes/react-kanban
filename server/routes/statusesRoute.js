const express = require('express')
const router = express.Router();

const Statuses = require('../db/Models/Statuses')

router.get('/', (req, res) => {
  return Statuses.fetchAll()
  .then((status) => {
    return res.json(status)
  })
  .catch((err) => {
    res.status(400).send(`Status not found`)
  })
})
module.exports = router;