//module.exports = () => {
  // ...
//};

let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
const fs = require('fs');
//regexp expresion regular
fs.readFile('./README.md',function(err,data){
    console.log(data.toString().match(regex));
});
/*console.log("Donde esta el archivo");
var stdin = process.openStdin();//captura lo que usuario escribe


stdin.addListener("data", function(d) {//agrego funcion para mostrar lo que usuario escribe
    console.log("Tu archivo esta en: " + 
        stdin.toString().trim());
  });*/
//probando