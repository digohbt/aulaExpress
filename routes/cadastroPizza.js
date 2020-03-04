const express = require("express");
const cardapioCoontroller = require("../controllers/cadastroControllers")
let routes = express.Router();


routes.get('/cadastrar/:pizza/:preco', (req, res ) => { 
    
    res.send("cadastro pizza")
    } )

    
routes.get('/lista', cardapioCoontroller.listarCardapio) 
    





 
module.exports = routes