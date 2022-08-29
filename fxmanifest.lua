fx_version 'adamant'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

game 'rdr3'
lua54 'yes'
version '0.0.1'
vorp_name 'VORP Framewprk UI'
vorp_github 'https://github.com/VORPCORE/vorp_zonenotify'
author '[Guanche]'

---------------- THE FILE FRAMEWOKS ----------------------------------------------
files {
    'ui/*',
    'ui/vendor/*',
    'ui/fw/*',
    'ui/fw/css/*',
    'ui/fw/js/*',
    'ui/assets/*',
    'ui/assets/fonts/*',
    'ui/assets/img/*',
}

---------------- UI PAGE EXAMPLE - PÁGINA DE EJEMPLO -----------------------------
--ui_page 'ui/index.html'--

---------------- Dependencies ----------------------------------------------------
dependencies { 
    'vorp_core'
}

---------------- EXPORT If you need ----------------------------------------------
exports {}

