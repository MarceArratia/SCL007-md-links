# Markdown Links Detect

## Descripción

Pequeña librería que lee y analiza archivos de tipo Markdown(.md), para verifica links que esten dentro de esos archivos y entrega algunas estadísticas.

La idea de esta librería es leer del sistema de archivos, recibir argumentos a través de la línea de comando, analizar texto, hacer consultas HTTP.

## Características

- Lee solo archivos con la extensión .md
- Extrae y lista todos los links que contenga el archivo
- Agregando la opción --validate valida estado actual de los links encontrados
- Agregando la opción --stats la salida será un texto con estadísticas básicas sobre los links.

![md-links](filtro.jpeg)



 ## Pre-requisitos

Debes tener instalado Node.js en tu computador.

[Instalando Node.js](https://nodejs.org/es/download/package-manager/#arch-linux)


 ## Guía de uso e instalación


Instala la librería con el siguiente comando con la terminal situada en el directorio de tu proyecto

~~~
$npm install https://github.com/MarceArratia/SCL007-md-links
~~~
Luego deben ingresar a la carpeta 
~~~
node_modules/md-links
~~~
 y colocar en la terminal el comando
 ~~~ 
 node index.js path option
 ~~~
  donde path es la ruta del directorio o archivo y option las opciones que quieren verificar: --validate y --stats.


En ambos casos, si deseas validar funcionalidad de los links contenidos en los archivos .md, sólo debes agregar un espacio, seguido del comando "--validate". El siguiente ejemplo muestra como se efecturía la operación, situándonos en la carpeta contenedora del archivo.
~~~
Ejemplo 1:

node index.js path --validate, para validar links

Ejemplo 2:

node index.js path --stats, para ver estadística
~~~

## Documentación Técnica de Librería

- [Módulos Node.js](https://docs.npmjs.com/creating-a-package-json-file)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js-Documentación oficial](https://nodejs.org/api/)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Path](https://nodejs.org/api/path.html)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)


El proyecto se subió a Github y se puede encontrar dando clik en el siguiente [link](https://github.com/MarceArratia/SCL007-md-links)


## Planificación

Puede revisar la Organización en el siguiente link [Planificación.](https://github.com/MarceArratia/SCL007-md-links/issues)


### Otros recursos

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Fetch](https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all)
- [Entendiendo promesas](https://www.youtube.com/watch?reload=9&v=UP2MrLn4ux4)
