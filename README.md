# VORP Development Boilerplate
> A helpful template/starting place for developers to make Lua scripts from.

## What is a Boilerplate?!
A Boilerplate, this boilerplate, is a simple template script with a plethora of  definitions, examples, tutorials, and more. The goal being to get any programmer building scripts with VORP as quickly and easily as possible.

## How to install
* Download this repo
* Copy and paste `boilerplate` folder to `resources/boilerplate`
* Rename `resources/boilerplate` to `resources/<YOUR_RESOURCE_NAME>` <<<<<<<<<<<<< **!important**
* Add `ensure <YOUR_RESOURCE_NAME>` to your `server.cfg` file
* Now you are ready to get coding!

## How can I use this Codebase?
    1. Use this to learn
    2. Remove what you don't want to use and use this as your scripts base. <<<<<<<<<<<<< **!important**
    3. Use this as a reference resource
    4. Use this to standardize your code with ours
    5. Use this code as you please

## What do I do after I save my code?
You can refresh your script via server live console, f8, or terminal.
`/refresh <YOUR_RESOURCE_NAME>`

If all else fails, restart your server entirely.

## Developer Tips
1. Use `PlayerPedId()` dont use `GetPlayerPed(-1)` as it is more optimal
2. If you are looking to calculate distance between coordinates. **Do not** use `GetDistanceBetweenCoords`, instead **use** with Lua math `#(vector3 - vector3)` or `Vdist2`  its much faster and optimized
3. Dont use `table.insert` USE ` tableName[#tableName+1] = useThis`
4. Control your `Citizen.CreateThread` `while true` loops with ` sleep = Wait(1000)` in the threads to control the threads tick rate (how often/fast the loop cycles)
5. Use local variables whenever you can to help reduce your scripts overall memory consumption. _Example:_ `local str = "hello"`
6. Instead of `if this ~= nil` use `if this then`. This method checks for nil and/or false at the same time
7. Check `if the player is allowed` before `checking distance` or `displaying something`. There is no need to run code if the client isn't meant to use it.. _Example:_ If you are checking a player distance that is job specific, then add/use a job check with playerjob. Perform the check before executing any other code that is dependant on it.

## Userful Links
- VOPR API: http://docs.vorpcore.com:3000/
- RDR3 Natives: https://github.com/alloc8or/rdr3-nativedb-data
- RDR3 Discoveries: https://github.com/femga/rdr3_discoveries/tree/master/objects
- Text Colors: 
  - ![image](https://user-images.githubusercontent.com/10902965/172110101-05692221-d45a-48e4-aa09-5051af80fc95.png)
  - ![image](https://user-images.githubusercontent.com/10902965/172110125-636ae24a-f72c-4164-b422-ecbc0753de52.png)  
- Native Fonts:
  - ![image](https://user-images.githubusercontent.com/10902965/172110151-1cc840c4-fac9-4d46-af66-bcaa6759c15b.png)
- UI Textures: https://rdodlc.com/2019_09_frontier_pursuits/hd_0.rpf/hd/textures/ui_textures/inventory_items/

## Control Hashes

### Keys
| Key      | Hash |
| :---        |    :----:   |
| A      | 0x7065027D       |
| B   | 0x4CC0E2FE        |
| C   | 0x9959A6F0        |
| D   | 0xB4E465B4        |
| E   | 0xCEFD9220        |
| F   | 0xB2F377E8        |
| G   | 0x760A9C6F        |
| H   | 0x24978A28        |
| I   | 0xC1989F95        |
| J   | 0xF3830D8E        |
| L   | 0x80F28E95        |
| M   | 0xE31C6A41        |
| N   | 0x4BC9DABB        |
| O   | 0xF1301666        |
| P   | 0xD82E0BD2        |
| Q   | 0xDE794E3E        |
| R   | 0xE30CD707        |
| S   | 0xD27782E3        |
| U   | 0xD8F73058        |
| V   | 0x7F8D09B8        |
| W   | 0x8FD015D8        |
| X   | 0x8CC9CD42        |
| Z   | 0x26E9DC00        |

### Symbol Keys
| Key      | Hash |
| :---        |    :----:   |
| RIGHTBRACKET     | 0xA5BDCD3C       |
| LEFTBRACKET   | 0x430593AA        |

### Mouse Buttons
| Key      | Hash |
| :---        |    :----:   |
| MOUSE1     | 0x07CE1E61       |
| MOUSE2   | 0xF84FA74F        |
| MOUSE3   | 0xCEE12B50        |
| MWUP   | 0x3076E97C        |

### Modifier Keys
| Key      | Hash |
| :---        |    :----:   |
| CTRL     | 0xDB096B85       |
| TAB   | 0xB238FE0B        |
| SHIFT   | 0x8FFC75D6        |
| SPACEBAR   | 0xD9D0E1C0        |
| ENTER     | 0xC7B5340A       |
| BACKSPACE   | 0x156F7119        |
| LALT   | 0x8AAA0AD4        |
| DEL   | 0x4AF4D473        |
| PGUP     | 0x446258B6       |
| PGDN   | 0x3C3DD371        |

### Function Keys
| Key      | Hash |
| :---        |    :----:   |
| F1      | 0xA8E3F467       |
| F4   | 0x1F6D95E5        |
| F6   | 0x3C0A40F2        |

### Number Keys
| Key      | Hash |
| :---        |    :----:   |
| NUM_1     | 0xE6F612E4       |
| NUM_2   | 0x1CE6D9EB        |
| NUM_3   | 0x4F49CC4C        |
| NUM_4   | 0x8F9F9E58        |
| NUM_5     | 0xAB62E997       |
| NUM_6   | 0xA1FDE2A6        |
| NUM_7   | 0xB03A913B        |
| NUM_8   | 0x42385422        |


### Arrow Keys
| Key      | Hash |
| :---        |    :----:   |
| ARROW_DOWN     | 0x05CA7C52       |
| ARROW_UP   | 0x6319DB71        |
| ARROW_LEFT   | 0xA65EBAB4        |
| ARROW_RIGHT   | 0xDEB34313        |

## Need More Support? 
- [Vorp Disord](https://discord.gg/DHGVAbCj7N)

## Requirements
- [VORP-Core](https://github.com/VORPCORE/VORP-Core/releases)
