module.exports = function(socket, userlist, msgs, io) {
	// registration related behaviour goes here...
	socket.on('username', (name) => {
		userlist.push({
			id: socket.id,
			name: name
		});
		io.emit('shake', {
			sum: userlist.length,
			userlist: userlist,
			msgs: msgs
		});
		console.log(userlist);
		console.log(msgs);
	});
};
