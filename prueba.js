const testFolder = '/Users/miguel/Desktop/Trabajos Marce/Prueba/';
const fs = require('fs');

fs.readdir(testFolder, ( err,files) => {
  files.forEach(file => {
      if(String(file).indexOf("md") !== -1)
        console.log(file);   
  });
});