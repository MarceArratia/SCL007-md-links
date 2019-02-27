const fs = require('fs');
const fetch = require("node-fetch");

function checkUrl(urlCheck,option){
  let url=[];
  let statsOK=0;
  let statsBad=0;
  url=String(urlCheck).split(',');  
  for(let i=0;i<url.length;i++){
    //console.log(url[i]);
   fetch(url[i]).then((function(response) {
    if(option === null || option === ""){
     console.log(url[i]); 
    }
    if(option === "validate"){
      if(response.status === 200){
        console.log(url[i]+ " Ok");
       }else{
        console.log(url[i]+ " Error");
       } 
    }
    if(option === "stats"){
      if(response.status === 200){
        statsOK++;
       }else{
        statsBad++;
       } 
    }
  })
  ).catch(function(error) {
    statsBad++;
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
  }
  if(option === "stats"){
    console.log("Url correcta ", statsOK);
    console.log("Url incorrecta ", statsBad);
  }
}
//buscando archivo md,path almacena la ruta que ingresa el usuario
const mdlink = function urlFilter(path,option){
    console.log(path);
    //testFolder guarda la direccion de la carpeta,trim quita espacios antes de validate
    const testFolder =String(path).trim();//'/Users/miguel/Desktop/Trabajos Marce/Prueba/';
  if(String(testFolder).indexOf("md") !== -1){
              //encuentra archivos url
        let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.#?&//=]*)/gi);
        //regexp expresion regular
        fs.readFile(testFolder,function(err,data){
            checkUrl(data.toString().match(regex),option); 
        });
      }else{
        fs.readdir(testFolder, ( err,files) => {
          files.forEach(file => {
              if(String(file).indexOf("md") !== -1){
              console.log(file); 
                        //encuentra archivos url
                  let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.#?&//=]*)/gi);
                  //regexp expresion regular
                  fs.readFile('./'+file,function(err,data){
                      checkUrl(data.toString().match(regex),option); 
                  });}
               // console.log(file);   
          });
        });
      }
   
}
module.exports=mdlink;