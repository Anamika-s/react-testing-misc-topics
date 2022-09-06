
import Abt from './Abt'
import {shallow} from "enzyme"

describe('testing Abt comp' ,() => 
{
  it('testcase1', () =>
  {
    const wrapper = shallow(<Abt/>)
    expect(wrapper.state()) .toEqual({name:'Ajay', age:20})
  })
  it('testcase2', () =>
  { 
    const wrapper = shallow(<Abt/>)
    expect(wrapper.contains(<div>About</div>)).toEqual(true)
  })

  it('testcase3', () =>
  { 
    const wrapper = shallow(<Abt/>)
    console.log(wrapper.debug())
    expect(wrapper.containsMatchingElement(<div>About</div>)).toEqual(true)
  })
  it('testcase4', () =>
  { 
    const wrapper = shallow(<Abt/>)
    expect(wrapper.containsAnyMatchingElements([<div>About</div>,<div>About1</div>])).toEqual(true)
  })



})