module.exports = function(socket, userlist, msgs, io) {
	socket.on('chatting', (from, msg) => {
		msgs.push({ data: msg, user: from, socketid: socket.id });
		io.emit('msg', { data: msg, user: from, socketid: socket.id });
	});
};
