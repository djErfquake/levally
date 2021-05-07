let horses = [];

let initialized = false;
module.exports = {
    init: function() {
        if (initialized) return;
        console.log("Initializing Derby.");
        initialized = true;
    },
    registerSocket: function(socket) {
        socket.on('update', function(data) {
            horses = data;
            socket.broadcast.emit('update', horses);
        });
        socket.on('request-update', function() {
            socket.emit('update', horses);
        });
    }
};