import roles from './roles';
import definitions from './definitions';
import rooms from '../rooms';
import {shuffleArray} from '../../utilities/helper';

/*
    https://flatuicolors.com/palette/ca
    https://www.shapedivider.app/
*/

let initialized = false;

const colors = {
    red: '#ff6b6b',
    blue: '#2e86de',
    grey: '#c8d6e5',
    green: '#1dd1a1',
    purple: '#5f27cd',
    black: '#222f3e',
    pink: '#ff9ff3',
    yellow: '#feca57'
};

let twoRooms = {
    roles: roles,
    definitions: definitions,
    game: {
        init: function() {
            if (initialized) return;
            console.log("Initializing Two Rooms and a Boom.");
            initialized = true;
        },
        addPlayer: function(socket) {
            socket.on('request_createRoom', function() {
                let roomCode = rooms.createRoom();
                socket.emit('response_createRoom', roomCode);
            });
      
            socket.on('request_addPlayerToRoom', function(data) {
                rooms.joinRoom(data, socket.id);
            });

            socket.on('request_sendRolesToRoom', function(data) {
                const room = data.room;
                const settings = data.settings;
                // // get a list of the room members
                // const roomMembers = shuffleArray(rooms.getRoom(room));
                // // add mandatory roles to the list first
                // // thenfill more from game settings
                // // then fill the rest with Agents if necessary
                // const agentRole = roles.find(r => r.name == 'Agent');
                // let gameRoles = [];
                // gameRoles = gameRoles
                // .concat(roles.filter(r => r.mandatory))
                // .concat(roles.filter(r => settings.roles.includes(r.name)));
                // const agentRolesToFill = roomMembers.length - gameRoles.length;
                // gameRoles.concat([].fill(agentRole, 0, agentRolesToFill));
                // let nextTeam = 'blue';
                // for (let i = 0; i < roomMembers.length; i++) {
                //     const role = gameRoles[i];
                //     const team = role.team[0];
                //     if (role.team.length > 1 ) {
                //         team = nextTeam;
                //         nextTeam = nextTeam == 'blue' ? 'red' : 'blue';
                //     }
                //     // map game roles to only stuff that should display
                //     const gameRole = {
                //         name: role.name,
                //         power: role.power,
                //         team: team, 
                    // color: colors[team]
                //     }
                //     roomMembers[i].emit('gotRole', gameRole);
                // }

                const role = roles[Math.floor(Math.random() * roles.length)];
                const team = role.team[Math.floor(Math.random() * role.team.length)];
                const gameRole = {
                    name: role.name,
                    power: role.power,
                    team: team, 
                    color: colors[team]
                }
                socket.emit('gotRole', gameRole);
            });
        },
        removePlayer: function(socket) {
          console.log(`removing ${socket.id}`);
          rooms.removePlayer(socket.id);
        }
    }
};
export default twoRooms;

/*
NOTES: a dead bomber does not detonate the bomb

- add an order of operations


*/