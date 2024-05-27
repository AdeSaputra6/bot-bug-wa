// Silahkan Ubah Sesuka Hati Jangan Hapus Tanda ' ' agar script tidak eror.

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285925121290']
global.name = 'MUSLIM CYBER ALONE'
global.namebot = 'BOT MCA'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
/*
    tele: @PublisherNgopi2
© Sptra
*/
// Jangan Dihapus Creditnya Sebagai Tanda Ucapan Terima Kasih ðŸ˜Š