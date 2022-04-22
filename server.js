
const app = express()
var port = 5000

app.get('/app/echo/:number',(req,res)=>{
    res.status(200)/json({'message':req.params.number})
})
const server = app.listen(port,() => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
})
function coinFlip() {
    return Math.random() > .5 ? ("heads") : ("tails")
  }

function coinFlips(flips) {
    var arr = [];
    for(let i =0 ; i<flips;i++){
      arr.push(coinFlip());
    }
   return arr;
  }

  function countFlips(array) {
    let result={};
    array.forEach((item) => { 
      if(result[item]){
        result[item]++;
      }else{
        result[item]=1;
      }
    });
    return result;
   }

   function flipACoin(call) {
  
    const results = {call: '', flip: '', result: ''}
    results.call=call;
    results.flip=coinFlip();
    if(results.call==results.flip){
      results.result="win";
    }
    else{
      results.result="lose";
    }
    return results;
    }
  


app.get('/app',(req,res)=> {
   res.statusCode=200;
   res.statusMessage='OK';
   res.writeHead(res.statusCode,{'Content-Type':'text/plain'});
   res.end(res.statusCode+' '+res.statusMessage)

})
app.get('/app/flip',(req,res)=>{
    var flips = coinFlip()
    
    res.status(200).json({ 'flip':flip})
})
app.get('/app/flips/:number',(req,res)=>{
    const flips = (req.params.number)
    const coins=coinFlips(flips)
    res.status(200).json({ 'raw':coins,'summary':countFlips(coins)})
})

app.get('/app/flip/call/:call',(req,res)=>{
const calling =(req.params.call)
const coin = coinFlip()
var result ="win"
if(coin!=calling){
    result="lose"
}
res.status(200).json({"call":calling,"flip":coin,"result":result})


})
app.use(function(req,res){
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})

