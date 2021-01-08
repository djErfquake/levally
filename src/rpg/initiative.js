/*
    color palette: https://colors.lol/whacking

*/

let monsters = require('./monsters');

let encounter = [];


let initialized = false;
module.exports = {
    monsters: monsters,

    init: function() {
        if (initialized) return;
        console.log("Initializing RPG Initiative Tracker.");
        initialized = true;
    },
    registerSocket: function(socket) {
        socket.on('update', function(data) {
            encounter = data;
            socket.broadcast.emit('update', encounter);
        });
        socket.on('catchup', function() {
            socket.emit('catchup', encounter);
        });
    }
};