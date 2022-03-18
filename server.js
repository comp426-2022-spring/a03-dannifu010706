const express = require('express')
const { json } = require('express/lib/response')
const app = express()
var port = 5000

app.get('/app/echo/:number',(req,res)=>{
    res.status(200)/json({'message':req.params.number})
})
function coinFlip() {
    return Math.random() > .5 ? ("heads") : ("tails")
  }

const server = app.listen(port,() => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
})

app.get('/app',(req,res)=> {
   res.status(200).end('OK')
   res.type('text/plain')
})
app.use(function(req,res){
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})

app.get('/app/flip',(req,res)=>{
    var flip = coinFlip
    res.status(200).json({ 'flip':coinFlip()})
})