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
* Download this repo
* Copy and paste `vorp_fwui` folder to `resources/[vorp_essentials]`
* Rename `vorp_fwui-main` to `vorp_fwui` <<<<<<<<<<<<< **!important**
* Add `vorp_fwui` to your `server.cfg` or `resources.cfg` file
* Now you are ready to get coding!

## Developer Tips
1. Use `PlayerPedId()` dont use `GetPlayerPed(-1)` as it is more optimal
2. If you are looking to calculate distance between coordinates. **Do not** use `GetDistanceBetweenCoords`, instead **use** with Lua math `#(vector3 - vector3)` or `Vdist2`  its much faster and optimized
3. Dont use `table.insert` USE ` tableName[#tableName+1] = useThis`
4. Control your `Citizen.CreateThread` `while true` loops with ` sleep = Wait(1000)` in the threads to control the threads tick rate (how often/fast the loop cycles)
5. Use local variables whenever you can to help reduce your scripts overall memory consumption. _Example:_ `local str = "hello"`
6. Instead of `if this ~= nil` use `if this then`. This method checks for nil and/or false at the same time
7. Check `if the player is allowed` before `checking distance` or `displaying something`. There is no need to run code if the client isn't meant to use it.. _Example:_ If you are checking a player distance that is job specific, then add/use a job check with playerjob. Perform the check before executing any other code that is dependant on it.

## Need More Support? 
- [Guanche Game](https://discord.gg/DHGVAbCj7N)
- [Vorp Disord](https://discord.gg/DHGVAbCj7N)

## Requirements
- [VORP](https://github.com/VORPCORE/)
