let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSeSCAN1W/`
    let res = await fetch(global.API('rey', '/api/download/tiktok', { url: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.nowatermark, '', 'Jangan Lupa Follow Ig saya @fajar.nrd', m)
}
handler.help = ['ttnowm']
handler.tags = ['downloader']
handler.command = /^ttnowm$/i
handler.limit = true
module.exports = handler
