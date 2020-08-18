const express = require('express')
const router = express.Router();
const Game = require("./Game")

router.post("/game",(req, res)=>{
   var title = req.body.title;
   var body = req.body.body;
   var year = req.body.year;
   var price = req.body.price

   Game.create({
       title:title,
       body:body,
       year:year,
       price:price
   }).then(() => {
       res.sendStatus(200)
   }).catch((err)=>{
       res.sendStatus(400)
   })
})

router.get('/games',(req, res)=>{
   Game.findAll().then((games)=>{
       res.send(games)
     
    })
})

router.delete('/game/:id',(req, res)=>{
   var id = req.params.id
   console.log(id)
   Game.destroy({
       where:{
           id:id
       }
   }).then(()=>{
    res.sendStatus(200)
   })
})
module.exports = router;