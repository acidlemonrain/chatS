module.exports = function(io) {
	let userlist = [];
	let msgs = [];

	io.on('connection', function(socket) {
		//log in
		require('./login')(socket, userlist, msgs, io);
		// log out
		socket.on('disconnect', function(id, id2) {
			userlist = userlist.filter((ele) => {
				return ele.id != socket.id;
			});
			io.emit('shake', {
				sum: userlist.length,
				userlist: userlist
			});
		});
		//聊天监听
		require('./chat')(socket, userlist, msgs, io);
	});
};
