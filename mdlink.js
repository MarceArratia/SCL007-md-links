const fs = require('fs');
const fetch = require("node-fetch");
const colors = require('colors');

//UrlCheck donde esta url que queremos revisar y option que opcion quiere verificar
function checkUrl(urlCheck,option,name){
  let statsOK=0;
  let statsBad=0;
  //urls es arreglo de urls
  urls=String(urlCheck).split(',');  
  //async lo que hace esperar que termine la promesa(asincrona)
  async function fetchAll() {//await espera que se resuelva la promesa 
    const results = await Promise.all(urls.map((url) => //guardando resultado de lo que retorne la promesa,map recorre
    fetch(url).catch(function(err){//fetch valida url
   return err; 
    }).then(function(urlResp){
      //muestra el estado de url
        if(urlResp.status===200){
          return name+" "+urlResp.url+" ok ";
        }
        else{
          return name+" "+urlResp.message+" Error ";
        }
    })));

    //creando if estadisticas
    if(option==="stats"){
      for(let i=0;i<results.length;i++){
        if(i===0){
           console.log(name);//name carga que guarda nombre archivo
        }
        if(String(results[i]).indexOf("failed,") !== -1){
          statsBad++;
        }
        else{
          statsOK++
        }
      }
      console.log("Existen "+statsOK+" link buenos");
      console.log("Existen "+statsBad+" link malos");
    }else if(option==="validate"){
      console.log(results);//results arreglo que muestra nombre,url y estado
    }
  }
  fetchAll();//llama a la funcion para manejar promesa
}
//buscando ruta relativa y absoluta,path almacena la ruta que ingresa el usuario
const mdlink = function urlFilter(path,option){
    //testFolder guarda la ruta de la carpeta o el archivo ,trim quita espacios antes o despuès de la url 
    const testFolder =String(path).trim();//'/Users/miguel/Desktop/Trabajos Marce/Prueba/readme.md';
  if(String(testFolder).indexOf(".md") !== -1){//pregunta si testFolder es un archivo
              //encuentra archivos url
        let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.#?&//=]*)/gi);
        //regexp expresion regular
        //obtenemos el nombre
        let nameFile=String(path).split("/");
        fs.readFile(testFolder,function(err,data){//data información de archivo
          if(option ===  null || option === "" || option==="undefined"){
            //imprimo el nombre del archivo en la ùltima posición
            console.log(nameFile[nameFile.length-1]);//-1 para que vea la ùltima posicion del array ya que .lenght parte de 1 y array de 0
            //imprimo url, match busca considencia de expresión regular con data
            console.log(data.toString().match(regex))
          }
          else
          {
            checkUrl(data.toString().match(regex),option,nameFile[nameFile.length-1]); 
          }     
        });
      }else{//si no es archivo entonces es carpeta
        fs.readdir(testFolder, ( err,files) => {//files contiene archivos de carpeta
          files.forEach(fileObject => {//forEach recorre como el for
              if(String(fileObject).indexOf("md") !== -1){
                        //encuentra archivos url
                  let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.#?&//=]*)/gi);
                  //regexp expresion regular
                  fs.readFile('./'+fileObject,function(err,data){
                    if(option ===  null || option === "" || option==="undefined"){
                      //imprimo el nombre del archivo en la ùltima posición con fileObject 
                       console.log(fileObject);
                       //recorre archivo y busca la expresión regular
                       console.log(data.toString().match(regex))
                    }
                    else{
                      checkUrl(data.toString().match(regex),option,fileObject); 
                    }
                  });} 
          });
        });
      }
}
module.exports=mdlink;
//module.exports=globalUrl;