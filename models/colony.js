const mongoose = require('mongoose');
const config = require('../config/database');

const ColonySchema = mongoose.Schema({
    name:{
        type: String
    },
    wings:{
        type: Array
    },
    distance:{
        type: Number
    },
    secretary:{
        type: String
    },
    contact:{
        type: String
    },
    sports:{
        type: Boolean
    },
    pool:{
        type: Boolean
    },
    phc:{
        type:Boolean
    }
});

const Colony = module.exports = mongoose.model('Colony',ColonySchema);

module.exports.addColony = function(newColony, callback){
    newColony.save(callback);
}


module.exports.getColonies = function(callback){
    Colony.find({},callback);
}

module.exports.getColonyById = function(id, callback){
	Colony.findById(id, callback);
}