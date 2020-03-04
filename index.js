const express = require('express');
let  routes = require('./routes/usuarioRoute')
let cadastroPizza = require('./routes/cadastroPizza')
let app = express();

app.use("/usuarioRoute", routes);
app.use("/cardapio", cadastroPizza);


app.get("/", (req, res ) => {
    res.send("esta no site")
} )





app.listen(3000 , (req, res )=>{
    console.log("servidor rodando");
} );