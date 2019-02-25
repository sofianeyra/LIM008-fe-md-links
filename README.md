# Markdown Links

[Diagrama de flujo](#Diagrama-de-Flujo)

[Pseudocódigo](#Pseudocódigo)

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## Introducción

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

## Diagrama de Flujo 
![Sin titulo](src\img\diagrama.jpeg)
## Pseudocódigo
1. *evaluatePath* 
- **Ingreso:** Ruta (string).
- **Proceso:** Utilizar método path.isAbsolute para reconocer si la ruta es absoluta.
- **Salida:** true/false (booleano).

2. *transformToAbsPath*
- **Ingreso:** Ruta (string).
- **Proceso:** Utilizar método path.resolve para convertir ruta relativa a absoluta.
- **Salida:** Ruta absoluta (string).

16. *recognizeIfIsFile*
- **Ingreso:** Ruta absoluta (string).
- **Proceso:** Utilizar método fs.lstat.isFile para reconocer si es archivo.
- **Salida:** true/false (booleano).

13. *getFiles*
- **Ingreso:** Ruta absoluta (string).
- **Proceso:** Obtener todos los archivos.
- **Salida:** Array con las rutas de todos los archivos(array).

3. *getMdContent*
- **Ingreso:** Ruta absoluta MD (string)
- **Proceso:** Obtener el contenido del archivo markdown utilizando la libreria fs.readFile (con UTF)
- **Salida:** Contenido(string)

5. *convertMdToHtml*
- **Ingreso:** Contenido (string).
- **Proceso:** Usar librería Marked para convertir contenido a HTML.
- **Salida:** Contenido HTML(string).

7. *extractATagAttr*
- **Ingreso:** HTML (string)
- **Proceso:** Utilizar librería JSDOM para: obtener href y contenido de los link y meter la información dentro de un objeto.
- **Salida:** Información de los link(objeto)

8. *createArrLinkObj*
- **Ingreso:** Información de los link(objeto).
- **Proceso:** Crear array, ingresar objetos al array.
- **Salida:** Array con información de links dentro de objeto(array).

9. *extractHref*
- **Ingreso:** Array con información de links dentro de objeto(array).
- **Proceso:** Extraer href de cada objeto que está dentro del array y guardarlo en un nuevo array.
- **Salida:** Array con href de cada link.

10. *verifyLink*
- **Ingreso:** Array con href de cada link(array).
- **Proceso:** Utilizar método http para verificar si href es valido o no, guardar cada ok o fail dentro de un array.
- **Salida:** Array con status de cada link(array).

11. *addVerification*
- **Ingreso:** Array con status de cada link(array).
- **Proceso:** Introducir status de cada link dentro de array con información de links dentro de objeto(array).
- Salida: Array con información de links y status dentro de objeto (array).

12. *calculateStats*
- **Ingreso:** Array con información de links dentro de objeto o Array con informacion de links y status dentro de objeto (array).
- **Proceso:** Calcular total de links, cuantos son únicos, y en caso a que se ingrese array con status de los links entonces calcular también los links que están rotos.
- **Salida:** Array con estadísticas de total, unique y broken (array)

## Boilerplate
Estructura de archivos utilizada en este proyecto:
```
.
├── src
|   ├── models
|   |    ├── links.js
|   |    ├── stats.js
|   |    └── validate.js
|   ├── cli.js
|   └── index.js
└── test
    ├── index.spec.js
    └── 

```
#### Ejemplo de la funcionalidad de la Librería

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

### Tutoriales / NodeSchool workshoppers

- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

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
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
