import express from 'express';
import { MongoClient as _MongoClient } from 'mongodb';
const app = express();
const port = 3000;

const MongoClient = _MongoClient;
const url = "mongodb://localhost:27017/fakeData";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});

app.get('/getusers', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});