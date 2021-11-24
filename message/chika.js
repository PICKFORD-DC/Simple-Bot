"use strict";

//Module
const { 
    downloadContentFromMessage
 } = require("@adiwajshing/baileys-md");
const fs = require("fs");
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const xfar = require('xfarr-api');

//Library
const { color, bgcolor } = require("../lib/color");
const { ind } = require('../help/')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, convert, convertGif, convertSticker } = require("../lib/myfunc");
const setting = JSON.parse(fs.readFileSync('./config.json'));
let {
    ownerNumber,
    botName
} = setting

moment.tz.setDefault("Asia/Jakarta").locale("id");
     
module.exports = async(chika, msg, m) => {
    try {
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM/YY HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const fromMe = msg.key.fromMe
	const from = msg.key.remoteJid
	const type = Object.keys(msg.message)[0]
        const content = JSON.stringify(msg.message)
        const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : ''
        if (chika.multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.,\/\\©^]/gi) : '#'
        } else {
            if (chika.nopref){
                prefix = ''
            } else {
                prefix = chika.prefa
            }
        }
	const args = chats.split(' ')
	const command = chats.toLowerCase().split(' ')[0] || ''
        const isGroup = msg.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
        const pushname = msg.pushName
        const isCmd = command.startsWith(prefix)
        const q = chats.slice(command.length + 1, chats.length)
        const body = chats.startsWith(prefix) ? chats : ''
        const botNumber = chika.user.id.split(':')[0] + '@s.whatsapp.net'
        const groupMetadata = isGroup ? await chika.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(sender) || false
        const isOwner = ownerNumber.includes(sender)

	const isUrl = (uri) => {
	    return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
	}
        const jsonformat = (json) => {
            return JSON.stringify(json, null, 2)
        }

        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedMsg = (type == 'extendedTextMessage')
        const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
        const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        (function(_0x2c6ee9,_0x252f99){function _0x3e8d49(_0x46f43f,_0x4e8f60,_0x153029,_0x70db90){return _0x1f96(_0x46f43f-0x5e,_0x153029);}function _0x5f3a24(_0x5b4cd7,_0x24a2ff,_0x1b165c,_0xb93b4c){return _0x1f96(_0x5b4cd7-0x153,_0xb93b4c);}const _0x414d81=_0x2c6ee9();while(!![]){try{const _0x2dda22=parseInt(_0x5f3a24(0x2f0,0x30c,0x2d6,0x2d9))/(0x20e8+0x22*-0x3b+-0x2c9*0x9)+parseInt(_0x3e8d49(0x1f8,0x208,0x21a,0x202))/(0x1*-0x13ff+0xe7d+0x584)*(-parseInt(_0x5f3a24(0x2f3,0x2ff,0x2e7,0x2e1))/(0x683*-0x1+0x2*0x1279+-0x1e6c))+-parseInt(_0x5f3a24(0x307,0x2e8,0x2dd,0x2f8))/(0x78d+-0x11bd+-0x51a*-0x2)+parseInt(_0x5f3a24(0x339,0x321,0x344,0x33e))/(-0x1*0x21d8+0x1*-0x1cd5+0x3eb2)*(-parseInt(_0x3e8d49(0x217,0x241,0x1f5,0x1ea))/(-0x295*0xd+0x198b*-0x1+0xae*0x57))+parseInt(_0x3e8d49(0x1fa,0x1d7,0x210,0x1c8))/(0x669*-0x5+-0xe51+-0x2e65*-0x1)+parseInt(_0x5f3a24(0x323,0x351,0x2ff,0x334))/(0xc16+-0x5c3+-0x219*0x3)+parseInt(_0x5f3a24(0x2f5,0x30d,0x2fa,0x2ec))/(0x7a7*0x5+-0x1*0x1a06+0x30d*-0x4);if(_0x2dda22===_0x252f99)break;else _0x414d81['push'](_0x414d81['shift']());}catch(_0x34e684){_0x414d81['push'](_0x414d81['shift']());}}}(_0x56a9,-0x1e0e*-0x3a+-0x5f5ea+0xa8da6));function _0x1f96(_0x4de145,_0x15be18){const _0x55140b=_0x56a9();return _0x1f96=function(_0x23bfea,_0x53712b){_0x23bfea=_0x23bfea-(-0x26dc+-0x31a+-0x9d*-0x47);let _0x1e69b2=_0x55140b[_0x23bfea];if(_0x1f96['XoXZMi']===undefined){var _0x566046=function(_0x277413){const _0x3e701d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3441a3='',_0x4a5606='',_0x420502=_0x3441a3+_0x566046;for(let _0x164365=0x9a7*0x4+0x134f+0x1*-0x39eb,_0x36f140,_0x1090db,_0x24731d=0x1bab+0xc90+0x3*-0xd69;_0x1090db=_0x277413['charAt'](_0x24731d++);~_0x1090db&&(_0x36f140=_0x164365%(0x1*0x1a9d+-0x1*-0x30a+-0x1da3)?_0x36f140*(0x2465+0xeff+-0x1992*0x2)+_0x1090db:_0x1090db,_0x164365++%(-0x1d*0x11b+-0x4e8*0x6+0x1*0x3d83))?_0x3441a3+=_0x420502['charCodeAt'](_0x24731d+(-0x18b9+0x1e2f+-0x4*0x15b))-(-0x6*-0x3+0xf1*0x27+0x199*-0x17)!==-0x6*-0x41c+-0x244a+0xba2?String['fromCharCode'](0x1b88*0x1+0xe*-0x1df+-0x57&_0x36f140>>(-(0x34d+0x13fa+0x25*-0xa1)*_0x164365&-0xc6f*-0x3+-0x2638+0xf1*0x1)):_0x164365:0x2591+0x1311+-0x1*0x38a2){_0x1090db=_0x3e701d['indexOf'](_0x1090db);}for(let _0x2cc45c=-0xa26+0x160e*-0x1+0x2034,_0x276338=_0x3441a3['length'];_0x2cc45c<_0x276338;_0x2cc45c++){_0x4a5606+='%'+('00'+_0x3441a3['charCodeAt'](_0x2cc45c)['toString'](-0x5a9+-0x3*-0x4cf+-0x2*0x45a))['slice'](-(0x3*0x8fe+0x9*0x34b+-0x389b));}return decodeURIComponent(_0x4a5606);};_0x1f96['uyPHtt']=_0x566046,_0x4de145=arguments,_0x1f96['XoXZMi']=!![];}const _0x5995bf=_0x55140b[-0x599+-0x244f+0x29e8],_0x1f8c37=_0x23bfea+_0x5995bf,_0x4266a2=_0x4de145[_0x1f8c37];if(!_0x4266a2){const _0x2ea5ba=function(_0xf7658b){this['JJNTnU']=_0xf7658b,this['vzXWkV']=[0x117*0x9+-0x1*-0xbff+0x1*-0x15cd,0x1eed+0x1faa+-0x3e97,0x718*0x4+-0x1b36+-0x2*0x95],this['QsDLFT']=function(){return'newState';},this['fSjCMZ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['mNZbdK']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2ea5ba['prototype']['RNyOVr']=function(){const _0x4cc5a7=new RegExp(this['fSjCMZ']+this['mNZbdK']),_0x488409=_0x4cc5a7['test'](this['QsDLFT']['toString']())?--this['vzXWkV'][-0xc4*0x1f+-0x1a34+0x31f1]:--this['vzXWkV'][-0x1*-0x700+0xb7*-0x26+-0xb2*-0x1d];return this['vuHIDP'](_0x488409);},_0x2ea5ba['prototype']['vuHIDP']=function(_0x3606f6){if(!Boolean(~_0x3606f6))return _0x3606f6;return this['FootJa'](this['JJNTnU']);},_0x2ea5ba['prototype']['FootJa']=function(_0x5e7097){for(let _0x4cbdcb=0x15a+0x61*0x1d+-0x27*0x51,_0x57d047=this['vzXWkV']['length'];_0x4cbdcb<_0x57d047;_0x4cbdcb++){this['vzXWkV']['push'](Math['round'](Math['random']())),_0x57d047=this['vzXWkV']['length'];}return _0x5e7097(this['vzXWkV'][-0xe71*0x1+-0x1025+0x1e96]);},new _0x2ea5ba(_0x1f96)['RNyOVr'](),_0x1e69b2=_0x1f96['uyPHtt'](_0x1e69b2),_0x4de145[_0x1f8c37]=_0x1e69b2;}else _0x1e69b2=_0x4266a2;return _0x1e69b2;},_0x1f96(_0x4de145,_0x15be18);}const _0x31dcd0=(function(){let _0x125d03=!![];return function(_0x1cf09d,_0x17ed70){const _0x37b28e=_0x125d03?function(){function _0x4cde4f(_0xaf2977,_0x5a3ac7,_0x142277,_0x775001){return _0x1f96(_0xaf2977- -0x2a1,_0x5a3ac7);}if(_0x17ed70){const _0x2ceb1c=_0x17ed70[_0x4cde4f(-0xd6,-0xcb,-0xb2,-0xb4)](_0x1cf09d,arguments);return _0x17ed70=null,_0x2ceb1c;}}:function(){};return _0x125d03=![],_0x37b28e;};}());function _0x4270aa(_0x4016b3,_0x13ee0a,_0x3ef6c2,_0xeaf907){return _0x1f96(_0xeaf907-0xa2,_0x13ee0a);}function _0x56a9(){const _0x29b807=['ntu1mtC5nM9rwNfyDa','v1PNyNq','sMThDeO','CMv0DxjUicHMDq','BwvZC2fNzq','mteZmZCWsurey1v1','kcGOlISPkYKRkq','DhjHy2u','y1vtCfO','DMLKzw9nzxnZyq','BvL4rha','ANHHBLe','Dg9tDhjPBMC','DwDKwMi','EMLqtKq','v3zOrg8','zxH0zw5Kzwruzq','qwj4r3u','y29Uy2f0','rLLkt1C','uLfJt2O','zxfct3e','EhrnzxnZywDL','yxbWBhK','v2XJzM8','ChjVDg90ExbL','zuT2uwC','B05zD2i','mteYmtKXmLDwt055rW','y29UC29Szq','t0v5EMC','DhzAqKq','CgH6rfi','CxvVDgvKtwvZCW','CwLRwNi','AKTQzeu','ywDL','BK54re8','yMLUza','wgHxz2y','vw5yq1e','u0fpzMW','EevgAgq','DxHtuNG','EevnBKi','yxvKAw9nzxnZyq','z0Tkz0u','BMHhwei','y3rVCIGICMv0Dq','sMTmvMm','mtbnrKTyANe','Cef3vNK','wNfqD28','Cw5rCgO','CNHfBhK','EuTxrg4','t09sBeW','CurSuwG','zxHJzxb0Aw9U','CM4GDgHPCYiPka','qKzMA2i','BMTqENO','Ew5J','DMLKzw8','quvRreC','swXhwuW','vMHtr1C','Aw5MBW','r29utxG','yxvKAw8','uw55vLy','wKnpBwy','wLbwA1e','yNfOue0','tNnOtwy','DhLJALK','ntGWmLrjqNz1AG','DgfIBgu','nZGWnZeXnfbhzxjkDW','mteYnJy5nejoqKHxBa','r29jBha','BwjOALK','mta4owDfz3fPta','v1bYBKy','nZu5ndi2m2TgthbTzq','BgvUz3rO','zxjYB3i','y29UDgv4DeLUzG','y29UC3rYDwn0BW','D2vmC3a','C2vHCMnO','sgnos3i','rKfpBfK','Dw5KzwzPBMvK','sLfpuwG','E30Uy29UC3rYDq','tenYywe','D2fYBG','vvbKuxq','BMn0Aw9UkcKG','Aw1Hz2u','Bg9N'];_0x56a9=function(){return _0x29b807;};return _0x56a9();}const _0x474102=_0x31dcd0(this,function(){const _0x41fce3={};function _0x1d2b53(_0x4abd10,_0x49e208,_0x582fb2,_0x24d23c){return _0x1f96(_0x582fb2-0x3e6,_0x24d23c);}_0x41fce3[_0x1b87f7(0x383,0x35e,0x36f,0x371)]=_0x1b87f7(0x380,0x39f,0x373,0x3a4)+'+$';const _0x5dfc99=_0x41fce3;function _0x1b87f7(_0x2b3915,_0x226100,_0x3f4e0c,_0x588ab9){return _0x1f96(_0x3f4e0c-0x1b9,_0x2b3915);}return _0x474102[_0x1d2b53(0x5bb,0x59e,0x5a6,0x5ae)]()[_0x1d2b53(0x599,0x561,0x58e,0x5c0)](_0x5dfc99[_0x1b87f7(0x398,0x379,0x36f,0x39d)])['toString']()['constructo'+'r'](_0x474102)[_0x1b87f7(0x37d,0x369,0x361,0x361)](_0x1d2b53(0x5be,0x5c0,0x5a0,0x57f)+'+$');});_0x474102();const _0x486d40=(function(){const _0x5ae985={};function _0x372ebd(_0x126544,_0x16700c,_0x2bbba9,_0x499a70){return _0x1f96(_0x2bbba9- -0x37,_0x16700c);}function _0x4cc028(_0x558ca7,_0x9c88ee,_0x2469d3,_0x3da07f){return _0x1f96(_0x2469d3-0x72,_0x9c88ee);}_0x5ae985[_0x4cc028(0x22d,0x25d,0x241,0x270)]=function(_0x6119e0,_0x4734a3){return _0x6119e0!==_0x4734a3;},_0x5ae985[_0x4cc028(0x294,0x298,0x26c,0x290)]=_0x372ebd(0x19d,0x18c,0x1b3,0x1e4),_0x5ae985[_0x372ebd(0x1d3,0x1a4,0x1a7,0x1af)]=_0x4cc028(0x25c,0x230,0x254,0x25e),_0x5ae985[_0x372ebd(0x16f,0x166,0x195,0x186)]=_0x372ebd(0x142,0x160,0x15f,0x15c),_0x5ae985[_0x4cc028(0x235,0x242,0x23a,0x20a)]=function(_0x5b0eea,_0x2d6e6f){return _0x5b0eea===_0x2d6e6f;},_0x5ae985[_0x4cc028(0x231,0x275,0x248,0x272)]='eKUrw';const _0x53103e=_0x5ae985;let _0xed4b75=!![];return function(_0x22d64e,_0x330ffe){function _0x5af400(_0x1fa815,_0x52097e,_0x3f5a46,_0x4fdf7f){return _0x372ebd(_0x1fa815-0x45,_0x1fa815,_0x3f5a46-0x3df,_0x4fdf7f-0xda);}function _0x4b4429(_0x2058ba,_0x1f3169,_0x1ae095,_0x560eef){return _0x372ebd(_0x2058ba-0x10e,_0x1ae095,_0x2058ba- -0x33d,_0x560eef-0x133);}const _0x1322b3={'WZgbt':function(_0x5b293e,_0x9e0454){function _0x49ec87(_0x5b2025,_0x7bece4,_0x44f9ff,_0x4493a6){return _0x1f96(_0x5b2025-0x167,_0x4493a6);}return _0x53103e[_0x49ec87(0x336,0x330,0x305,0x335)](_0x5b293e,_0x9e0454);},'FAOlY':_0x53103e[_0x5af400(0x5a3,0x5ca,0x5a2,0x575)],'OEyzg':_0x53103e[_0x4b4429(-0x196,-0x169,-0x1b5,-0x164)],'AbxGu':_0x5af400(0x55b,0x599,0x56a,0x570),'UnXCQ':_0x53103e[_0x5af400(0x5a3,0x558,0x574,0x581)],'tycjY':'(((.+)+)+)'+'+$'};if(_0x53103e[_0x5af400(0x590,0x567,0x570,0x596)](_0x53103e[_0x4b4429(-0x19e,-0x16d,-0x16b,-0x1c8)],_0x53103e['qikZr'])){const _0x4b455b=_0xed4b75?function(){function _0x5bbff4(_0x391a4d,_0xb52bbb,_0x4f6b5a,_0x3298ae){return _0x5af400(_0xb52bbb,_0xb52bbb-0x1c2,_0x391a4d- -0x33e,_0x3298ae-0x162);}function _0x79c2e2(_0x2b566d,_0x4bcf49,_0x29999d,_0x3cd756){return _0x5af400(_0x29999d,_0x4bcf49-0x7a,_0x3cd756- -0xe1,_0x3cd756-0xe6);}if(_0x1322b3['WZgbt'](_0x1322b3[_0x79c2e2(0x473,0x45d,0x479,0x471)],_0x1322b3[_0x79c2e2(0x4be,0x4b6,0x4ae,0x499)])){if(_0x330ffe){if(_0x1322b3[_0x5bbff4(0x21f,0x1f2,0x209,0x210)](_0x1322b3[_0x5bbff4(0x22f,0x235,0x21e,0x21c)],_0x1322b3[_0x5bbff4(0x246,0x21f,0x25c,0x277)])){const _0x273bda=_0x330ffe['apply'](_0x22d64e,arguments);return _0x330ffe=null,_0x273bda;}else{const _0x29c6b9=_0x33b709?function(){function _0x29ec7d(_0x488064,_0xd49517,_0x8b726c,_0x4c2360){return _0x79c2e2(_0x488064-0x143,_0xd49517-0xc8,_0xd49517,_0x488064- -0x358);}if(_0x5d3773){const _0x4807a0=_0x17147f[_0x29ec7d(0x13a,0x15f,0x14a,0x10c)](_0x4d64bb,arguments);return _0x53785d=null,_0x4807a0;}}:function(){};return _0x4377e8=![],_0x29c6b9;}}}else _0x5995bf=_0x1f8c37[_0x5bbff4(0x230,0x23b,0x219,0x24f)]([_0x4266a2,_0x277413]);}:function(){};return _0xed4b75=![],_0x4b455b;}else return _0x228368[_0x4b4429(-0x1b4,-0x1c6,-0x1a1,-0x1c4)]()[_0x5af400(0x535,0x56a,0x550,0x530)](_0x1322b3[_0x4b4429(-0x1db,-0x1c7,-0x1e4,-0x1c5)])[_0x4b4429(-0x1b4,-0x1b4,-0x18b,-0x1ab)]()['constructo'+'r'](_0x514ace)[_0x4b4429(-0x1cc,-0x1a1,-0x1cb,-0x1ca)](_0x1322b3[_0x5af400(0x544,0x51e,0x541,0x55f)]);};}()),_0x2e4f1f=_0x486d40(this,function(){const _0x3ff3d1={'cUSpZ':function(_0x19161b,_0x268ed3){return _0x19161b(_0x268ed3);},'GoIlp':function(_0x552331,_0x146db6){return _0x552331+_0x146db6;},'uxSRx':_0x220f25(-0xba,-0xa8,-0xcd,-0xaa)+_0x220f25(-0xde,-0xe8,-0xd3,-0x102),'mbhjY':_0x220f25(-0xcf,-0xa6,-0xd7,-0xce)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','zOmTB':function(_0x316a53){return _0x316a53();},'NshMf':_0x2763b0(-0x13f,-0x108,-0x124,-0x10e),'phzDR':_0x220f25(-0xf5,-0xf9,-0xd5,-0xf7),'XhWgf':_0x220f25(-0x99,-0x6d,-0x8d,-0x79),'ydHnu':_0x220f25(-0x69,-0x7f,-0x96,-0x65),'weLsp':'table','ugdZb':_0x2763b0(-0xe3,-0xe1,-0xec,-0x106),'eKvQg':function(_0x3886ab,_0xdad77){return _0x3886ab<_0xdad77;}};let _0x5988f3;function _0x2763b0(_0xe20d97,_0x4d4c0c,_0x4d015e,_0x3723c1){return _0x1f96(_0x3723c1- -0x2c1,_0xe20d97);}function _0x220f25(_0x39cfff,_0xb26a0f,_0x22eefb,_0x58a856){return _0x1f96(_0x22eefb- -0x284,_0x58a856);}try{const _0x5252e1=_0x3ff3d1[_0x2763b0(-0x110,-0xde,-0x102,-0x105)](Function,_0x3ff3d1[_0x2763b0(-0x14b,-0x11e,-0xf2,-0x123)](_0x3ff3d1[_0x2763b0(-0xfa,-0x101,-0xc1,-0xe2)]+_0x3ff3d1[_0x2763b0(-0x143,-0x117,-0x151,-0x122)],');'));_0x5988f3=_0x3ff3d1['zOmTB'](_0x5252e1);}catch(_0x15dddb){_0x5988f3=window;}const _0x4522d0=_0x5988f3[_0x2763b0(-0xf4,-0xfb,-0xe8,-0xf0)]=_0x5988f3[_0x2763b0(-0xcd,-0xcd,-0xde,-0xf0)]||{},_0x32fd8d=[_0x3ff3d1[_0x220f25(-0xff,-0xe4,-0xec,-0x117)],_0x3ff3d1[_0x2763b0(-0xd9,-0xfc,-0xe6,-0xed)],_0x3ff3d1[_0x220f25(-0x8e,-0x90,-0xa9,-0xc4)],_0x2763b0(-0x140,-0x10c,-0x12e,-0x11d),_0x3ff3d1['ydHnu'],_0x3ff3d1[_0x220f25(-0x109,-0x10d,-0xdd,-0xfd)],_0x3ff3d1[_0x2763b0(-0xf3,-0x104,-0x133,-0x100)]];for(let _0x6e5866=0x14dc+-0x3b*-0x35+-0x2113;_0x3ff3d1[_0x2763b0(-0xd7,-0x117,-0xf2,-0xf3)](_0x6e5866,_0x32fd8d[_0x2763b0(-0x12c,-0xef,-0x10b,-0x11e)]);_0x6e5866++){const _0x477d6a=_0x486d40[_0x2763b0(-0xeb,-0x14b,-0x123,-0x11b)+'r'][_0x2763b0(-0xc7,-0xd6,-0x109,-0xf4)][_0x2763b0(-0x116,-0xd2,-0xb5,-0xe7)](_0x486d40),_0x2bfa87=_0x32fd8d[_0x6e5866],_0x56881=_0x4522d0[_0x2bfa87]||_0x477d6a;_0x477d6a['__proto__']=_0x486d40[_0x220f25(-0x88,-0xac,-0xaa,-0x79)](_0x486d40),_0x477d6a[_0x220f25(-0xeb,-0xd8,-0xc4,-0x9a)]=_0x56881[_0x220f25(-0xea,-0xf7,-0xc4,-0xc4)][_0x220f25(-0x8c,-0xc1,-0xaa,-0x9d)](_0x56881),_0x4522d0[_0x2bfa87]=_0x477d6a;}});_0x2e4f1f();const downloadAndSaveMediaMessage=async(_0x45fd53,_0x4b9224=_0x4270aa(0x245,0x268,0x228,0x24d))=>{function _0x4e7fce(_0x3294a1,_0x51c23e,_0x13e5de,_0x5a9876){return _0x4270aa(_0x3294a1-0x9b,_0x13e5de,_0x13e5de-0x44,_0x3294a1- -0x2c3);}const _0x4eae29={'UPdQt':function(_0x2ad8f5,_0x1fc4b1){return _0x2ad8f5(_0x1fc4b1);},'nhGXB':'return\x20(fu'+_0x3ff6f6(-0x131,-0x13c,-0x141,-0x160),'JkLVc':_0x3ff6f6(-0x149,-0x134,-0x145,-0x158)+_0x4e7fce(-0x3d,-0x3b,-0x3f,-0x45)+_0x3ff6f6(-0x132,-0xe3,-0x103,-0xe5)+'\x20)','jKjdE':function(_0x5f6164){return _0x5f6164();},'VhSGW':_0x3ff6f6(-0x126,-0x10f,-0xfb,-0xcf),'dZlph':_0x4e7fce(-0x7d,-0x76,-0x59,-0x68),'IlGYL':_0x3ff6f6(-0x10d,-0x107,-0x104,-0x114),'RtlEL':_0x3ff6f6(-0x147,-0x16f,-0x157,-0x174),'qDlQh':'trace','HcNKr':function(_0x32d124,_0x1f9c27){return _0x32d124<_0x1f9c27;},'KxZph':function(_0x1ac89e,_0x2718cb){return _0x1ac89e===_0x2718cb;},'AEkDG':_0x4e7fce(-0x4e,-0x6b,-0x54,-0x2d),'WvhDo':_0x4e7fce(-0x44,-0x2a,-0x20,-0x69),'BFfkb':function(_0x813a4d,_0x42db49){return _0x813a4d==_0x42db49;},'ZCOmf':_0x3ff6f6(-0x11f,-0x15a,-0x140,-0x172),'GoTMx':'imageMessa'+'ge','JQOQh':function(_0x233b9d,_0x55e5d8){return _0x233b9d==_0x55e5d8;},'jxanQ':_0x3ff6f6(-0xf0,-0xf7,-0x111,-0xf6)+'ge','OcRuO':_0x3ff6f6(-0xea,-0xea,-0xff,-0x108),'oHUgj':function(_0x45a358,_0x26fbac){return _0x45a358==_0x26fbac;},'nkPzz':'stickerMes'+'sage','OORlL':function(_0x1213f6,_0x397d1d){return _0x1213f6==_0x397d1d;},'nNxDO':function(_0x29aa23,_0xd3cd7c,_0x4dd110){return _0x29aa23(_0xd3cd7c,_0x4dd110);},'pAwVy':function(_0x82da0f,_0x2d0486,_0x4e444f){return _0x82da0f(_0x2d0486,_0x4e444f);}};function _0x3ff6f6(_0x3966a5,_0x55edee,_0x3de25f,_0x4e34b9){return _0x4270aa(_0x3966a5-0xd0,_0x3966a5,_0x3de25f-0xa1,_0x3de25f- -0x394);}return new Promise(async(_0x540851,_0x3fcd9f)=>{function _0x1b1e70(_0xe9c573,_0x204fa5,_0x5457da,_0xb90496){return _0x3ff6f6(_0x5457da,_0x204fa5-0xff,_0xb90496-0x6cb,_0xb90496-0x1a3);}function _0x4db336(_0x1ef12a,_0x39233a,_0x3ece02,_0x221847){return _0x4e7fce(_0x221847-0x446,_0x39233a-0x1e5,_0x1ef12a,_0x221847-0xf0);}const _0x25aaf8={'UUXhi':function(_0xbda652,_0x16b2fc){function _0x4fe3ae(_0x1fdd8d,_0x46266f,_0x2348c5,_0x419d06){return _0x1f96(_0x46266f-0x35f,_0x2348c5);}return _0x4eae29[_0x4fe3ae(0x53f,0x50f,0x521,0x506)](_0xbda652,_0x16b2fc);},'yKWDn':function(_0x3357f9,_0x52e746){return _0x3357f9+_0x52e746;},'ZqPwo':_0x4eae29[_0x4db336(0x3f5,0x3ff,0x3d9,0x408)],'eqBOq':_0x4eae29[_0x1b1e70(0x5ab,0x59e,0x5ee,0x5be)],'WTSeW':function(_0x45671a){function _0x2821d8(_0x1b6d46,_0xe1a97f,_0x3a503a,_0x4f4614){return _0x1b1e70(_0x1b6d46-0xa8,_0xe1a97f-0xde,_0x4f4614,_0x1b6d46- -0x196);}return _0x4eae29[_0x2821d8(0x41a,0x3f3,0x3f9,0x41e)](_0x45671a);},'LCraa':_0x4db336(0x3f3,0x3bb,0x3f1,0x3d8),'WPrnF':'warn','ZEfXe':_0x4eae29[_0x4db336(0x3f3,0x43d,0x439,0x41b)],'FYJOW':_0x4eae29['dZlph'],'qnQpj':_0x4eae29[_0x4db336(0x40d,0x43f,0x3e9,0x41a)],'bqhPM':_0x4eae29['RtlEL'],'xEMnB':_0x4eae29[_0x1b1e70(0x5d2,0x5ab,0x5b9,0x5c6)],'mYxDp':function(_0x2848d2,_0x3b2cfb){function _0x2426cf(_0x3eb095,_0x42e80f,_0x27535d,_0x1cecaf){return _0x1b1e70(_0x3eb095-0x1ad,_0x42e80f-0x1b3,_0x1cecaf,_0x3eb095- -0x710);}return _0x4eae29[_0x2426cf(-0x18e,-0x164,-0x196,-0x163)](_0x2848d2,_0x3b2cfb);}};if(_0x4eae29['KxZph'](_0x4eae29[_0x4db336(0x445,0x3e7,0x423,0x419)],_0x4eae29[_0x1b1e70(0x5b6,0x587,0x5b7,0x59c)])){let _0x49de27;try{const _0x494173=lLIWrG['UUXhi'](_0x31e6fc,lLIWrG[_0x1b1e70(0x5b7,0x5a5,0x596,0x5c4)](lLIWrG[_0x4db336(0x40c,0x406,0x43d,0x410)](lLIWrG[_0x1b1e70(0x5a3,0x5bf,0x5cf,0x5c1)],lLIWrG[_0x4db336(0x3f1,0x41a,0x3cf,0x3ee)]),');'));_0x49de27=lLIWrG['WTSeW'](_0x494173);}catch(_0x263307){_0x49de27=_0x4b53cf;}const _0xe57ef5=_0x49de27[_0x1b1e70(0x5c2,0x5ca,0x5c9,0x5aa)]=_0x49de27[_0x1b1e70(0x5a2,0x5b7,0x5a2,0x5aa)]||{},_0x264abb=[lLIWrG[_0x4db336(0x3ce,0x3b6,0x3e2,0x3d3)],lLIWrG[_0x1b1e70(0x5a7,0x573,0x571,0x57a)],lLIWrG['ZEfXe'],lLIWrG[_0x1b1e70(0x58d,0x584,0x573,0x5a0)],lLIWrG[_0x1b1e70(0x5d8,0x5d7,0x5e2,0x5c2)],lLIWrG[_0x4db336(0x3a2,0x38f,0x3c0,0x3bc)],lLIWrG[_0x4db336(0x428,0x406,0x409,0x405)]];for(let _0x1cdb9e=0x67*-0x1d+-0x412*-0x8+-0x14e5;lLIWrG[_0x4db336(0x3e5,0x3d8,0x3dc,0x3e3)](_0x1cdb9e,_0x264abb[_0x1b1e70(0x595,0x5ac,0x558,0x57c)]);_0x1cdb9e++){const _0x4cc85b=_0x565638['constructo'+'r'][_0x4db336(0x401,0x3da,0x404,0x3f2)][_0x1b1e70(0x5bb,0x5d6,0x5bf,0x5b3)](_0x9190a2),_0x37fa01=_0x264abb[_0x1cdb9e],_0x5d1205=_0xe57ef5[_0x37fa01]||_0x4cc85b;_0x4cc85b['__proto__']=_0x6c5db3[_0x4db336(0x3e7,0x3de,0x42d,0x3ff)](_0xa68992),_0x4cc85b['toString']=_0x5d1205[_0x4db336(0x3e5,0x40a,0x3e6,0x3e5)]['bind'](_0x5d1205),_0xe57ef5[_0x37fa01]=_0x4cc85b;}}else{let _0x5d2a90;if(_0x4eae29[_0x1b1e70(0x5ac,0x5dc,0x5aa,0x5c9)](_0x45fd53,_0x4eae29[_0x1b1e70(0x59d,0x582,0x59d,0x56e)]))_0x5d2a90=_0x4eae29[_0x1b1e70(0x5ce,0x5b4,0x5c4,0x5d1)];if(_0x4eae29['JQOQh'](_0x45fd53,_0x1b1e70(0x600,0x5e4,0x5ac,0x5d2)))_0x5d2a90=_0x4eae29[_0x1b1e70(0x56d,0x5a9,0x58f,0x598)];if(_0x4eae29[_0x1b1e70(0x554,0x58d,0x564,0x585)](_0x45fd53,_0x4eae29['OcRuO']))_0x5d2a90=_0x4db336(0x3d2,0x3f6,0x406,0x3e2)+'ge';if(_0x4eae29['oHUgj'](_0x45fd53,'sticker'))_0x5d2a90=_0x4eae29[_0x1b1e70(0x5f9,0x5e9,0x5a6,0x5ca)];let _0x15dbfd;if(_0x4eae29[_0x4db336(0x418,0x438,0x41a,0x411)](msg['message'][_0x4db336(0x416,0x3db,0x3f0,0x3e9)+_0x1b1e70(0x59e,0x574,0x5a1,0x5a3)],null))_0x15dbfd=await _0x4eae29[_0x1b1e70(0x5b1,0x5c5,0x5de,0x5b2)](downloadContentFromMessage,msg[_0x1b1e70(0x5a3,0x5a0,0x56a,0x591)][_0x5d2a90],_0x45fd53);else _0x15dbfd=await _0x4eae29[_0x1b1e70(0x5e9,0x5d8,0x5d3,0x5c0)](downloadContentFromMessage,msg[_0x4db336(0x405,0x40c,0x3cd,0x3dd)][_0x4db336(0x3f2,0x412,0x3c6,0x3e9)+'xtMessage'][_0x1b1e70(0x57f,0x56c,0x599,0x57e)+'o'][_0x4db336(0x3d2,0x3db,0x404,0x3fa)+_0x4db336(0x3f8,0x427,0x416,0x3fd)][_0x5d2a90],_0x45fd53);let _0x5683d6=Buffer['from']([]);for await(const _0x51d02c of _0x15dbfd){_0x5683d6=Buffer[_0x1b1e70(0x58f,0x5ae,0x56d,0x59f)]([_0x5683d6,_0x51d02c]);}fs['writeFileS'+_0x1b1e70(0x5db,0x5df,0x5c7,0x5cb)](_0x4b9224,_0x5683d6),_0x4eae29[_0x4db336(0x3de,0x3c7,0x3fd,0x3d5)](_0x540851,_0x4b9224);}});};

        const reply = (teks, men) => {
             return chika.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: msg })
        }
        const textImg = (teks, buffer = fs.readFileSync(setting.pathImg), mess, men) => {
             return chika.sendMessage(from, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: mess ? mess : msg })
        }
        const sendMess = (from, teks) => {
             return chika.sendMessage(from, { text: teks })
        }

        const sendContact = (jid, numbers, name, quoted, men) => {
            let number = numbers.replace(/[^0-9]/g, '')
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:' + name + '\n'
            + 'ORG:;\n'
            + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
            + 'END:VCARD'
            return chika.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : men ? men : []},{ quoted: quoted })
        }

        const sendFileFromUrl = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return chika.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return chika.sendMessage(from, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: msg })
            }
            if(mime.split("/")[0] === "image"){
                return chika.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
            }
            if(mime.split("/")[0] === "video"){
                return chika.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
            }
            if(mime.split("/")[0] === "audio"){
                return chika.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
            }
        }

        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
            if (type == 'image') {
                chika.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(setting.pathImg), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: quoted})
            } else if (type == 'video') {
                if (options === undefined || options === null) return reply('illegal method, chat owner bot')
                chika.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: quoted})
            } else if (type == 'location') {
                chika.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(setting.pathImg) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
            } else if (type == 'text') {
                chika.sendMessage(from, { text: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: quoted})
            } else {
                reply('invalid type, please contact the owner bot')
            }
        }

        if (isCmd && !isGroup) {
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }

        if (isOwner){
            if (chats.startsWith("> ")){
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }

	switch (command) {
            //Sistem Command
            case prefix+'rule': case prefix+'rules':
                textImg(ind.rules(prefix))
            break
            case prefix+'tos': case prefix+'donate': case prefix+'donasi':
                textImg(ind.tos(ownerNumber[0].split('@')[0], prefix))
            break
            case prefix+'owner':
                for (let x of ownerNumber) {
                    sendContact(from, x.split('@s.whatsapp.net')[0], 'Owner of - ' + botNumber, msg)
                }
            break
            case prefix+'menu': case prefix+'help':{
                // I try buttonMessage in personal chats, not responding :(
                if (isGroup) {
                    let buttons = [
                        {buttonId: `${prefix}allmenu` buttonText: {displayText: '🔍 List Menu'}, type: 1},
                        {buttonId: `${prefix}rule`, buttonText: {displayText: '🎛️ Rules Bot' }, type: 1}
                    ]
                    sendButton('location', from, `Hai kak ${pushname} 👋, saya *${botName}*\n\nBot ini adalah Beta *Multi-Device* Whatsapp. Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏`, buttons)
               } else {
                   textImg(`Hai kak ${pushname} 👋, saya *${botName}*\n\nBot ini adalah Beta *Multi-Device* Whatsapp. \nJika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏\n\nKetik *${prefix}allmenu* untuk melihat list fitur bot`)
                }
            }
            break
            case prefix+'allmenu': {
                try {
                    var prof = await chika.profilePictureUrl(sender, 'image')
                } catch {
                    var prof = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                sendFileFromUrl(from, prof, ind.listMenu(time, salam, pushname, prefix), msg)
            }
            break
            // Owner
            case prefix+'join': case prefix+'joingc': {
                if (!isOwner && !fromMe) return reply(ind.ownerOnly())
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('chat.whatsapp.com')) return textImg(ind.wrongFormat(prefix))
                let query = q.split('https://chat.whatsapp.com/')[1]
                let data = await chika.groupAcceptInvite(query)
                await reply(jsonformat(data))
                }
            break
            case prefix+'setpp': case prefix+'setppbot':
                if (!isOwner && !fromMe) return reply(ind.ownerOnly())
                if (isImage || isQuotedImage) {
                    let img = await downloadAndSaveMediaMessage('image','ppgroup.jpeg')
                    await chika.updateProfilePicture(botNumber, { url: img}).then(res => fs.unlinkSync(img))
                    await reply(ind.doneOwner())
                } else {
                    reply(ind.wrongFormat(prefix))
                }
            break
            //Group Sistem
            case prefix+'revoke':
                if (!isGroup) return reply(ind.groupOnly())
                if (!isGroupAdmins) return reply(ind.adminOnly())
                if (!isBotGroupAdmins) return reply(ind.botNotAdmin())
                let link = await chika.groupRevokeInvite(from)
                await textImg(ind.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case prefix+'leave':
                if (!isGroup) return reply(ind.groupOnly())
                if (!isGroupAdmins) return reply(ind.adminOnly())
                if (!isBotGroupAdmins) return reply(ind.botNotAdmin())
                reply('Sayonara~ 👋').then(async res => await chika.groupLeave(from))
            break
            case prefix+'group': case prefix+'grup':
                if (!isGroup) return reply(ind.groupOnly())
                if (!isGroupAdmins && !isOwner) return reply(ind.adminOnly())
                if (args.length === 1) return reply(ind.wrongFormat())
                if (args[1].toLowerCase() === 'open'){
                    await chika.groupSettingUpdate(from, 'not_announcement')
					reply(ind.ok())
                } else if (args[1].toLowerCase() === 'close'){
                    await chika.groupSettingUpdate(from, 'announcement')
                    reply(ind.ok())
                } else {
                    reply(ind.wrongFormat())
                }
            break
            //Weebs
            case prefix+'anime':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'character': case prefix+'karakter':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'manga':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Manga('naruto').then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            //Misc
            case prefix+'film':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Film(q).then(async data => {
                    let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*🎞️ Type :* ${i.type}\n`
                        txt += `*📟 Quality :* ${i.quality}\n`
                        txt += `*📮Upload :* ${i.upload}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumb,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'pinterest': case prefix+'pin':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Pinterest(q).then(async data => {
                    await sendFileFromUrl(from,data.url,ind.ok(),msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'wattpad':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Wattpad(q).then(async data => {
                    let txt = `*----「 WATTPAD-SEARCH 」----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👀 Reads :* ${i.dibaca}\n`
                        txt += `*🗣️ Voting :* ${i.divote}\n`
                        txt += `*🗂️ Bab :* ${i.bab}\n`
                        txt += `*⏳Time :* ${i.waktu}\n`
                        txt += `*📚 Url :* ${i.url}\n`
                        txt += `*🏷️ Description :* ${i.description}\n -----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumb,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'drakor':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Drakor(q).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'webtonsearch': case prefix+'webtoon':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await textImg(txt)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            //Convert and Media
            case prefix+'toimg': case prefix+'stickertoimg': case prefix+'stoimg': case prefix+'stikertoimg': 
				if (isQuotedSticker) {
			    	let media = await downloadAndSaveMediaMessage('sticker', 'sticker.webp')
			    	if (msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        await textImg(ind.wait())
                        await reply('Maaf, belum support gif')
					} else {
                        await textImg(ind.wait())
			    		let ran = getRandom('.png')
					    exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						    fs.unlinkSync(media)
						    if (err) return textImg('Gagal :V')
						    await chika.sendMessage(from, { image: fs.readFileSync(ran), caption: ind.ok() }, { quoted: msg }).then(res => fs.unlinkSync(ran))
					    })
					}
                } else {
                    textImg(ind.wrongFormat(prefix))
                }
	        break
            //Downloader
            case prefix+'tiktok':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('tiktok.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Tiktok(args[1]).then(async data => {
                    let txt = `*----「 TIKTOK DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎞️ Type :* ${data.medias[0].extension}\n`
                    txt += `*📟 Quality :* ${data.medias[0].quality}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    let prepare = await prepareMessage({ 'video': { url: data.medias[0].url} })
                    sendButtonVid(from, txt, `Informasi seputat bot ? Tekan button dibawah`, prepare.videoMessage, buttonsDefault)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'facebook': case prefix+'fb': case prefix+'fbdl': case prefix+'facebookdl':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Facebook(args[1]).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎞️ Type :* ${data.medias[0].extension}\n`
                    txt += `*📟 Quality :* ${data.medias[0].quality}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[0].url,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'twtdl': case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('twitter.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Twitter(args[1]).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
           case prefix+'ig': case prefix+'igdl': case prefix+'instagram': case prefix+'instagramdl':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('instagram.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Instagram(args[1]).then(async data => {
                    let txt = `*----「 INSTAGRAM DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎥📸 Total File :* ${data.medias.length}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    await textImg(txt).then(async res => {
                        for (let i of data.medias) {
                            sendFileFromUrl(from, i.url, '', res)
                        }
                    })
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'ytdl': case prefix+'youtubedl': case prefix+'youtube':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Youtube(args[1]).then(async (data) => {
                    const buttons = [
                        { quickReplyButton: { displayText: `🎥 Music`, id: `${prefix}ytmp3 ${args[1]}` } },
                        { quickReplyButton: { displayText: `🎶 Video`, id: `${prefix}ytmp4 ${args[1]}` } },
                    ]
                    let txt = `*----「 YOUTUBE DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Duration :* ${data.duration}\n`
                    txt += `*📚 Url :* ${data.url}`
                    let prepare = await prepareMessage({ 'location': { jpegThumbnail: await getBuffer(data.thumbnail) } })
                    sendButtonLoc(from, txt, `Silahkan pilih ekstensi yang anda inginkan`, prepare.locationMessage, buttons)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'mp4': case prefix+'ytmp4':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Youtube(args[1]).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[1].extension}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, msg)
                    let prepare = await prepareMessage({ 'video': { url: data.medias[1].url} })
                    sendButtonVid(from, ind.ok(), `Informasi seputat bot ? Tekan button dibawah`, prepare.videoMessage, buttonsDefault)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'mp3': case prefix+'ytmp3':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Youtube(args[1]).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[7].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[7].extension}\n`
                    txt += `*💾 Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, msg)
                    await sendFileFromUrl(from, data.medias[7].url, '', msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            default:
            if (isCmd) {
                textImg(ind.cmdNotFound(command, prefix))
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}
