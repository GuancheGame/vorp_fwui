# VORP Framework UI
> A frontend Framework to facilitate UI development in VORP

## What is a VORP Framework UI?!
Develop plugins for VORP and use this FW to quickly build user interface. It allows designers to quickly modify the layout from a single global css variable file.

## How to install 
* Download this repo
* Copy and paste `vorp_fwui` folder to `resources/[vorp_essentials]`
* Rename `vorp_fwui-main` to `vorp_fwui` <<<<<<<<<<<<< **!important**
* Add `vorp_fwui` to your `server.cfg` or `resources.cfg` file

## How can I use this Codebase?
* Add the following file links in your plugin
```
<link rel="stylesheet" type="text/css" href="nui://vorp_fwui/ui/config.css">
<link rel="stylesheet" type="text/css" href="nui://vorp_fwui/ui/fw/css/style.css">
<link rel="stylesheet" type="text/css" href="nui://vorp_fwui/ui/fw/css/class.css">
<script src="nui://vorp_fwui/ui/fw/js/funtions.js"></script>
```
* Done you can now use VORP FW UI in your plugins

## How to document myself?
* You can use VORP FW UI with web browser and see the examples
* In the `config.css` file look for the variable `--ui-developer-web: none; ` and change it to `--ui-developer-web: block;` Remember to set it to `none` when you're done.
* Run the `index.html` file in your browser and navigate through the different examples.
* Check out the code files in the `examples` folder to get an idea of how to build your UI.
* Within each file of html examples and the fw you will find comments that document and help to understand the Framework
* The `config.css` file is in charge of handling the global layout configuration.
* The `style.css` file takes care of formatting the html.
* The `class.css` file is responsible for providing predefined layout classes and tools for rapid UI development
* I recommend not touching the `style.css` and `class.css` files. If you need to make changes, consider creating your own css file and rename the ones you want to change.

## Need More Support? 
- [Guanche Game](https://discord.gg/fjAfmVgf5B)
- [Vorp Disord](https://discord.gg/DHGVAbCj7N)

## Requirements
- [VORP](https://github.com/VORPCORE/)
