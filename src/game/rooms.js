const roomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rooms = {};

function removeFromRoom(room, player) {
    if (rooms[room]) {
        const index = rooms[room].indexOf(player);
        rooms[room].splice(index, 1);
        console.log(`${player} was removed from room ${room}`);
        if (rooms[room].length <= 0) {
            return true;
            
        }
    } else {
        console.log(`Can't remove ${player} from room ${room} because it doesn't exist`);
    }
}


module.exports = {
    createRoom: function(numOfCharacters = 4) {
        let roomName = "";
        for (let i = 0; i < numOfCharacters; i++) { roomName += roomCharacters.charAt(Math.floor(Math.random() * roomCharacters.length)); }
        let newRoom = 
        rooms[roomName] = [];
        console.log(`Created room ${roomName}`);
        return roomName;
    },
    joinRoom: function(room, player) {
        if (rooms[room]) {
            console.log(`${player} joined room ${room}`);
            rooms[room].push(player);
        } else {
            console.log(`Can't add ${player} to room ${room} because it doesn't exist`);
        }
    },
    removePlayer: function(player) {
        let roomsToDelete = [];
        Object.keys(rooms).forEach(r => {
            let deleteRoom = removeFromRoom(r, player);
            if (deleteRoom) { roomsToDelete.push(r); }
        });

        roomsToDelete.forEach(r => {
            this.deleteRoom(r);
        });
    },
    getRoom: function(room) {
        return rooms[room];
    },
    deleteRoom: function(room) {
        if (rooms[room]) {
            console.log(`deleting room ${room}`);
            delete rooms[room];
        } else {
            console.log(`Can't delete room ${room} because it doesn't exist`);
        }
    }
}