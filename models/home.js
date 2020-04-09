const mongoose = require('mongoose');
const config = require('../config/database');

const HomeSchema = mongoose.Schema({
    hno:{
        type: String
    },
    owner:{
        type: String
    },
    colony:{
        type: String
    },
    wing:{
        type: String
    },
    floor:{
        type: Number
    },
    size:{
        type: Number
    },
    contact:{
        type: String
    }
});

const Home = module.exports = mongoose.model('Home',HomeSchema);

module.exports.addHome = function(newHome, callback){
    newHome.save(callback);
}


module.exports.getHomesByColonyId = function(colony,callback){
    Home.find({colony:colony},callback);
}


module.exports.getHomesByColonyIdAndWing = function(colony,wing,callback){
    Home.find({colony: colony, wing: wing},callback);
}