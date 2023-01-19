import { 
    tiktokdl,
    tiktokdlv2 
} from '@bochilteam/scraper'
let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    await m.reply('Sek Loading...')
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    
 conn.sendButton(m.chat, 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!', `*Judul:* ${res.title}\n${res.author ? `*Pembuat Video:* ${res.author}` : '\n' }`.trim(), res.video, sgh, '𝙼𝚢 𝙶𝚒𝚝𝚑𝚞𝚋', null, null, [['Audio', '.toaudio'], ['Donasi', '.donasi'], fakes, adReply)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tt)$/i
handler.limit = true

export default handler