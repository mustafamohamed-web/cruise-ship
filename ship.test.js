const Ship = require('./ship.js');
const Port = require('./port.js');



describe ('Ship', ()=>{
it('Can be instantiated', ()=>{
    expect(new Ship()).toBeInstanceOf(Object);
})
it('It has a starting port',()=>{
    const port = new Port('London')
    const ship = new Ship(port)
    expect(ship.currentPort).toBe(port)
})
it('can set sail',()=>{
    const port = new Port('London')
    const ship = new Ship(port)
    ship.setSail();
    console.log(ship.currentPort)
    expect(ship.currentPort).toBeFalsy();
})
it('can dock different port',()=>{
    const london = new Port('london')
    const ship = new Ship(london)
    const birmingham = new Port('birmingham')
    ship.dock(birmingham)
    expect(ship.currentPort).toBe(birmingham)
})
});