// OPCODE REQUIRED :
// - C_DISMISS_PARTY
// - C_LEAVE_PARTY
// - C_REQUEST_USER_PAPERDOLL_INFO
// - C_RESET_ALL_DUNGEON

// Version 1.14 r:02

module.exports = function CmdSlashKr(d) {
	
	// command
	try {
		const Command = require('command')
		const command = Command(d)
		// NA
		command.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
			d.toServer('C_RESET_ALL_DUNGEON', {})
			send(`Dungeons reset.`.clr('56B4E9'))
		})
		command.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
			d.toServer('C_LEAVE_PARTY', {})
			send(`Dropped party.`.clr('56B4E9'))
		})
		command.add(['dis', '얀'], () => {
			d.toServer('C_DISMISS_PARTY', {})
			send(`Disbanded party.`.clr('56B4E9'))
		})
		command.add(['보기', 'ㅂㄱ', 'qr'], (name) => {
			if (name) d.toServer('C_REQUEST_USER_PAPERDOLL_INFO', { name: name })
			else send(`Invalid argument.`.clr('FF0000'))
		})
		function send(msg) { command.message(`[cmd-slash-kr] : ` + [...arguments].join('\n\t - ')) }
	} catch (e) { console.log(`[ERROR] -- cmd-slash-kr module --`) }	
	
}

// credit : https://github.com/Some-AV-Popo
String.prototype.clr = function (hexColor) { return `<font color="#${hexColor}">${this}` }
