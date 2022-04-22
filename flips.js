import { coinFlips, countFlips, coinFlip } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var args = require('minimist')(process.argv.slice(2));

 args["number"];
 var numberflips= coinFlips(args.number || 1) ;

console.log(numberflips);
console.log(countFlips(numberflips));