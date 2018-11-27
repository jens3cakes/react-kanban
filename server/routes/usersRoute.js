const express = require('express')
const router = express.Router();

const User = require('../db/Models/Users')

router.get('/', (req,res) =>{
  console.log('usersFarts', req.body)
return User.fetchAll()
.then((user) => {
  return res.json(user)
})
.catch((err) => {
  return res.status(400).send(`User not found`)
})
})


module.exports=router;