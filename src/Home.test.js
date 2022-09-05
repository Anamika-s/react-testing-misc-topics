import Home from './Home'
import {shallow} from "enzyme"
// import Adapter from   'enzyme-adapter-react-16'
describe('test suite for Home Comp', ()=>
{
  it('home' , ()=>
  {
    let wrapper = shallow(<Home/>)
    console.log(wrapper);
  })
})
