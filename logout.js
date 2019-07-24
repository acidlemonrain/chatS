module.exports = function(socket, userlist, msgs, io) {
	socket.on('disconnect', function(id, id2) {
		userlist = userlist.filter((ele) => {
			return ele.id != socket.id;
		});
		console.log(userlist.length);

		io.emit('shake', {
			sum: userlist.length,
			userlist: userlist
		});
	});
	console.log(userlist.length);
	return userlist;
};
