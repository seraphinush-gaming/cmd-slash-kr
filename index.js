// Version 1.17 r:00

const Command = require('command')

module.exports = function CmdSlashKr(d) {
	const command = Command(d)

	// command
	command.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], () => {
		d.send('C_RESET_ALL_DUNGEON', 1, {})
		send(`Dungeons reset.`)
	})
	command.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], () => {
		d.send('C_LEAVE_PARTY', 1, {})
		send(`Dropped party.`)
	})

	// helper
	function send(msg) { command.message(`[cmd-slash-kr] : ` + msg) }

}