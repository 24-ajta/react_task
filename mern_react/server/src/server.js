const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../model/user');

const app = express();
const port = 3000;


app.use(express.json());


mongoose.connect("mongodb:127.0.0.1:27017/user")
app.get('/getdetails', (req, res) => {
  UserModel.find()
  .then(users=>res.json(users))
  .catch(error=>res.json(error))
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`)
});