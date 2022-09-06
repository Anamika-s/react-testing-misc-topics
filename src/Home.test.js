import Home from './Home'
import {shallow} from "enzyme"
 
describe('test suite for Home Comp', ()=>
{
  
  // AAA
  // A > Arrange
  // A > Act
  // A > Assert
  it('testing home component' , ()=>
  {
    let wrapper = shallow(<Home/>)
    console.log(wrapper.debug());
    expect(wrapper.exists('.homeClass')).toEqual(true)
  })
})
