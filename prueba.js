<<<<<<< HEAD
=======
/*const testFolder = '/Users/miguel/Desktop/Trabajos Marce/Prueba/';
const fs = require('fs');

>>>>>>> f6728fad245dd2aa71941f0c3aaf3d53d4b9e136
/*const testFolder = '/Users/miguel/Desktop/Trabajos Marce/Prueba/';
const fs = require('fs');
fs.readdir(testFolder, ( err,files) => {
  files.forEach(file => {
      if(String(file).indexOf("md") !== -1)
        console.log(file);   
  });
});
let promesa = new Promise((resolve,reject)=>{
if(true){
    resolve('La operación fue un éxito');
}else{
    reject('Ocurrio un error');
}
});
 promesa
 .then((response)=>{
console.log('Response',response);
 })
 .catch((error)=>{
    console.log('Error',error);
 });
*/

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
    rl.close();
})