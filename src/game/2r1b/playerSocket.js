import io from "socket.io-client";
import { init } from "svelte/internal";
const socket = io();
socket.emit('init_2R1B');

let room = null;
let callbacks = {
    gotRole: null
};

function initialize(options) {
    callbacks = options.callbacks;
}

function createRoom() {
    socket.emit('request_createRoom');
    socket.on('response_createRoom', function(roomCode) {
        console.log('created room', roomCode);
        joinRoom(roomCode);
    });
}

function joinRoom(roomCode) {
    room = roomCode;
    console.log('joined room', room);
    socket.emit('request_addPlayerToRoom', room);
}

function sendRoles(settings) {
    socket.emit('request_sendRolesToRoom', {room: room, settings: settings});
}

socket.on('gotRole', function(role) {
    console.log('got role', role);
    if (callbacks.gotRole) { callbacks.gotRole(role); }
});


let playerSocket = {
    host: {
        initialize: initialize,
        createRoom: createRoom,
        sendRoles: sendRoles
    },
    member: {
        initialize: initialize,
        joinRoom: joinRoom
    }
};
export default playerSocket;