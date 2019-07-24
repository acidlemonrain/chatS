module.exports = function(socket, userlist, msgs, io) {
	socket.on('chatting', (from, msg) => {
		msgs.push({ data: msg, user: from });
		io.emit('msg', { data: msg, user: from });
	});
};
