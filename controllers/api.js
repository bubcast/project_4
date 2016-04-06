var
  User = require('../models/User.js')

module.exports = {
  index: function(req, res){
    User.find({}, function(err, users){
      if(err) return console.log(err)
      res.json(users)
    })
  },

  create: function(req, res){
    User.create(req.body, function(err, user){
      if(err) return console.log(err)
      res.json({success:true, message: "User created!", user: user})
    })
  },

  show: function(req, res){
    User.findOne({_id: req.params.id}, "name email", function(err, user){
      if(err) return console.log(err)
      res.json(user)
    })
  },

  update: function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(err, user){
      if(err) return console.log(err)
      res.json({success:true, message: "User updated!", user: user})
    })
  },

  delete: function(req, res){
    User.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) return console.log(err)
      res.json({success:true, message: "User deleted!"})
    })
  }
}