require('dotenv').config();
const express = require('express');
const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json())

app.get('/api/friends', getFriends)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))

const friends = [
  {
    name: 'Spence',
    image: 'https://someimage'
  },
  {
    name: 'Jeordin',
    image: 'https://someOtherImg'
  }
]


function getFriends( req, res ){
  res.status(200).send(friends)
}