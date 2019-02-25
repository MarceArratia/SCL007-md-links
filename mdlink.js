const fs = require('fs');
const fetch = require("node-fetch");

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
//buscando archivo md
const testFolder = '/Users/miguel/Desktop/Trabajos Marce/Prueba/';

fs.readdir(testFolder, ( err,files) => {
  files.forEach(file => {
      if(String(file).indexOf("md") !== -1){
      console.log(file); 
                //encuentra archivos url
          let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.#?&//=]*)/gi);
         
          //regexp expresion regular
          fs.readFile('./'+file,function(err,data){
              checkUrl(data.toString().match(regex));
              
          });}
       // console.log(file);   
  });
});