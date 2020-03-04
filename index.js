const express = require("express");
let app = express();
let  routes = require("./routes/usuarioRoute")



app.get("/", (req, res ) => {
    res.send("esta no site")
} )

app.get("/cardapio", (req, res ) => {
    res.send("esta no cardapio")
} )

app.use("/usuarioRoute", routes)






app.listen(3000 , (req, res )=>{
    console.log("servidor rodando ");
} );

