/*module.exports = () => {
   ...
};*/
//#!/usr/bin/env node
//crear funcion md-links 
const mdlink=require('./mdlink.js');
//mdlink(process.argv[2],process.argv[3]);
let urlOption=[];
//mdlink(splitResult[0],splitResult[1]);
urlOption=process.argv[1].split('index.js');
//console.log(process.argv);
if(process.argv.length===3){
  mdlink(urlOption[0]+process.argv[process.argv.length-1],"");
}
else{
  mdlink(urlOption[0]+process.argv[process.argv.length-2],String(process.argv[process.argv.length-1]).substr(2));
}
//mdlink(urlOption[0]+process.argv[process.argv.length-2],String(process.argv[process.argv.length-1]).substr(2));
