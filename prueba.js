/*const testFolder = '/Users/miguel/Desktop/Trabajos Marce/Prueba/';
const fs = require('fs');

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

/*var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
    rl.close();
})*/
const fetch = require("node-fetch");
const urls = [
  "https://jsonplaceholder.typicode.com/comments/1",
  "https://jsonplaceholder.typicode.com/comments/2",
  "https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch",
  "https://gf.cl"
]
let b=0;
let m=0;
async function fetchAll() {
  const results = await Promise.all(urls.map((url) => 
  fetch(url).catch(function(err){
 return err; 
  }).then(function(r){
    //console.log(r.url);
    if(r.status===200){
      return r.url+" ok";
    }
    else{
      return r.message+" malo";
    }
  })));
for(let i=0;i<results.length;i++){
  if(String(results[i]).indexOf("failed,") !== -1){
    console.log(results[i]);
    m++;
  }
  else{
    b++
  }
}
console.log("Existen "+b+" link buenos");
console.log("Existen "+m+" link malos");

}
fetchAll();
