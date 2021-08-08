const Ship = require('./ship.js');
const Port = require('./port.js');
const Itinerary = require('./itinerary.js')



describe ('Ship', ()=>{
    let ship;
    let london;
    let birmingham;
    let itinerary;
    beforeEach(()=>{
        london = new Port('london')
        birmingham = new Port('birmingham')
        itinerary = new Itinerary([london, birmingham])
        ship = new Ship(itinerary)
    })
it('Can be instantiated', ()=>{
    expect(ship).toBeInstanceOf(Object);

})
it('It has a starting port',()=>{
    console.log(ship.currentPort)
    expect(ship.currentPort).toBe(london)
})
it('can set sail',()=>{
    ship.setSail();
    console.log(ship.currentPort)
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort.ships).not.toContain(ship)
})
it('cant sail past last port',()=>{
    ship.setSail();
    ship.dock()
    expect(()=>ship.setSail()).toThrowError('end of itinerary reached')
})
it('previous port is equal to current port',()=>{
    ship.setSail();
    expect(ship.previousPort).toBe(london)
})
it('can dock different port',()=>{
    ship.setSail()
    ship.dock()
    expect(ship.currentPort).toBe(birmingham)
    expect(birmingham.ships).toContain(ship)
})
it('gets added to port on instantiation',()=>{
    expect(london.ships).toContain(ship)
})

});