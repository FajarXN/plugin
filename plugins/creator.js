const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Fajar Ganz;;;'
                    + 'FN: Fajar Nurdiana\n' // full name
                    + 'ORG:⏤͟͟͞͞TEH ⏤͟͟͞͞GELAS🍃;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285223272352:+62 852-2327-2352\n' // WhatsApp ID + phone number
                    + 'nitem5.X-ABLabel:───────[  ]───────'
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Fajr gmntng', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
