/*module.exports = () => {
   ...
};*/
//#!/usr/bin/env node
//crear funcion md-links 
const mdlink=require('./mdlink.js');
<<<<<<< HEAD
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
=======
//mdlink(process.argv[2],process.argv[3]);
let urlOption=[];
//mdlink(splitResult[0],splitResult[1]);
urlOption=process.argv[1].split('index.js');
mdlink(urlOption[0]+process.argv[process.argv.length-2],String(process.argv[process.argv.length-1]).substr(2));
>>>>>>> 13dbf42679a79887722ba6c5075efad0922037dc
