//module.exports = () => {
  // ...
//};
const fs = require('fs');
//regexp expresion regular
fs.readFile('./README.md',function(err,data){
  if(RegExp('([a-z0-9_-]+\.){1,2} ',data.toString())){
    console.log(data.toString());
  }
  
});
//([a-z0-9_-]+\.){1,2} 