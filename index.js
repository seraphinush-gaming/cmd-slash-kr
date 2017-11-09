// OPCODE REQUIRED :
// - C_DISMISS_PARTY
// - C_RESET_ALL_DUNGEON
// - C_LEAVE_PARTY

module.exports = function EngCommand(dispatch) {
	
	// command
	try {
		const Command = require('command')
		const command = Command(dispatch)
		// NA
		command.add(['res', 'ㄱㄷㄴ'], () => {
			dispatch.toServer('C_RESET_ALL_DUNGEON', {})
			send(`<font color="#56B4E9">Dungeons reset.</font>`)
		})
		command.add(['dr', 'ㅇㄱ'], () => {
			dispatch.toServer('C_LEAVE_PARTY', {})
			send(`<font color="#56B4E9">Dropped party.</font>`)
		})
		command.add(['dis', '얀'], () => {
			dispatch.toServer('C_DISMISS_PARTY', {})
			send(`<font color="#56B4E9">Disbanded party.</font>`)
		})
		// KR1
		command.add(['ㄹㅅ', 'ㄽ', 'ft', 'ㄹㄹ', 'ff'], () => {
			dispatch.toServer('C_RESET_ALL_DUNGEON', {})
			send(`<font color="#56B4E9">던전이 초기화 되었습니다.</font>`)
		})
		command.add(['ㅌㅌ', 'xx'], () => {
			dispatch.toServer('C_LEAVE_PARTY', {})
			send(`<font color="#56B4E9">파티 탈퇴했습니다.</font>`)
		})
		command.add(['해산', 'ㅎㅅ', 'gy'], () => {
			dispatch.toServer('C_DISMISS_PARTY', {})
			send(`<font color="#56B4E9">파티 해산됬습니다.</font>`)
		})
		function send(msg) {
			command.message(`[short-slash-command] : ` + msg)
		}
	} catch (e) {
		console.log(`[ERROR] -- short-slash-command module --`)
	}	
	
}
