require('dotenv').config(); // Allows us to use variables from our .env
const express = require('express');
const app = express(); // exposes specific methods from the express library

const { SERVER_PORT } = process.env;

app.use(express.json()) // parses the json on incoming requests. TOP LEVEL MIDDLEWARE

app.get('/api/friends', getFriends) // endpoint that recognizes `get` requests to `/api/friends`

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))

const friends = [ // dummy data to initially populate our FE when componentDidMount calls for our friend list
  {
    name: 'Spence',
    image: 'https://someimage'
  },
  {
    name: 'Jeordin',
    image: 'https://someOtherImg'
  }
]

/**
 * getFriends is the callback that our endpoint invokes on line 9. 
 * It takes in the request and the response and then we add a status
 * code onto our response (res.status) and then sending it off with
 * our friends list as the response.data (.send(friends))
 */

function getFriends( req, res ){
  res.status(200).send(friends)
}

/**
 * The next step would be to create an endpoint to receive the
 * post request that we want to add to our FE (react app).
 * It would look something like:
 * 
 *    app.post('/api/friend', addFriend)
 * 
 * 
 *    function addFriend( req, res ){
 *      const { name, image } = req.body
 *      friends.push( {name, image} )
 *      res.status(200).send(friends)
 *    }
 */