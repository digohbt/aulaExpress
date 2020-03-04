const express = require("express");
let routes = express.Router();


routes.get('/:nome', (req, res ) => {
    // let valor = req.params.nome;
    let {nome} = req.params
res.send( `ola ${nome}`)
} )


// 


 
module.exports = routes