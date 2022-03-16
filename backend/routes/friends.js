const express = require('express');
const { accept } = require('../controllers/friends/accept');
const { reject } = require('../controllers/friends/reject');
const { send } = require('../controllers/friends/send');
const { remove } = require('../models/user.model');
const friendsRoute = express.Router();


// sending friend req api 
friendsRoute.route("/send").put(send);
// remove friend api 
friendsRoute.route("/remove-friend").put(remove);
// accept friend request \
friendsRoute.route("/accept").put(accept);
// reject friend request 
friendsRoute.route("/reject").put(reject);


module.exports = friendsRoute;