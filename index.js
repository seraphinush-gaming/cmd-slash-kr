// Version 1.16 r:00

const Command = require('command')

// credit : https://github.com/Some-AV-Popo
String.prototype.clr = function (hexColor) { return `<font color="#${hexColor}">${this}` }

module.exports = function CmdSlashKr(d) {
	const command = Command(d)

	// command
	command.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
		d.toServer('C_RESET_ALL_DUNGEON', {})
		send(`Dungeons reset.`.clr('56B4E9'))
	})
	command.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
		d.toServer('C_LEAVE_PARTY', {})
		send(`Dropped party.`.clr('56B4E9'))
	})
	function send(msg) { command.message(`[cmd-slash-kr] : ` + msg) }

}
