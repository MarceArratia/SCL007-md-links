//module.exports = () => {
  // ...
//};
let regex = new RegExp("/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi");
const fs = require('fs');
//regexp expresion regular
fs.readFile('./README.md',function(err,data){
  if(data.toString().match(regex) && data.toString().match(regex).indexOf("/")){
    console.log(data.toString().match(regex));
  }
  
});
