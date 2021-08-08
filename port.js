function Port(name){
this.name = name;
this.ships = [];
} 

Port.prototype = {
    addShip (ship){
        this.ships.push(ship)
    },

    removeShip (ship){
        const removeShip = this.ships.indexOf(ship)
        this.ships.splice(removeShip, 1)
    }
}

module.exports = Port