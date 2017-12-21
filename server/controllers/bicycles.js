var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bike = mongoose.model('Bike');

module.exports={
  register: (req,res)=>{
    console.log('hit register');
    var registered = false;
    var errors = {};
    var newUser = new User(req.body);
    newUser.save((err, savedUser)=>{
      if(err){
        if(err['errmsg'] != undefined){
          errors = "email already taken";
          res.json(errors);
        }else{
          console.log('something went wrong');
          res.json(err);
        }
      }else{
        console.log('registered a new user');
        registered = true;
        req.session.userId = savedUser._id;
        console.log(req.session.userId);
        res.json(registered);
      }
    })
  },

  login: (req,res)=>{
    console.log('hit login');
    var logMessage = {};
    var logIn = false;
    User.find({email: req.body.email}, (err, foundUser)=>{
      if(foundUser.length > 0){
        console.log('found an existing user');
        console.log(foundUser);
        if(foundUser[0].password == req.body.password){
          console.log('passwords match!');
          req.session.userId = foundUser[0]._id;
          console.log(req.session.userId);
          login = true;
          res.json(login);
        }else{
          console.log('passwords did not match!')
          logMessage = "password incorrect!";
          res.json(logMessage);
        }
      }else{
        logMessage = "email not found!";
        res.json(logMessage);
      }
    })
  },

  getCurrentUser: (req,res)=>{
    console.log('hit getCurrentUser');
    if(req.session.userId != undefined){
      User.findOne({_id: req.session.userId}, (err, loggedUser)=>{
        console.log('found a user in session');
        res.json(loggedUser);
      })
    }else{
      console.log('nobody logged in');
      res.json(err);
    }
  },

  create: (req,res)=>{
    console.log('hit create');
    var newBike = new Bike(req.body);
    newBike._user = req.session.userId;
    newBike.save((err, savedBike)=>{
      if(err){
        res.json(err);
      }else{
        res.json(savedBike);
      }
    })
  },

  getCurrentListings: (req,res)=>{
    console.log('hit getCurrentListings');
    if(req.session.userId != undefined){
      Bike.find({_user: req.session.userId}, (err, bikes)=>{
        if(err){
          console.log(err);
        }else{
          console.log(bikes);
          res.json(bikes);
        }
      })
    }else{
      console.log('nobody logged in');
      res.json(err);
    }
  },

  deleteBike: (req,res)=>{
    console.log('hit deleteBike', req.body.bikeId);
    Bike.remove({_id: req.body.bikeId}, (err, deletedBike)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        console.log(deletedBike);
        res.json(deletedBike);
      }
    })
  },

  update: (req,res)=>{
    console.log('hit update');
    Bike.findOne({_id: req.body._id}, (err, updateBike)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        console.log(updateBike);
        updateBike.imageURL = req.body.imageURL;
        updateBike.title = req.body.title;
        updateBike.description = req.body.description;
        updateBike.price = req.body.price;
        updateBike.location = req.body.location;
        updateBike.save();
        res.json(updateBike);
      }
    })
  },

  getAllListings: (req,res)=>{
    console.log('hit getAllListings');
    Bike.find().exec((err, foundListings)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('found all listings');
        res.json(foundListings);
      }
    })
  },

  contact: (req,res)=>{
    console.log('hit contact');
    User.findOne({_id: req.body.uId},(err,foundUser)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        console.log(foundUser);
        res.json(foundUser);
      }
    })
  },

  logOut: (req, res)=>{
    console.log('hit logOut');
    if(req.session.userId != undefined){
      req.session.userId = undefined;
      console.log("this is the user session state:", req.session.userId);
      res.json({currentUserSession: "this is the user session state: " + req.session.userId});
    }else{
      console.log("No current user");
      res.json({message: "No current user yet"});
    }
  },

  randomBike: (req, res)=>{
    console.log('hit randomBike');
    Bike.aggregate({$sample: {size:1}}).exec((err, foundBike)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('found questions');
        res.json(foundBike);
      }
    })
  }

}
