import { coinFlip, coinFlips, flipACoin} from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var args = require('minimist')(process.argv.slice(2))
args["call"]
const call = args.call
if(call==null){
    console.log("Error: no input.")
}
else if(call!="heads"&&call!="tails"){
    console.log("Error: no Input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
else{
console.log(flipACoin(call))}
