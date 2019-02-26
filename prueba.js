<<<<<<< HEAD
=======
/*const testFolder = '/Users/miguel/Desktop/Trabajos Marce/Prueba/';
const fs = require('fs');
>>>>>>> f70b1cbf5793394ccf71f1be8dbe7d5f3172fd30

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

<<<<<<< HEAD
let readline = require('readline');
let rl = readline.createInterface({
=======
var readline = require('readline');
var rl = readline.createInterface({
>>>>>>> f70b1cbf5793394ccf71f1be8dbe7d5f3172fd30
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
    rl.close();
})