// Version 1.16 r:03

const Command = require('command')

// credit : https://github.com/Some-AV-Popo
String.prototype.clr = function (hexColor) { return `<font color="#${hexColor}">${this}` }

module.exports = function CmdSlashKr(d) {
	const command = Command(d)

	// command
	command.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
		d.send('C_RESET_ALL_DUNGEON', 1, {})
		send(`Dungeons reset.`.clr('56B4E9'))
	})
	command.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
		d.send('C_LEAVE_PARTY', 1, {})
		send(`Dropped party.`.clr('56B4E9'))
	})

	// helper
	function send(msg) { command.message(`[cmd-slash-kr] : ` + msg) }

}