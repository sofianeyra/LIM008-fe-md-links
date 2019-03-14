# Markdown Links

## Introducción de la Librería

Esta librería fue pensada para usuarios que quieran extraer links de sus archivos markdown (ya sea un solo archivo o una carpeta con muchos de ellos) y además poder realizar distintas operaciones, como validar los links para saber si estos son funcionales o no y hacer estadísticas con cadas uno de ellos, como por ejemplo sacar el total, la unicidad de cada link y si están rotos.

## Diagrama de Flujo 

Realizamos este diagrama de flujo para reconocer las posibles combinaciones que se realizarán con nuestras funciones.

![Sin titulo](src\img\diagrama.jpeg)
## Pseudocódigo
1. *evaluatePath* 
- **Ingreso:** Ruta (string).
- **Proceso:** Utiliza el método path.isAbsolute para reconocer si la ruta es absoluta.
- **Salida:** true/false (booleano).

2. *convertToAbsolutePath*
- **Ingreso:** Ruta (string).
- **Proceso:** Utilizar método path.resolve para convertir ruta relativa a absoluta.
- **Salida:** Ruta absoluta (string).

16. *IsFile*
- **Ingreso:** Ruta absoluta (string).
- **Proceso:** Utilizar método fs.lstat.isFile para reconocer si la ruta dada pertenece a un archivo.
- **Salida:** true/false (booleano).

13. *getFiles*
- **Ingreso:** Ruta absoluta (string).
- **Proceso:** Función para obtener todos los archivos de la carpeta.
- **Salida:** Array con las rutas de todos los archivos(array).

3. *verifyExtName*
- **Ingreso:** Ruta absoluta (string)
- **Proceso:** Verificar si los archivos obtenidos son extensión markdown.
- **Salida:** true/false (booleano).

5. *extractLinks*
- **Ingreso:** Ruta ansoluta archivo MD.
- **Proceso:** Usar librería Marked(marke.renderer) para obtener los links del archivo.
- **Salida:** Array de objetos con los links obtenidos.

7. *verifyLinks*
- **Ingreso:** Array de links obtenidos.
- **Proceso:** Usar librería link-check para verificar el status de los links.
- **Salida:** Objeto con status de cada link(array).

8. *calculateStats*
- **Ingreso:** Array de links obtenidos.
- **Proceso:** Evaluar el total de links, cuántos son únicos y en caso de ingresar validate y stats los links rotos o no funcionales.
- **Salida:** Objeto con las estadísticas obtenidas.

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

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no.

Por ejemplo:

```sh
$ md-links ./some/miarchivo.md --validate
./some/miarchivo.md http://algo.com/2/3/ ok 200 Link a algo
./some/miarchivo.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/miarchivo.md http://google.com/ ok 301 Google
```

Además del código de status, las palabras `ok` o `fail` sirven para identificar el status de cada link.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/miarchivo.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/miarchivo.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
