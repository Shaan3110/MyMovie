const express = require('express');

//all module imports
const List = require('../models/List');

//middleware for token
const Userdata= require('../middleware/Userdata');


const router = express.Router();



//all beds showing route which are approved by the hospital for the user and same on the hospital side more as a history
router.get('/listing',
    Userdata,
    async (req, res) => {
        try {

            //find command returns all the rows of the database
            let listing;

            if(req.user)
            {
                listing=await Bed.find({user:req.user.id});
                console.log(listing);
                res.send({"Token type":"User",ticket:ticket});
            }
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                "errors": [{
                "value": "no-value",
                "msg": "Sorry for the inconvinience some internal server error occurred",
                "param": "no-param",
                "location": "server"
                }]
            });
        }
    });
