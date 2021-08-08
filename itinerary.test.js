const Ship = require('./ship.js');
const Port = require('./port.js');
const Itinerary = require('./itinerary.js')

describe ('Itinerary', ()=>{
    it('It has a name',()=>{
        const port = new Port('London')
        const portTwo = new Port('Birmingham')
        const portThree = new Port('Dover')
        const ports = [port, portTwo, portTwo]
        const itinerary = new Itinerary(ports)
        expect(itinerary.ports).toHaveLength(3)
    })
    it('Can be instantiated', ()=>{
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
    
})