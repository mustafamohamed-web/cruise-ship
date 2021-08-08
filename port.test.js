const Port = require('./port.js');
const Ship = require('./ship.js');
const Itinerary = require('./itinerary.js')


describe ('Port', ()=>{
    let ship;
    let port;
    let itinerary;
    let shipObj;
    beforeEach(()=>{
        port = new Port('London')
        itinerary = new Itinerary([port])
        ship = new Ship(itinerary)
        shipObj = {}
    })
    it('Can be instantiated', ()=>{
        expect(port).toBeInstanceOf(Object);
    })
    it('It has a name',()=>{
        expect(port.name).toBe('London')
    })
    it('adds ship to the ships array', ()=>{
        port.addShip(shipObj)
        expect(port.ships).toContain(shipObj)
    })
    it('removes ship from ship array', ()=>{
        port.addShip(shipObj)
        port.removeShip(shipObj)
        expect(port.ships).not.toContain(shipObj)
    })
    
})
