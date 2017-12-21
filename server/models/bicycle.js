let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String, unique:true},
  password: {type: String},
  bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
  },{timestamps:true
});
mongoose.model('User', UserSchema);

let BikeSchema = mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  imageURL: {type: String, required: true },
  title: {type: String, required: true },
  description: {type: String, required: true },
  price: {type: String, required: true },
  location: {type: String, required: true }
}, {timestamps: true
});
mongoose.model('Bike', BikeSchema);
