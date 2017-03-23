var User = require('../models/user.js');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {

  login: function(req, res, next) {
    User.findOne({username: req.body.username}, function(err,user){
      if(err){
        res.json(err)
      }
      else if(user){
        if(passwordHash.verify(req.body.password, user.password)){
          var token = jwt.sign({username: user.username}, process.env.SECRET, { expiresIn: '1d' });
          res.json({
            token: token,
            userid: user._id,
            username: user.username
          });
        }
      }else{
        res.send('Check Your Credentials')
      }
    })
  },

  register: function(req, res, next) {
    User.create({
      name: req.body.name,
      username: req.body.username,
      password: passwordHash.generate(req.body.password),
      email: req.body.email
    }, function (err,data) {
      if(err){
        res.json(err)
      }else{
        res.json(data)
      }
    })
  },
  verify: function(req, res, next){
    if (req.headers.token == null) {
      res.json("you don't have access")
    }else{
      if (jwt.verify(req.headers.token, process.env.SECRET)) {
        next()
      }else {
        res.json("token was expried")
      }
    }
  }
}
