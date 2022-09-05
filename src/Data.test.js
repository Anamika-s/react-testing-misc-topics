
const data = require('./Data')

describe('Testing Data ' , ()=>
{
  it('Shud return Ajay' , ()=>
  {
    let act = data();
    expect(act).toEqual({name:'Ajay'})
  })
})