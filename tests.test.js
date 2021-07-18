const Ship = require('/Users/mustafamohammed/Desktop/Everything/manchester/cruise-ship/src.js');
const ship = require('/Users/mustafamohammed/Desktop/Everything/manchester/cruise-ship/src.js')

describe ('Ship', ()=>{
it('Can be instantiated', ()=>{
    expect(new ship()).toBeInstanceOf(Object);
})
it('It has a starting port',()=>{
    const ship = new Ship('London')
    expect(ship.startingPort).toBe('London')
})
});