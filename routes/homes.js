const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Home = require('../models/home');

router.post('/addhome',(req, res)=>{
	let newHome = new Home({
		hno: req.body.hno,
		owner: req.body.owner,
		colony: req.body.colony,
        wing: req.body.wing,
        floor: req.body.floor,
        size: req.body.size,
        contact: req.body.contact
    });

    Home.addHome(newHome,(err, home) =>{
        if(err){
            res.json({success: false, msg:"Failed to add Home"});
        } else{
            res.json({success: true, msg:"Home added successfully."});
        }
    });
});


router.post('/home',(req, res)=>{
    let colony = req.body.colony;
    let wing = req.body.wing; 
    Home.getHomesByColonyIdAndWing(colony,wing,(err, homes)=>{
        res.json({homes: homes});
    });
});

module.exports = router;
