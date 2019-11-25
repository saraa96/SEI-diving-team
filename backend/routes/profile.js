const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../model/User')


router.get('/:id', async(req,res)=>{
    //User.findById(req.params.id)
    try {
        var result = await User.findById(req.params.id);
        res.send({result});
    } catch (error) {
        res.send({error})
    }
  })
  router.get('/', async(req,res)=>{
      //User.findById(req.params.id)
      try {
          var result = await User.find();
          res.send({result});
      } catch (error) {
          res.send({error})
      }

      // var decoded = jwt.verify(req.body.token , 'secret')
      //  console.log(decoded);
      
      //      User.findById(decoded.user._id)
      //      .then(user => user?  res.json(decoded.user) : res.send("token is not correct"))
      //      .catch(err => res.send("err"))


      
      
    })
  router.post('/', (req,res)=>{
    //   //User.findById(req.params.id)
    //   let User = new User({
    //       name: req.body.name,
    //       email: req.body.email,
    //       bio: req.body.bio,
    //     });
    //   try {
    //       var data = await User.save()
    //       res.send({data})
    //   } catch (error) {
    //       res.send({error})
    //   }
    })

    //update
    router.put('/Edit/:id', async(req,res)=>{
      //User.findById(req.params.id)
      try {
          var result = await User.findById(req.params.id);
          res.send({result});
          User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        });
      } catch (error) {
          res.send({error})
      }
    })

    module.exports = router;