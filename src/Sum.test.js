const sum = require('./Sum')

// Test Suite 
describe('testing Sum Function ....',()=>
{
// Test Case
it("test1" , ()=>
{
  let data = 10;
  expect(data).toBe(10)
})



it("2 and 3 shud give 5" , ()=>
{ 
   let expected = 5;
   let actual = sum(2,3);
   expect(expected).toBe(actual)
})



it("20 and 3 shud give 23" , ()=>
{ 
   let expected = 23;
   let actual = sum(20,3);
   expect(expected).toBe(actual)
})


it("2 and 3 shud be less than 6" , ()=>
{ 
    
   expect(sum(2,3)).toBeLessThan(6)
})



it("2 and 3 shud not be 6" , ()=>
{ 
   expect(sum(2,3)).not.toBe(6)
})
 
})

