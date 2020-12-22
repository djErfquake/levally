let monsters = require('./monsters');

let initialized = false;
module.exports = {
    monsters: monsters,

    init: function() {
        if (initialized) return;
        console.log("Initializing RPG Initiative Tracker.");
        initialized = true;
    },
    registerSocket: function(socket) {
        socket.on('update', function(encounter) {
            socket.broadcast.emit('update', encounter);
        });
    }
};