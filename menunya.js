/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
   * Recodr By Deff x Tatsumi
*/

//Module 
require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')
const dbog = require('../lib/Database.js')
const dbmesseg = new dbog()
var dbs = []
global.dbchatpesan = dbs

//Module Exports
module.exports = deff = async(deff, m, chatUpdate, store) => {
try {
  //console.log(m)

msg = m
  dbs.push({
  id: msg.key.id,
  msg
});

var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = deff.user.id ? deff.user.id.split(":")[0]+"@s.whatsapp.net" : deff.user.id
const isOwner = [deff.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == deff.user.id ? true : false
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mode = 'public'

if (m && m.mtype == "protocolMessage") deff.ev.emit("message.delete", m.message.protocolMessage.key);

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await deff.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)

const reply = (texto) => { deff.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, { quoted: m })}

if (m.isGroup) {
    try {
    let gchats = global.db.data.group[m.chat]
    if (typeof gchats !== 'object') global.db.data.group[m.chat] = {}
    if (gchats) {
    if (!('antilink' in gchats)) gchats.antilink = false
    if (!('antidelete' in gchats)) gchats.antidelete = false
    if (!('antiviewone' in gchats)) gchats.antiviewone = false
    } else global.db.data.group[m.chat] = {
    antilink: false,
    antidelete: false,
    antiviewone: false   
    }
    } catch (err) {
    console.error(err)
    }
}



// Antilink
if (m.isGroup && db.data.group[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return //  buat ngediem in daripada nyepam m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await deff.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
deff.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (m.isGroup && db.data.group[m.chat].antiviewone) {
    if (m.isGroup && m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
    let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    💫 *MessageType* : ${m.mtype}`
    reply(teks)
    await sleep(500)
    m.copyNForward(m.chat, true, {
       readViewOnce: true
       }, {
       quoted: mek
       }).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
    }
}

const jimp_1 = require('jimp')
async function pepe(media) {
     const jimp = await jimp_1.read(media)
     const min = jimp.getWidth()
     const max = jimp.getHeight()
     const cropped = jimp.crop(0, 0, min, max)
     return {
	img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
	preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
     }
}

if (mode == 'self') {
if (!m.key.fromMe && !isOwner) return
}

//Push command To Console
if (command) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m deff \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

switch(command) {

case 'resetdbpesan': case 'resetdb': case 'resetdatabase': {
  fs.writeFileSync('./database/mess.json', JSON.stringify([], null, 2))
  m.reply("success")
}
break;

case 'menu': case 'help': case '?': {
  let menu = `
╔════════
╠══ *OWNER MENU*
╠🈷${prefix}bc
╠🈷${prefix}bcgc
╠🈷${prefix}join
╠🈷${prefix}leave
╠🈷${prefix}block
╠🈷${prefix}unblock
╠🈷${prefix}setppbot
╠🈷${prefix}self
╠🈷${prefix}public
╠🈷${prefix}eval
╚════════
  
╔════════
╠══ *GROUP MENU*
╠🈷${prefix}antilink
╠🈷${prefix}antidelete
╠🈷${prefix}antiviewone
╠🈷${prefix}linkgroup
╠🈷${prefix}revoke
╠🈷${prefix}kick
╠🈷${prefix}add
╠🈷${prefix}promote
╠🈷${prefix}demote
╠🈷${prefix}setname
╠🈷${prefix}setdesk
╠🈷${prefix}setppgrup
╠🈷${prefix}tagall
╠🈷${prefix}hidetag
╠🈷${prefix}ephemeral
╚════════
  
╔════════
╠══ *MAKER MENU*
╠🈷${prefix}sticker
╠🈷${prefix}toimg
╠🈷${prefix}tovideo
╠🈷${prefix}toaudio
╠🈷${prefix}tomp3
╠🈷${prefix}tovn
╠🈷${prefix}togif
╠🈷${prefix}tourl
╠🈷${prefix}removebg
╠🈷${prefix}estetik
╠🈷${prefix}ktpmaker
╚════════

╔════════
╠══ *RANDOM MENU*
╠🈷${prefix}pinterest
╠🈷${prefix}wallpaper
╠🈷${prefix}quotesanime
╠🈷${prefix}wikimedia
╚════════

╔════════
╠══ *OTHER MENU*
╠🈷${prefix}delete
╠🈷${prefix}donasi
╠🈷${prefix}sewa
╠🈷${prefix}sc
╠🈷${prefix}owner
╠🈷${prefix}ping
╠🈷${prefix}menu /${prefix}help /${prefix}?
╚════════

╔════════
╠══ *DOWNLOAD MENU*
╠🈷${prefix}play
╠🈷${prefix}yts
╠🈷${prefix}ytmp3
╠🈷${prefix}ytmp4
╚════════
╔════════
╠══ *ANIME MENU*
╠🈷${prefix}umaru
╠🈷${prefix}yumeko
╠🈷${prefix}chiho
╠🈷${prefix}toukachan
╠🈷${prefix}sagiri
╠🈷${prefix}itachi
╠🈷${prefix}madara
╠🈷${prefix}asuna
╠🈷${prefix}ayuzawa
╠🈷${prefix}chitoge
╠🈷${prefix}mikasa
╠🈷${prefix}asuna
╠🈷${prefix}miku
╠🈷${prefix}nfswloli
╠🈷${prefix}nezuko
╠🈷${prefix}waifu
╠🈷${prefix}waifu2
╠🈷${prefix}yuri
╠🈷${prefix}shina
╠🈷${prefix}elaina
╚════════
  `
  let but = [
  {urlButton: {displayText: 'Source Code ♨️',url: 'https://github.com/NzrlAfndi/deffgo-Kurosaki'}}, 
  {urlButton: {displayText: 'Website 🔗',url: 'https://linktr.ee/nzrlafndi'}}, 
  {"quickReplyButton": {"displayText": "Donasi 🗂️","id": `donasi`},},
  {"quickReplyButton": {"displayText": "Owner 👦","id": "owner"},},
  {"quickReplyButton": {"displayText": "Status Bot ⌚","id": `ping`}}
  ]
  deff.sendButtonImg(m.chat, menu, global.ownerName, global.thumb, but, global.thumb)
  }
  break
case 'donasi': case 'sewa': case 'sewabot': {
  let donasi = `Scan QR Above To Donate

Rental Bot Prices :
💰 10k/week
💰 15k/month
💰 25k/year`
  let but = [{"quickReplyButton": {"displayText": "Owner 👦","id": "owner"}}]
  deff.sendButtonImg(m.chat, donasi, global.ownerName, global.donasi, but, global.donasi)
  }
  break
case 'sc': case 'sourcecode': case 'script': {
  m.reply('*Script Berasal Dari :* https://github.com/nzrlafndi/deffgo-kurosaki\n\nJangan Lupa Bintang nya!')
  }
  break
case 'owner': {
  deff.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break

//Owner Menu
case 'bcgc': case 'bcgroup': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let getGroups = await deff.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${deff.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  deff.sendMessage(i, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${deff.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  deff.sendMessage(i, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${deff.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await deff.sendButtonText(i, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${deff.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  deff.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${deff.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  deff.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${deff.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await deff.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'join': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
  m.reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await deff.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'leave': {
  if (!isOwner) return m.reply(mess.botOwner)
  await deff.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSemoga balik lagi')).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await deff.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await deff.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) return m.reply(`Kirim/m.reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await deff.downloadAndSaveMediaMessage(qmsg)
  let botNumber = await deff.user.jid
  let { img } = await pepe(media)
  await deff.query({
	tag: 'iq',
	attrs: {
	to: 6282256776431,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
		tag: 'picture',
		attrs: { type: 'image' },
		content: img
	}
	]
	})
	m.reply(`Sukses mengganti PP Bot`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  deff.public = true
  m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  deff.self = false
  m.reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

//Group Menu
case 'antilink':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.group[m.chat].antilink = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.group[m.chat].antilink = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await deff.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break

case 'antidelete':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antidelete) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.group[m.chat].antidelete = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antidelete) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.group[m.chat].antidelete = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await deff.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break

case 'antiviewone':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antiviewone) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.group[m.chat].antiviewone = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antiviewone) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.group[m.chat].antiviewone = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await deff.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break

case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await deff.groupInviteCode(m.chat)
  deff.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await deff.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await deff.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await deff.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await deff.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await deff.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return 'Text ?'
  await deff.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return 'Text ?'
  await deff.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await deff.downloadAndSaveMediaMessage(qmsg)
  let { img } = await pepe(media)
  await deff.query({
	tag: 'iq',
	attrs: {
	to: m.chat,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
	tag: 'picture',
	attrs: { type: 'image' },
    content: img
	}
	]
	})
	m.reply(`Admin telah mengganti Icon Group!`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
    }
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  deff.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  deff.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukkan value enable/disable')
  if (args[0] === 'enable') {
  await deff.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await deff.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await deff.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await deff.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await deff.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await deff.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await deff.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await deff.sendButtonText(m.chat, buttons, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break

//Maker Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await deff.downloadMediaMessage(qmsg)
  let encmedia = await deff.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await deff.downloadMediaMessage(qmsg)
  let encmedia = await deff.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  }
  break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	let remobg = require('remove.bg')
	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	hmm = await './src/remobg-' + getRandom('')
	localFile = await deff.downloadAndSaveMediaMessage(quoted, hmm)
	console.log(localFile)
	outputFile = await './src/hremo-' + getRandom('.png')
	m.reply(mess.wait)
	try {
		remobg.removeBackgroundFromImageFile({
			path: localFile,
			apiKey: apinobg,
			size: "regular",
			type: "auto",
			scale: "100%",
			outputFile
		}).then(async (result) => {
			//    console.log(result)
			console.log(`File saved to ${outputFile}`);
			await deff.sendMessage(m.chat, {
				image: fs.readFileSync(outputFile),
				caption: "success"
			}, {
				quoted: m
			})
			const base64img = result.base64img;
			await sleep(7000)
			await fs.unlinkSync(localFile)
			await fs.unlinkSync(outputFile)
		}).catch((errors) => {
			console.log(JSON.stringify(errors));
		});
	} catch (err) {
		m.reply(util.format(err))
		await fs.unlinkSync(localFile)
	}
}
break
case 'toimage': case 'toimg': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return err
  let buffer = fs.readFileSync(ran)
  deff.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await deff.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await deff.downloadMediaMessage(qmsg)
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  deff.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await deff.downloadMediaMessage(qmsg)
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  deff.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${deff.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await deff.downloadMediaMessage(qmsg)
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  deff.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  }
  break
case 'togif': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await deff.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await deff.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
case 'swm': case 'wm': case 'take': case 'colong': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  if (!text) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  if (!text.includes('|')) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  m.reply (mess.wait)
  if (/image/.test(mime)) {
  let media = await deff.downloadMediaMessage(qmsg)
  let encmedia = await deff.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if (qmsg.seconds > 11) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  let media = await deff.downloadMediaMessage(qmsg)
  let encmedia = await deff.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else {
  m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  }
  }
  break

//Random Menu
case 'pinterest': {
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  deff.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  deff.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  }
  break
case 'quotesanime': {
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  deff.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  }
  break
case 'wikimedia': {
  if (!text) return 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  deff.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break

//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `---- Youtube Downloader -----
  
📄 Judul : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP4
📮 Resolusi : ${args[1] || '360p'}`
  deff.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('../lib/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `*------ Youtube Downloader -----*

📄 Title : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP3
📮 Resolusi : ${args[1] || '128kbps'}`
  deff.sendImage(m.chat, media.thumb, caption, m)
  deff.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
  }
  break
case 'yts': case 'ytsearch': {
  m.reply(mess.wait)
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  deff.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
  }
  break
case 'play':
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
*📄 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*👨‍🎤 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  deff.sendMessage(m.chat, buttonMessage, { quoted: m })
  break
//Anime
case 'sagiri': case 'itachi': case 'miku': case 'asuna': case 'umaru':
         m.reply(mess.wait)
         let lannn = await getBuffer(api('lannn', `/api/anime/${command}?`, {}, 'apikey'))
         var butlan = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
         deff.sendMessage(m.chat, { image: lann, caption:`Source Code https://api.lannn.me/anime`, buttons: butlan }, { quoted:m })
         break
         case 'yumeko': case 'toukachan': case 'nfswloli': case 'waifu': case 'waifu2':
         m.reply(mess.wait)
         let yumeko = await getBuffer(api('lannn', `/api/anime/${command}?`, {}, 'apikey'))
         var butyu = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
         deff.sendMessage(m.chat, { image: yumeko, caption:`Source Code https://api.lannn.me/anime`, buttons: butyu }, { quoted:m })
         break
         case 'yuri': case 'elaina': case 'nezuko': case 'mikasa': case 'chitoge': case 'shina': case 'madara': case 'ayuzawa': case 'chiho':
          m.reply(mess.wait)
         let elaina = await getBuffer(api('lannn', `/api/anime/${command}?`, {}, 'apikey'))
         var butel = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
         deff.sendMessage(m.chat, { image: elaina, caption:`Source Code https;//api.lannn.me/anime`, buttons: butel }, { quoted:m })
         break

case 'rikagusriani':
 m.reply(mess.wait)
//Kalo Mau Jaddin Satu Tinggal Nmbah case 'nama': kebawah/ke samping nama case sesuaiin sama di api di link nya bukan di nama fiturnya
let asupan = await getBuffer(api('lannn', `/api/asupan/${command}`, {}, 'apikey'))
//var but buat button biar bisa lanjutin hasil tanpa perlu command .asupan dll lagi tinggal pencet button nya aja
//Kalau mau nambah button di case lain sama kaya let kalo udh kepake 1 kali jgn dipake lagi
//contoh ini kan var butas nah kata butas jgn dipske lagi cuman 1 kali doang kaya let
//terus kalau mau ganti nama var butas di sendmessge juga diganti kan itu ada buttons: butas nah butasnya diganti sama nama baru
//misal var kon nah sendMessage nya juga ganti jadi buttons: kon
var butas = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]      
deff.sendMessage(m.chat, { video: asupan, caption:`Source Code https;//api.lannn.me/anime`, buttons: butas }, { quoted:m })
 break  
//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
//  m = String(err)
  m.reply(require('util').format(err));
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
    
  } catch (err) {
    console.log("error di bagian menunya.js "+util.format(err))
//  m.reply(util.format(err))
  }

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
