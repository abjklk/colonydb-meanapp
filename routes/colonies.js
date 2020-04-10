const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Colony = require('../models/colony');

router.post('/addcolony',(req, res)=>{
	let newColony = new Colony({
        name: req.body.name,
        wings: req.body.wings,
		distance: req.body.distance,
		secretary: req.body.secretary,
        contact: req.body.contact,
        sports: req.body.sports,
        pool: req.body.pool,
        phc: req.body.phc
    });

    Colony.addColony(newColony,(err, colony) =>{
        if(err){
            res.json({success: false, msg:"Failed to add Colony"});
        } else{
            res.json({success: true, msg:"Colony added successfully."});
        }
    });
});


router.get('/colony',(req, res)=>{
    Colony.getColonies((err, colonies)=>{
        res.json({colonies: colonies});
    });
});

router.post('/byid',(req, res) =>{
    const colonyId = req.body.id;
    Colony.getColonyById(colonyId,(err, colony)=>{
        res.json({colony: colony});
    });
})


module.exports = router;
