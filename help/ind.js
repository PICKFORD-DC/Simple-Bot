exports.wait = () => {
    return `⏳ Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Succes`
}

exports.err = () => {
    return `‼️Fitur Sedang Error‼️`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ‼️ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `⚠️ Harap masukkan pesan yang ingin disampaikan! ⚠️`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu* ❎`
}

exports.ownerOnly = () => {
    return `FITUR KHUSUS OWNER`
}

exports.doneOwner = () => {
    return `Succes`
}

exports.groupOnly = () => {
    return `FITUR KHUSUS GRUP`
}

exports.adminOnly = () => {
    return `FUTUR KHUSUS ADMIN`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `MINIMAL ADMIN`
}

exports.adminAlready = () => {
    return `FITUR KHUSUS ADMIN`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! `
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `
*Selamat ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 List-Menu KAYy Simple-Bot:*

🤖 *INFO*
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}donate
└──────

🧑 *OWNER*
├ > evaluate
├ $ exec
├ ${prefix}join link
├ ${prefix}setppbot (tag/send image)
└──────

⚙️ *GROUP*
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}group open/close
├ ${prefix}tagall text
├ ${prefix}hidetag text
└──────

😷 *WEEBS*
├ ${prefix}anime query
├ ${prefix}manga query
├ ${prefix}character query
└──────

🔍 *MISC*
├ ${prefix}film query
├ ${prefix}wattpad query
├ ${prefix}webtoons query
├ ${prefix}drakor query
├ ${prefix}pinterest query
└──────

🎞 *MEDIA*
├ ${prefix}toimg (tag sticker)
└──────

⬇️ *DOWNLOADER* 
├ ${prefix}tiktok link
├ ${prefix}ytdl link
├ ${prefix}ytmp3 link
├ ${prefix}ytmp4 link
├ ${prefix}ytdl link
├ ${prefix}facebook link
├ ${prefix}twitter link
├ ${prefix}instagram link
└──────

🙏 *THANKS*
├ Xfarr api
├ PickFord
├ and all support
└──────

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan ChikaBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan chika-bot
😖🙏


    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 085722156367 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

    `
}
