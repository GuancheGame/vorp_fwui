# VORP Framework UI
> Un Framework frontend para facilitar el desarrollo de UI en VORP

## What is a VORP Framework UI?! - Que es VORP Framework UI?!
Desarrolla plugins para VORP y utiliza este FW para construir rapidamente interfaz de usuario. Permite que los diseñadores puedan modificar rapidamente el diseño desde un solo archivo de variables css global.

## How to install - Como instalar
* Download this repo
* Copy and paste `vorp_fwui` folder to `resources/[vorp_essentials]`
* Rename `vorp_fwui-main` to `vorp_fwui` <<<<<<<<<<<<< **!important**
* Add `vorp_fwui` to your `server.cfg` or `resources.cfg` file
* Now you are ready to get coding!

## How can I use this Codebase?
* Añada los siguientes enlaces de archivo en su plugins
```
<link rel="stylesheet" type="text/css" href="nui://vorp_fwui/ui/config.css">
<link rel="stylesheet" type="text/css" href="nui://vorp_fwui/ui/fw/css/style.css">
<link rel="stylesheet" type="text/css" href="nui://vorp_fwui/ui/fw/css/class.css">
<script src="nui://vorp_fwui/ui/fw/js/funtions.js"></script>
```
* Listo usted ja puede usar VORP FW UI en su plugins

## Como documentarme?
* Puedes usar VORP FW UI con el navegador web y ver los ejemplos
* En el archivo `config.css` busca la variable `--ui-developer-web: none; ` y cambiala por `--ui-developer-web: block;` Recuerda poberla en `none` cuando termines.
* Ejecuta el archivo `index.html` en tu navegador y navega por los diferentes ejemplos. 
* Revisa el código de los archivos de la carpetda `examples` para tener una idea de como desarrollar tus UI.
* Dentro de cada archivo de ejemplos html y el fw encontraras comentarios que documentan y ayudan a entender el Framework
* El archivo `config.css` es el encargado de manejar la configuración del diseño global.
* El archivo `style.css` se encarga de formatear el html. 
* El archivo `class.css` es el encargado de facilitar clases de diseños predefinidos y herramientas para el desarrollo de UI rapidamente
* Recomiendo no tocar los archivos `style.css` y `class.css`. Si nesecita hacer cambios, considere crear su propio archivo css y renombre los que quiere cambiar.

## Need More Support? 
- [Guanche Game](https://discord.gg/DHGVAbCj7N)
- [Vorp Disord](https://discord.gg/DHGVAbCj7N)

## Requirements
- [VORP](https://github.com/VORPCORE/)
