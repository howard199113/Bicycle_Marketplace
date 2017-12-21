var Bicycles = require('./../controllers/bicycles.js');
var path = require('path');

module.exports = function(app){
  app.post('/register', Bicycles.register);
  app.post('/login', Bicycles.login);
  app.get('/randomBike', Bicycles.randomBike);

  app.get('/home', Bicycles.getCurrentUser);
  app.post('/home/create', Bicycles.create);
  app.get('/home/getCurrentListings', Bicycles.getCurrentListings);
  app.post('/home/deleteBike', Bicycles.deleteBike);
  app.post('/home/update', Bicycles.update);
  app.get('/home/getAllListings', Bicycles.getAllListings);
  app.post('/home/contact', Bicycles.contact);
  app.get('/home/logOut', Bicycles.logOut);
  app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });

}
