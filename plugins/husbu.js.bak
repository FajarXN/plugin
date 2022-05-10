let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
 let res = await fetch('https://x-restapi.herokuapp.com/api/random-husbu?apikey=BETA')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.link) throw 'Error!'
  await conn.sendButtonImg(m.chat, json.link, 'mas saya nih', 'Lui gmntng', 'Next', `.husbu`, m)

}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler

let koncol = global.wm