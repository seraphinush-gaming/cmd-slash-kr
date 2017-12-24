// OPCODE REQUIRED :
// - C_DISMISS_PARTY
// - C_RESET_ALL_DUNGEON
// - C_LEAVE_PARTY

// Version 1.13 r:00

module.exports = function shortSlashCommand(d) {
	
	// command
	try {
		const Command = require('command')
		const command = Command(d)
		// NA
		command.add(['res', 'ㄱㄷㄴ'], () => {
			d.toServer('C_RESET_ALL_DUNGEON', {})
			send(`Dungeons reset.`.clr('56B4E9'))
		})
		command.add(['dr', 'ㅇㄱ'], () => {
			d.toServer('C_LEAVE_PARTY', {})
			send(`Dropped party.`.clr('56B4E9'))
		})
		command.add(['dis', '얀'], () => {
			d.toServer('C_DISMISS_PARTY', {})
			send(`Disbanded party.`.clr('56B4E9'))
		})
		// KR
		command.add(['ㄹㅅ', 'ㄽ', 'ft', 'ㄹㄹ', 'ff'], () => {
			d.toServer('C_RESET_ALL_DUNGEON', {})
			send(`던전이 초기화 되었습니다.`.clr('56B4E9'))
		})
		command.add(['ㅌㅌ', 'xx'], () => {
			d.toServer('C_LEAVE_PARTY', {})
			send(`파티 탈퇴했습니다.`.clr('56B4E9'))
		})
		command.add(['해산', 'ㅎㅅ', 'gy'], () => {
			d.toServer('C_DISMISS_PARTY', {})
			send(`파티 해산됬습니다.`.clr('56B4E9'))
		})
		function send(msg) { command.message(`[short-slash-command] : ` + [...arguments].join('\n\t - ')) }
	} catch (e) { console.log(`[ERROR] -- short-slash-command module --`) }	
	
}

// credit : https://github.com/Some-AV-Popo
String.prototype.clr = function (hexColor) { return `<font color="#${hexColor}">${this}` }
