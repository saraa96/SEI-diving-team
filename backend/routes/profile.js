const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Profile = require("../model/Profiles");


router.get('/:id', async(req,res)=>{
    //Profile.findById(req.params.id)
    try {
        var result = await Profile.findById(req.params.id);
        res.send({result});
    } catch (error) {
        res.send({error})
    }
  })
  router.get('/', async(req,res)=>{
      //Profile.findById(req.params.id)
      try {
          var result = await Profile.find();
          res.send({result});
      } catch (error) {
          res.send({error})
      }
    })
  router.post('/', async(req,res)=>{
      //Profile.findById(req.params.id)
      let profile = new Profile({
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio,
        });
      try {
          var data = await profile.save()
          res.send({data})
      } catch (error) {
          res.send({error})
      }
    })
    //update
    router.put('/Edit/:id', async(req,res)=>{
      //Profile.findById(req.params.id)
      try {
          var result = await Profile.findById(req.params.id);
          res.send({result});
          Profile.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        });
      } catch (error) {
          res.send({error})
      }
    })

    module.exports = router;