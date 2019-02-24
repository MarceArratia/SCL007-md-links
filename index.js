//module.exports = () => {
  // ...
//};
let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.#?&//=]*)/gi);
const fs = require('fs');
const fetch = require("node-fetch");
//regexp expresion regular
fs.readFile('./README.md',function(err,data){
    checkUrl(data.toString().match(regex));
    
});
function checkUrl(urlCheck){
  let url=[];
  url=String(urlCheck).split(',');  
  for(let i=0;i<url.length;i++){
    //console.log(url[i]);
   fetch(url[i]).then((function(response) {
     //console.log(response.status);
     if(response.status === 200){
      console.log(url[i]+ " Ok");
     }else{
      console.log(url[i]+ " Error");
     }
    
  })
  ).catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
  }
  

}




//crear funcion md-limks

/*console.log("Donde esta el archivo");
var stdin = process.openStdin();//captura lo que usuario escribe


stdin.addListener("data", function(d) {//agrego funcion para mostrar lo que usuario escribe
    console.log("Tu archivo esta en: " + 
        stdin.toString().trim());
  });*/
//probando