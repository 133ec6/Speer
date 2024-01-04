
const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const mongoose = require('mongoose');


router.get('/',fetchuser,async(req,res)=>{
    try {
        var note = await Note.find({tag:req.body.tag});
        res.json(note);
    } catch (error) {
        res.status(400).send("Internal server error");
        console.log(error)
    }
})

module.exports = router