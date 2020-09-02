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
   
   Game.destroy({
       where:{
           id:id
       }
   }).then(()=>{
    res.sendStatus(200)
   })
})



router.get("/game/:id",(req, res)=>{
    var id = req.params.id
    Game.findByPk(id).then(games =>{
        return res.send(games)
      //  res.sendStatus(200)
    }).catch((err)=>{
        console.log("Não foi possivel graças ao erro " + err)
    })
})

router.put('/game/:id',(req, res)=>{
 
  
        var id = parseInt(req.params.id)
    
        console.log(req.body)
        var title = req.body.title;
        var body = req.body.body;
        var year = req.body.year;
        var price = req.body.price
    Game.update({title:title, body:body, year:year, price:price},{
        where:{ 
            id:id
        }
    }).then(()=>{
        console.log(req.body)
        res.sendStatus(200)
       
    }).catch((err)=>{
      console.log(err)
    })

})

 
router.get("/game/:id",(req, res)=>{
    var id = req.params.id
    Game.findByPk(id).then(poesias =>{
        res.send(poesias)
        res.sendStatus(200)
    }).catch((err)=>{
        console.log("Não foi possivel")
    })
})



module.exports = router;



// router.put("/game/:id",(req,res)=>{
//     if(isNaN(req.params.id)){
//         res.sendStatus(400)
//     }else{
//         var id = parseInt(req.params.id)

//     var title = req.body.title;
//     var body = req.body.body;
//     var year = req.body.year;
//     var price = req.body.price
//         Game.update({title:title, body:body, year:year, price:price},{
//             where:{
//                 id:id
//             }
//         }).then(()=>{
//             res.send(games)
//             res.sendStatus(200)
//         }).catch((err)=>{
//             console.log("Deu ruim " + err)
//         })

//     }
// })