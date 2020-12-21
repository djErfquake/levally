let initialized = false;
module.exports = {
    init: function() {
        if (initialized) return;
        console.log("Initializing RPG Initiative Tracker.");
        initialized = true;
    },
    update: function(socket) {

    }
};