function Ship(itinerary){
    this.previousPort = null;
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this)
}
Ship.prototype.setSail = function(){
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort)
    if(this.itinerary.ports.length - 1 === currentPortIndex){
        throw new Error('end of itinerary reached')
    } else {
        this.previousPort = this.currentPort
        this.currentPort = null;
        this.previousPort.removeShip(this)
    }
    
}

Ship.prototype.dock = function(){
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort)
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this)
}


module.exports = Ship