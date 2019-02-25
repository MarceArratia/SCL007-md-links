/*module.exports = () => {
   ...
};*/

//crear funcion md-limks

console.log("Donde esta el archivo");
var stdin = process.openStdin();//captura lo que usuario escribe


stdin.addListener("data", function(d) {//agrego funcion para mostrar lo que usuario escribe
    console.log("Tu archivo esta en: " + 
        stdin.toString().trim());
  });
//probando