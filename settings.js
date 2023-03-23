/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	lannn: 'https://api.lannn.me',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.lannn.me': 'Mahiro',
}

//Ubah Disini
global.ownerNumber = ['6289601072668','','0']
global.ownerName = 'Kenzo Alvaro'
global.packname = 'Thunder Botz'
global.author = 'ThunderBotz By Deff'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'KAMU BUKAN ADMIN!',
botAdmin: 'BOT BUKAN ADMIN!',
botOwner: 'KAU BUKAN OWNER KU!',
group: 'KHUSUS GRUP!',
private: 'KHUSUS PRIVATE CHAT',
wait: 'PROSES...',
done: 'SUKSES , SEMOGA SUKA:)!'
}


//Sesuaikan
global.thumb = fs.readFileSync('./media/deff.jpg')
global.donasi = fs.readFileSync('./media/donasi.png')
global.thumbnail = fs.readFileSync('./media/deff.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
