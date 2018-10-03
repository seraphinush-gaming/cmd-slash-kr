// Version 1.18 r:00

module.exports = function CmdSlashKr(m) {
	const cmd = m.command || m.require.command

	// command
	cmd.add(['res', 'ㄱㄷㄴ', 'ㄹㄹ', 'ff'], {
		$none() { 
			m.send('C_RESET_ALL_DUNGEON', 1, {});
			send(`Dungeons reset.`);
		}
	});
	cmd.add(['dr', 'ㅇㄱ', 'ㅌㅌ', 'xx'], {
		$none() {
			m.send('C_LEAVE_PARTY', 1, {});
			send(`Dropped party.`);
		}
	});

	// helper
	function send(msg) { cmd.message(`: ` + msg); }

}