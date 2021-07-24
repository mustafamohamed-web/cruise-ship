const Ship = require('/Users/mustafamohammed/Desktop/Everything/manchester/cruise-ship/src.js');


describe ('Ship', ()=>{
it('Can be instantiated', ()=>{
    expect(new Ship()).toBeInstanceOf(Object);
})
it('It has a starting port',()=>{
    const ship = new Ship('London')
    expect(ship.startingPort).toBe('London')
})
it('can set sail',()=>{
    const ship = new Ship(null)
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
})
});