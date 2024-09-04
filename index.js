/*comandos
activar proy npm init --yes 
npm install express
npm install nodemon*/


const express = require("express")
const servidor = express ()
const hbs = requiere ("hbs")

servidor.set (`view engine`,`hbs`)
servidor.use(express.static(`${__dirname}/views`))
hbs.registerPortial(`menu`)
servidor.listen (90)

servidor .get ("/",(req,res)=>{
    res.status(200).render("index.hbs"),{nombre:"Diego"}

})
servidor.get("/",(req,res)=>{
        res.status(200).render("index.hbs",{nombre:"Diego Perez"})
})

servidor.get("/usuario",(req,res)=>{
    res.render("login.hbs")
})  
