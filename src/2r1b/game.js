let roomServer = require('../game/rooms');
let roles = require('./roles');
let definitions = require('./roles');


let initialized = false;

const getRandomRole = function() {
    return roles[Math.floor(Math.random() * roles.length)];
}

module.exports = {
    roles: roles,
    definitions: definitions,
    init: function() {
        if (initialized) return;
        console.log("Initializing 2 Rooms and a Boom.");
        initialized = true;
    },
    addPlayer: function(socket) {
        const role = getRandomRole();
        socket.emit('setRole', role);
    },
    removePlayer: function(socket) {
        
    }
};

/*
NOTES: a dead bomber does not detonate the bomb

- add an order of operations


*/