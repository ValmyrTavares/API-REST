const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const connection = require("./database/database")

const Game = require("./games/Game")
const gameController = require("./games/GameController")

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    //DATABASE
    connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso")
    }).catch((err)=>{
        console.log("Houve um erro" )
    })

    app.use("/",gameController )



//ROTAS
// app.get("/games", (req, res) => {
//   res.statusCode = 200;
//   res.json(DB.games);
// });


// app.get("/games/:id", (req, res)=>{
//     var data = req.params.id
//     if(isNaN(data)){
//         res.sendStatus(400)
//     }else{
//        var id = parseInt(data)
//        var game = DB.games.find(g => g.id == id)
//        if(game != undefined){
//            res.statusCode = 200;
//            res.json(game)
//        }else{
//            res.sendStatus(404)
//        }
//     }
// })

// app.post("/game",(req,res)=>{
//    var {id, title, price, year} = req.body

//    DB.games.push({
//        id,
//        title,
//        price,
//        year
//    })
//    res.sendStatus(200)
// })


// app.delete("/game/:id",(req, res)=>{

//     if(isNaN(req.params.id)){
//         res.sendStatus(400);
//     }else{
//         var id = (parseInt(req.params.id))
//         var index = DB.games.findIndex(g => g.id == id);

//         if(index == -1){
//             res.sendStatus(404)
//         }else{
//             DB.games.splice(index, 1);
//             res.sendStatus(200)
//         }
        

//     }
// })

// app.put("/game/:id",(req, res)=>{
//     if(isNaN(req.params.id)){
//         res.sendStatus(400)
//     }else{
//         var id = parseInt(req.params.id);

//         var game = DB.games.find(g => g.id ==id)

//         if(game != undefined){
           
            
//             var{title, price, year} = req.body

//             if(title==undefined){
//                 game.title = title
//             }
//             if(price==undefined){
//                 game.price = price
//             }
//             if(year==undefined){
//                 game.year = year
//             }
//             res.sendStatus(200)
//         }else{
//             res.sendStatus(404)
//         }
//     }
// })


app.listen(8001, () => {
  console.log("api rodando");
});




// var DB = {
//     games: [
//       {
//         id: 23,
//         title: "Call of duty",
//         year: 2019,
//         price: 60,
//       },
//       {
//         id: 65,
//         title: "Sea of thieves",
//         year: 2018,
//         price: 60,
//       },
//       {
//         id: 2,
//         title: "Minecraft",
//         year: 2012,
//         price: 60,
//       },
//     ],
//   };