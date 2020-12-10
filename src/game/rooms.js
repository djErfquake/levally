const roomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rooms = [];
module.exports = {
    createRoom: function(numOfCharacters = 4) {
        let room = "";
        for (let i = 0; i < numOfCharacters; i++) { room += roomCharacters.charAt(Math.floor(Math.random() * roomCharacters.length)); }
        rooms[room] = [];
        return room;
    },
    joinRoom: function(room, player) {
        rooms[room].push(player);
    },
    getRoom: function(room) {
        return rooms[room];
    },
    deleteRoom: function(room) {
        delete rooms[room];
    }
}