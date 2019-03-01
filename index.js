/*module.exports = () => {
   ...
};*/
//#!/usr/bin/env node
//crear funcion md-links 
const mdlink=require('./mdlink.js');
console.log("Donde esta el archivo");
var  readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
//captura el teclado hasta enter
rl.on('line', function(line){
  let arrayCapture=[];
  arrayCapture=line.split('--')
    let path=arrayCapture[0];
    let option=String(arrayCapture[1]).trim();
    mdlink(path,option);
    rl.close();
})
        
//probando