const Port = require('./port.js')


describe ('Port', ()=>{
    it('Can be instantiated', ()=>{
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('It has a name',()=>{
        const port = new Port('London')
        expect(port.name).toBe('London')
    })
})
