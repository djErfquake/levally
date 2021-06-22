import http from 'http';
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import io from 'socket.io';
import { json } from 'body-parser';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const server = http.createServer();



polka({server}) // You can also use Express
	.use(json())
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

// socket io
import game2r1b from './2r1b/game';
import rpg from './rpg/initiative';
import derby from './game/derby'
const GAMES = {
	"TWOROOMS": "Two Rooms and a Boom",
	"RPG": "RPG Initiative Tracker",
	"DERBY": "DERBY"
};

let sockets = {};
const printNumSockets = function() { return `Socket count: ${Object.keys(sockets).length}.`};
const addSocket = function(socket) { sockets[socket.id] = socket; console.log(`${socket.id} connected. ${printNumSockets()}`);}
const removeSocket = function(socket) { delete sockets[socket.id]; console.log(`${socket.id} disconnected. ${printNumSockets()}`);}
io(server).on('connection', function(socket) {
	addSocket(socket);
	socket.on('disconnect', function() { 
		if (socket.game) {
			if (socket.game == GAMES.TWOROOMS) { game2r1b.removePlayer(socket); }
			// else if (socket.game == GAMES.RPG) { rpg.removePlayer(socket); }
		} 
		removeSocket(socket);
	});

	socket.on('init2R1B', function() {
		game2r1b.init();
		socket.game = GAMES.TWOROOMS;
		game2r1b.addPlayer(socket);
	});

	socket.on('initRPG', function() {
		rpg.init();
		socket.game = GAMES.RPG;
		rpg.registerSocket(socket);
	});

	socket.on('init_derby', function() {
		derby.init();
		socket.game = GAMES.DERBY;
		derby.registerSocket(socket);
	});
});