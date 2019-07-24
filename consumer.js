module.exports = function(io) {
	let userlist = [];
	let msgs = [];

	io.on('connection', function(socket) {
		//log in
		require('./login')(socket, userlist, msgs, io);
		//log out
		socket.on('disconnect', function() {
			userlist = userlist.filter((ele) => {
				return ele.id != socket.id;
			});
			msgs = msgs.filter((ele) => {
				return ele.socketid != socket.id;
			});
			io.emit('shake', {
				sum: userlist.length,
				userlist: userlist,
				msgs: msgs
			});
		});
		//聊天监听
		require('./chat')(socket, userlist, msgs, io);
	});
};
