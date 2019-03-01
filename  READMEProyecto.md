# Markdown Links Detect

## Descripción

Pequeña librería que lee y analiza archivos de tipo Markdown(.md), para verifica links que esten dentro de esos archivos y entrega algunas estadísticas.

La idea de esta librería es leer del sistema de archivos, recibir argumentos a través de la línea de comando, analizar texto, hacer consultas HTTP.

##Características

Lee solo archivos con la extensión .md
Extrae y lista todos los links que contenga el archivo
Agregando la opción --validate valida estado actual de los links encontrados
Agregando la opción --stats la salida será un texto con estadísticas básicas sobre los links.

![md-links](filtro.jpeg)

Antes de todo: 
Para el correcto funcionamiento de este proyecto necesitas tener instalado Node.js en tu computador. Para las pruebas unitarias se utilizó Jest por su simpleza.


 ## Pre-requisitos

Para comenzar debes tener instalado Node.js en tu computador.

[Instalando Node.js](https://nodejs.org/es/download/package-manager/#arch-linux)

## Para poder ejecutarlo

Para poder ejetutar esta librería, debes instalar en tu proyecto las siguientes dependecias de antemano:

File system con el comando:

 $npm install file-system --save

Node-fetch con el comando:

 $npm install node-fetch --save

 ## Guía de uso e instalación


Instala la librería con el siguiente comando con la terminal situada en el directorio de tu proyecto

$npm install index.js

Para analizar un directorio que contenga archivos .md, ejecuta el siguiente comando:

$node index.js <ruta_directorio>

Para analizar un archivo específico .md, ejecuta el siguiente comando:

$node index.js <ruta_archivo>

En ambos casos, si deseas validar funcionalidad de los links contenidos en los archivos .md, sólo debes agregar un espacio, seguido del comando "--validate". El siguiente ejemplo muestra como se efecturía la operación, situándonos en la carpeta contenedora del archivo "ejemplo_archivo_md1.md". Si estás afuera del nivel de tu archivo a analizar, simplemente entrega la ruta relativa a tu ubicación actual.

$node index.js ejemplo_archivo_md1.md --validate



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




### JavaScript API



#### `mdLinks(path, options)`

##### Argumentos


##### Valor de retorno


#### Ejemplo


### CLI (Command Line Interface - Interfaz de Línea de Comando)


## Planificación

Puede revisar la Organización en el siguiente link [Planificación.](https://github.com/MarceArratia/SCL007-md-links/issues)




### Otros recursos

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)


## Checklist

### General

- [ ] Puede instalarse via `npm install --global <github-user>/md-links`


### CLI

- [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [ ] Se ejecuta sin errores / output esperado
- [ ] Implementa `--validate`
- [ ] Implementa `--stats`

### Pruebas / tests


