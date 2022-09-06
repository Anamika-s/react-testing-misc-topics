import Blog from './Blog';
import {shallow} from "enzyme"

describe('Testsing Blog Comp' ,()=>
{
it('testcase1', ()=>
{
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('.list1').length).toBe(3)
})
it('testcase2', ()=>
{
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('.list1').at(0).key()).toBe('key1')
})

it('testcase3', ()=>
{
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('.class2').childAt(0).type()).toBe('span')
})

it('testcase4', ()=>
{
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('ul').children().length).toBe(3)
})

it('testcase4', ()=>
{
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('.class3').hasClass('disabled')).toBe(true)
})

})